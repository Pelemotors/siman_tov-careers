// סקריפט להמרת הקובץ JSON לפורמט TypeScript
const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '..', 'lib', 'migrated-blog-posts.json');
const OUTPUT_FILE = path.join(__dirname, '..', 'lib', 'staticBlogPosts.ts');

// קריאת הקובץ JSON
const posts = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));

// יצירת קוד TypeScript
let tsCode = `// פוסטים סטטיים לבלוג - מורידים מהאתר הקיים

export interface StaticBlogPost {
  id: number;
  slug: string;
  title_he: string;
  title_ru: string;
  content_he: string;
  content_ru: string;
  excerpt_he: string;
  excerpt_ru: string;
  featured_image_url: string;
  published_at: string;
  published: boolean;
  blog_categories: {
    name_he: string;
    name_ru: string;
    slug: string;
  };
  blog_post_tags: Array<{
    blog_tags: {
      name_he: string;
      name_ru: string;
      slug: string;
    };
  }>;
}

export const staticBlogPosts: StaticBlogPost[] = [
`;

// הוספת כל מאמר
posts.forEach((post: any, index: number) => {
  const content = post.content_he || '';
  const excerpt = post.excerpt_he || '';
  
  // Escape של מחרוזות
  const escapeString = (str: string) => {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\${/g, '\\${')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r');
  };
  
  tsCode += `  {\n`;
  tsCode += `    id: ${post.id},\n`;
  tsCode += `    slug: '${post.slug}',\n`;
  tsCode += `    title_he: ${JSON.stringify(post.title_he)},\n`;
  tsCode += `    title_ru: ${JSON.stringify(post.title_ru)},\n`;
  tsCode += `    content_he: ${JSON.stringify(content)},\n`;
  tsCode += `    content_ru: ${JSON.stringify(post.content_ru || content)},\n`;
  tsCode += `    excerpt_he: ${JSON.stringify(excerpt)},\n`;
  tsCode += `    excerpt_ru: ${JSON.stringify(post.excerpt_ru || excerpt)},\n`;
  tsCode += `    featured_image_url: '${post.featured_image_url || ''}',\n`;
  tsCode += `    published_at: '${post.published_at}',\n`;
  tsCode += `    published: ${post.published},\n`;
  tsCode += `    blog_categories: {\n`;
  tsCode += `      name_he: ${JSON.stringify(post.blog_categories.name_he)},\n`;
  tsCode += `      name_ru: ${JSON.stringify(post.blog_categories.name_ru)},\n`;
  tsCode += `      slug: '${post.blog_categories.slug}',\n`;
  tsCode += `    },\n`;
  tsCode += `    blog_post_tags: [\n`;
  post.blog_post_tags.forEach((tag: any) => {
    tsCode += `      {\n`;
    tsCode += `        blog_tags: {\n`;
    tsCode += `          name_he: ${JSON.stringify(tag.blog_tags.name_he)},\n`;
    tsCode += `          name_ru: ${JSON.stringify(tag.blog_tags.name_ru)},\n`;
    tsCode += `          slug: '${tag.blog_tags.slug}',\n`;
    tsCode += `        },\n`;
    tsCode += `      },\n`;
  });
  tsCode += `    ],\n`;
  tsCode += `  }${index < posts.length - 1 ? ',' : ''}\n`;
});

tsCode += `];

export function getPostBySlug(slug: string): StaticBlogPost | null {
  return staticBlogPosts.find((post) => post.slug === slug && post.published) || null;
}

export function getAllPosts(): StaticBlogPost[] {
  return staticBlogPosts.filter((post) => post.published);
}
`;

// שמירת הקובץ
fs.writeFileSync(OUTPUT_FILE, tsCode, 'utf8');
console.log(`✅ הושלם! נשמרו ${posts.length} מאמרים לקובץ: ${OUTPUT_FILE}`);

