const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const WORDPRESS_URL = 'https://hanit-careers.co';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'blog');
const POSTS_FILE = path.join(__dirname, '..', 'lib', 'migrated-blog-posts.json');

// יצירת תיקיית התמונות אם לא קיימת
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// פונקציה להורדת קובץ
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // מעקב אחרי redirects
        return downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

// פונקציה לניקוי שם קובץ
function sanitizeFilename(filename) {
  // הסרת תווים מיוחדים ושמירה רק על אותיות, מספרים, נקודות ומקפים
  let clean = decodeURIComponent(filename);
  clean = clean.replace(/[^a-zA-Z0-9.\-_]/g, '_');
  // הגבלת אורך שם הקובץ
  if (clean.length > 100) {
    const ext = path.extname(clean);
    clean = clean.substring(0, 100 - ext.length) + ext;
  }
  return clean || 'image.jpg';
}

// פונקציה להורדת תמונה
async function downloadImage(imageUrl, postId, index = 0) {
  try {
    const url = new URL(imageUrl);
    let filename = path.basename(url.pathname) || `post-${postId}-${index}.jpg`;
    filename = sanitizeFilename(filename);
    
    // אם אין סיומת, נוסיף .jpg
    if (!path.extname(filename)) {
      filename = `${filename}.jpg`;
    }
    
    const filepath = path.join(OUTPUT_DIR, filename);
    
    // אם התמונה כבר קיימת, לא נשמור שוב
    if (fs.existsSync(filepath)) {
      console.log(`תמונה כבר קיימת: ${filename}`);
      return `/images/blog/${filename}`;
    }
    
    await downloadFile(imageUrl, filepath);
    console.log(`הורדתי תמונה: ${filename}`);
    return `/images/blog/${filename}`;
  } catch (error) {
    console.error(`שגיאה בהורדת תמונה ${imageUrl}:`, error.message);
    return null;
  }
}

// פונקציה לקבלת מידע על תמונה מה-API
async function getMediaInfo(mediaId) {
  return new Promise((resolve, reject) => {
    const url = `${WORDPRESS_URL}/wp-json/wp/v2/media/${mediaId}`;
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// פונקציה לקבלת כל המאמרים
async function getAllPosts() {
  return new Promise((resolve, reject) => {
    const url = `${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100&_embed=true`;
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const posts = JSON.parse(data);
          resolve(posts);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// פונקציה לקבלת קטגוריות
async function getCategories() {
  return new Promise((resolve, reject) => {
    const url = `${WORDPRESS_URL}/wp-json/wp/v2/categories`;
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const categories = JSON.parse(data);
          resolve(categories);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// פונקציה לקבלת תגיות
async function getTags() {
  return new Promise((resolve, reject) => {
    const url = `${WORDPRESS_URL}/wp-json/wp/v2/tags`;
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const tags = JSON.parse(data);
          resolve(tags);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// פונקציה להמרת HTML ל-text פשוט (לצורך excerpt)
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
    .substring(0, 200); // הגבלה ל-200 תווים
}

// פונקציה להמרת slug
function decodeSlug(slug) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

// פונקציה ראשית
async function migrateBlog() {
  console.log('מתחיל תהליך העתקת הבלוג...\n');
  
  try {
    // קבלת כל הנתונים
    console.log('מוריד מאמרים...');
    const posts = await getAllPosts();
    console.log(`נמצאו ${posts.length} מאמרים\n`);
    
    console.log('מוריד קטגוריות...');
    const categories = await getCategories();
    const categoriesMap = {};
    categories.forEach(cat => {
      categoriesMap[cat.id] = {
        name_he: cat.name,
        name_ru: cat.name, // WordPress לא תומך ברוסית, נשתמש בעברית
        slug: cat.slug
      };
    });
    
    console.log('מוריד תגיות...');
    const tags = await getTags();
    const tagsMap = {};
    tags.forEach(tag => {
      tagsMap[tag.id] = {
        name_he: tag.name,
        name_ru: tag.name,
        slug: tag.slug
      };
    });
    
    // עיבוד כל מאמר
    const migratedPosts = [];
    
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      console.log(`\nמעבד מאמר ${i + 1}/${posts.length}: ${post.title.rendered}`);
      
      // הורדת תמונה ראשית
      let featuredImageUrl = null;
      if (post.featured_media && post.featured_media > 0) {
        try {
          const mediaInfo = await getMediaInfo(post.featured_media);
          if (mediaInfo && mediaInfo.source_url) {
            featuredImageUrl = await downloadImage(mediaInfo.source_url, post.id);
            // המתנה קצרה בין הורדות
            await new Promise(resolve => setTimeout(resolve, 500));
          }
        } catch (error) {
          console.error(`שגיאה בקבלת תמונה למאמר ${post.id}:`, error.message);
        }
      }
      
      // חילוץ תמונות מתוכן המאמר
      const content = post.content.rendered || '';
      const imageMatches = content.match(/<img[^>]+src="([^"]+)"/g) || [];
      let imageIndex = 0;
      for (const imgMatch of imageMatches) {
        const srcMatch = imgMatch.match(/src="([^"]+)"/);
        if (srcMatch && srcMatch[1]) {
          const imgUrl = srcMatch[1].startsWith('http') 
            ? srcMatch[1] 
            : `${WORDPRESS_URL}${srcMatch[1]}`;
          try {
            await downloadImage(imgUrl, post.id, imageIndex++);
            await new Promise(resolve => setTimeout(resolve, 300));
          } catch (error) {
            console.error(`שגיאה בהורדת תמונה מתוכן: ${error.message}`);
          }
        }
      }
      
      // קבלת קטגוריה
      const categoryId = post.categories && post.categories.length > 0 ? post.categories[0] : null;
      const blogCategory = categoryId && categoriesMap[categoryId] 
        ? categoriesMap[categoryId]
        : {
            name_he: 'כללי',
            name_ru: 'כללי',
            slug: 'general'
          };
      
      // קבלת תגיות
      const postTags = [];
      if (post.tags && post.tags.length > 0) {
        post.tags.forEach(tagId => {
          if (tagsMap[tagId]) {
            postTags.push({
              blog_tags: tagsMap[tagId]
            });
          }
        });
      }
      
      // יצירת מאמר מועבר
      const migratedPost = {
        id: post.id,
        slug: decodeSlug(post.slug),
        title_he: post.title.rendered,
        title_ru: post.title.rendered, // WordPress לא תומך ברוסית
        content_he: content,
        content_ru: content,
        excerpt_he: stripHtml(post.excerpt.rendered) || stripHtml(content),
        excerpt_ru: stripHtml(post.excerpt.rendered) || stripHtml(content),
        featured_image_url: featuredImageUrl || '',
        published_at: post.date,
        published: post.status === 'publish',
        blog_categories: blogCategory,
        blog_post_tags: postTags
      };
      
      migratedPosts.push(migratedPost);
    }
    
    // שמירת המאמרים לקובץ JSON
    fs.writeFileSync(POSTS_FILE, JSON.stringify(migratedPosts, null, 2), 'utf8');
    console.log(`\n✅ הושלם! נשמרו ${migratedPosts.length} מאמרים לקובץ: ${POSTS_FILE}`);
    console.log(`✅ התמונות נשמרו בתיקייה: ${OUTPUT_DIR}`);
    
  } catch (error) {
    console.error('שגיאה בתהליך ההעתקה:', error);
    process.exit(1);
  }
}

// הרצת הסקריפט
migrateBlog();

