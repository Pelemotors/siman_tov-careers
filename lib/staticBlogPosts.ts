// פוסטים סטטיים לבלוג - מורידים מהאתר הקיים

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
  {
    id: 5998,
    slug: 'רוצים-לקבל-יותר-טלפונים-ממגייסים-אלו-5',
    title_he: "רוצים לקבל יותר טלפונים ממגייסים? אלו 5 הטעויות שאתם צריכים להמנע מהן!",
    title_ru: "רוצים לקבל יותר טלפונים ממגייסים? אלו 5 הטעויות שאתם צריכים להמנע מהן!",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/3.png',
    published_at: '2025-10-21T12:29:19',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5980,
    slug: 'אמא-חוזרת-לעבודה-אחרי-חופשת-לידה-הקשיי',
    title_he: "אמא- חוזרת לעבודה אחרי חופשת לידה? הקשיים שלך לגיטימיים ואת לא לבד!",
    title_ru: "אמא- חוזרת לעבודה אחרי חופשת לידה? הקשיים שלך לגיטימיים ואת לא לבד!",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/pexels-rdne-6414709-scaled.jpg',
    published_at: '2025-05-08T13:33:26',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
      {
        blog_tags: {
          name_he: "ייעוץ תעסוקתי",
          name_ru: "ייעוץ תעסוקתי",
          slug: '%d7%99%d7%99%d7%a2%d7%95%d7%a5-%d7%aa%d7%a2%d7%a1%d7%95%d7%a7%d7%aa%d7%99',
        },
      },
      {
        blog_tags: {
          name_he: "מחפשת עבודה",
          name_ru: "מחפשת עבודה",
          slug: '%d7%9e%d7%97%d7%a4%d7%a9%d7%aa-%d7%a2%d7%91%d7%95%d7%93%d7%94',
        },
      },
      {
        blog_tags: {
          name_he: "קורות חיים",
          name_ru: "קורות חיים",
          slug: '%d7%a7%d7%95%d7%a8%d7%95%d7%aa-%d7%97%d7%99%d7%99%d7%9d',
        },
      },
      {
        blog_tags: {
          name_he: "ראיון עבודה",
          name_ru: "ראיון עבודה",
          slug: '%d7%a8%d7%90%d7%99%d7%95%d7%9f-%d7%a2%d7%91%d7%95%d7%93%d7%94',
        },
      },
      {
        blog_tags: {
          name_he: "שינוי קריירה",
          name_ru: "שינוי קריירה",
          slug: '%d7%a9%d7%99%d7%a0%d7%95%d7%99-%d7%a7%d7%a8%d7%99%d7%99%d7%a8%d7%94',
        },
      },
    ],
  },
  {
    id: 5968,
    slug: '״לא-בחרתי-לעבוד-שם״-אז-מי-כן-🤯-זהו-ציטו',
    title_he: "״לא בחרתי לעבוד שם״- אז מי כן?! 🤯 זהו ציטוט שקיבלתי ממחפשת עבודה שאני מלווה",
    title_ru: "״לא בחרתי לעבוד שם״- אז מי כן?! 🤯 זהו ציטוט שקיבלתי ממחפשת עבודה שאני מלווה",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/1736181359587.jpg',
    published_at: '2025-01-12T16:17:13',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5848,
    slug: 'האם-חלק-מהמקצועות-בהייטק-הולכים-להיע',
    title_he: "&quot;האם חלק מהמקצועות בהייטק הולכים להיעלם בעידן ה-AI? סקירה מקיפה של השינויים הצפויים",
    title_ru: "&quot;האם חלק מהמקצועות בהייטק הולכים להיעלם בעידן ה-AI? סקירה מקיפה של השינויים הצפויים",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/_____-___-7.png',
    published_at: '2024-11-11T13:16:21',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5844,
    slug: '״אני-מצטער-אבל-מדובר-באיכות-קוד-של-הודי',
    title_he: "״מצטער, אבל מדובר באיכות קוד של הודי שמקבל דולר ליום עבודה, לא הייתי מזמן אותך לראיון״🙄",
    title_ru: "״מצטער, אבל מדובר באיכות קוד של הודי שמקבל דולר ליום עבודה, לא הייתי מזמן אותך לראיון״🙄",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/code-coding-programming-technology-technical-concept_53876-120436.jpg',
    published_at: '2024-10-30T14:01:36',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5836,
    slug: 'אחרי-החגים-גרסת-2024-ככה-תגיעו-מוכנים-לגל',
    title_he: "״אחרי החגים״- גרסת 2024, ככה תגיעו מוכנים לגל הגיוסים הגדול של חגי תשרי בצורה אפקטיבית!",
    title_ru: "״אחרי החגים״- גרסת 2024, ככה תגיעו מוכנים לגל הגיוסים הגדול של חגי תשרי בצורה אפקטיבית!",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/shutterstock_2319803585_______.jpg',
    published_at: '2024-09-29T13:26:25',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5829,
    slug: 'לא-מוצאים-משרות-מדויקות-בלינקדאין-קבל',
    title_he: "לא מוצאים משרות מדויקות בלינקדאין? המדריך המלא לחיפוש עבודה בפלטפורמה 📌",
    title_ru: "לא מוצאים משרות מדויקות בלינקדאין? המדריך המלא לחיפוש עבודה בפלטפורמה 📌",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/3FF.png',
    published_at: '2024-09-02T13:28:12',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5819,
    slug: 'רשתות-חברתיות-והגדרת-מותג-אישי-איך-להש',
    title_he: "רשתות חברתיות ובניית מותג אישי שחשוב לטפח: כך תשמשו בהן כדי למצוא עבודה",
    title_ru: "רשתות חברתיות ובניית מותג אישי שחשוב לטפח: כך תשמשו בהן כדי למצוא עבודה",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/branding-innovation-creative-inspire-concept_53876-120936.jpg',
    published_at: '2024-07-28T17:26:08',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5814,
    slug: 'האם-זה-לגיטימי-לבקש-ממגייסת-הארכה-בהגש',
    title_he: "&quot;לגיטימי לבקש הארכה בהגשת מטלה?  בעלי חזר ממילואים ויש לי איתו רק 24 שעות?&quot;",
    title_ru: "&quot;לגיטימי לבקש הארכה בהגשת מטלה?  בעלי חזר ממילואים ויש לי איתו רק 24 שעות?&quot;",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/american-soldier-with-his-loving-wife-standing-dry-grassy-field_181624-26442.jpg',
    published_at: '2024-07-15T18:14:05',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5811,
    slug: 'האם-טוב-שיווק-טוב-משמן-טוב',
    title_he: "האם טוב שיווק עצמי טוב, משמן טוב? אתם כנראה יודעים את התשובה, ועדיין לא מקפידים על כך.",
    title_ru: "האם טוב שיווק עצמי טוב, משמן טוב? אתם כנראה יודעים את התשובה, ועדיין לא מקפידים על כך.",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/happy-male-candidate-greeting-member-human-resource-team-job-interview-office_637285-6567.jpg',
    published_at: '2024-07-15T18:11:13',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5808,
    slug: 'פיטרו-אותי-ואף-אחד-באמת-לא-מספק-תשובות',
    title_he: "&quot;פיטרו אותי הבוקר בזום, ולא הצלחתי לקבל תשובות קונקרטיות באשר לסיבה&quot;.",
    title_ru: "&quot;פיטרו אותי הבוקר בזום, ולא הצלחתי לקבל תשובות קונקרטיות באשר לסיבה&quot;.",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/desperate-man-sitting-outside-his-former-office-building-concept-being-dismissed_746318-763.jpg',
    published_at: '2024-07-15T18:06:21',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5801,
    slug: 'אלו-הדברים-שאנשי-קריירה-לא-יספרו-לכם-על',
    title_he: "אלו הדברים שאנשי קריירה לא יספרו לכם על איך כלי AI מסייעים למחפשי העבודה שלנו 🎯",
    title_ru: "אלו הדברים שאנשי קריירה לא יספרו לכם על איך כלי AI מסייעים למחפשי העבודה שלנו 🎯",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg',
    published_at: '2024-07-15T17:22:36',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 5797,
    slug: 'איך-את-החילונית-עם-גינס-קרעים-ופליילי',
    title_he: "&quot;איך את, האישה החילונית- תלווי בחור דתי, חובש כיפה שאפילו לא גר באיזור המגורים שלך?!&quot;",
    title_ru: "&quot;איך את, האישה החילונית- תלווי בחור דתי, חובש כיפה שאפילו לא גר באיזור המגורים שלך?!&quot;",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/1705264306272.jpeg',
    published_at: '2024-07-15T17:14:56',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 4362,
    slug: 'כיצד-להתכונן-ליריד-תעסוקה',
    title_he: "כיצד להתכונן ליריד תעסוקה- המדריך המלא להצלחה ביצירת קשרים מקצועיים והזדמנויות חדשות",
    title_ru: "כיצד להתכונן ליריד תעסוקה- המדריך המלא להצלחה ביצירת קשרים מקצועיים והזדמנויות חדשות",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/_____-_____-____-_______-_____-______.webp',
    published_at: '2023-07-16T16:00:57',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 4357,
    slug: 'כשלינקדאין-הופך-למציאות',
    title_he: "לא מבצעים פגישות נטוורקינג עם קולגות/אנשים מוערכים מהלינקדאין? חבל, אתם מפספסים!",
    title_ru: "לא מבצעים פגישות נטוורקינג עם קולגות/אנשים מוערכים מהלינקדאין? חבל, אתם מפספסים!",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/_____-_____-__________-____-_______.webp',
    published_at: '2023-07-16T15:43:10',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 51,
    slug: 'איך-למנף-את-תקופת-חג-הפסח-לטובת-חיפוש-הע',
    title_he: "איך למנף את תקופת חג הפסח לטובת חיפוש העבודה- כמה טיפים שווים, לגזור ולשמור!",
    title_ru: "איך למנף את תקופת חג הפסח לטובת חיפוש העבודה- כמה טיפים שווים, לגזור ולשמור!",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/DSC_0040-scaled.jpg',
    published_at: '2023-05-21T15:02:19',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 66,
    slug: 'ראיון-טלפוני-איך-לצלוח-אותו-בשלום',
    title_he: "ראיון טלפוני- שלב שהרבה מחפשי עבודה נוטים לזלזל בו. ככה תעשו את זה נכון!",
    title_ru: "ראיון טלפוני- שלב שהרבה מחפשי עבודה נוטים לזלזל בו. ככה תעשו את זה נכון!",
    content_he: "\n<p class=\"artpost has-vivid-red-color has-text-color\" style=\"font-size:0px\"></p>\n",
    content_ru: "\n<p class=\"artpost has-vivid-red-color has-text-color\" style=\"font-size:0px\"></p>\n",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/bunny-3830669_1920.jpg',
    published_at: '2023-05-21T15:01:02',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 64,
    slug: 'קורות-חיים-טובים-למה-בעצם',
    title_he: "למה צריך עדיין קורות חיים, בעידן בו הלינקדאין מספר הכל? בואו להבין את החשיבות",
    title_ru: "למה צריך עדיין קורות חיים, בעידן בו הלינקדאין מספר הכל? בואו להבין את החשיבות",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/_____-_____-_____-____-___-____.webp',
    published_at: '2023-05-21T15:00:18',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 59,
    slug: 'מי-מפחד-מהזאב-הרע-שנקרא-אנגלית',
    title_he: "מי מפחד מהזאב הרע שנקרא 'אנגלית' בחיפוש העבודה? קבלו כמה טיפים פרקטיים לתרגול שיעזרו",
    title_ru: "מי מפחד מהזאב הרע שנקרא 'אנגלית' בחיפוש העבודה? קבלו כמה טיפים פרקטיים לתרגול שיעזרו",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/dart-38220_1920.png',
    published_at: '2023-05-21T14:58:02',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 57,
    slug: 'כמה-פעמים-יצאתם-לדייט-כשמראש-ידעתם-בוו',
    title_he: "כמה פעמים יצאתם לדייט, כשמראש ידעתם שהאדם  לא מתאים? אז למה בחיפוש עבודה כן?",
    title_ru: "כמה פעמים יצאתם לדייט, כשמראש ידעתם שהאדם  לא מתאים? אז למה בחיפוש עבודה כן?",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/___-_____-_____-_____-______-_____-_____-__-_____-___.webp',
    published_at: '2023-05-21T14:57:26',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 55,
    slug: 'אם-היית-פרי-איזה-פרי-היית',
    title_he: "&quot;אם היית פרי-איזה פרי היית?&quot; השאלה המשונה שצצה בחיינו לאחרונה וכיצד להתמודד איתה",
    title_ru: "&quot;אם היית פרי-איזה פרי היית?&quot; השאלה המשונה שצצה בחיינו לאחרונה וכיצד להתמודד איתה",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/____-___-___.webp',
    published_at: '2023-05-21T14:56:54',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 49,
    slug: 'איך-זה-מרגיש-לבנות-למישהו-פרופיל-לינקד',
    title_he: "מה אני עושה כשאני בונה לכם פרופיל לינקדאין, ומה תוכלו ללמוד מזה כשתעשו זאת בעצמכם?",
    title_ru: "מה אני עושה כשאני בונה לכם פרופיל לינקדאין, ומה תוכלו ללמוד מזה כשתעשו זאת בעצמכם?",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/___-__-_____-_____-______-______-________.webp',
    published_at: '2023-05-21T14:31:10',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 47,
    slug: 'איך-הפכתי-עובדת-טובה-יותר-מאז-שאני-אמא',
    title_he: "איך הפכתי עובדת טובה יותר מאז שאני אמא, ומה מרגישות שפע של אימהות בשוק התעסוקה",
    title_ru: "איך הפכתי עובדת טובה יותר מאז שאני אמא, ומה מרגישות שפע של אימהות בשוק התעסוקה",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/___-_____-_____-____-____-___-____-___-1.webp',
    published_at: '2023-05-21T14:28:10',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 43,
    slug: 'מאיש-חינוך-לרכז-משא-בהייטק-הייתכן',
    title_he: "מאיש חינוך למגייס טכנולוגי בהייטק- הייתכן?! סיפורו מעורר ההשראה (והלא שגרתי) של ערן קדם",
    title_ru: "מאיש חינוך למגייס טכנולוגי בהייטק- הייתכן?! סיפורו מעורר ההשראה (והלא שגרתי) של ערן קדם",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/___-___.webp',
    published_at: '2023-05-21T14:21:22',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 40,
    slug: 'ערן-פינגר-מעצב-אופנה-שרוצה-לעשות-הסבה-ל',
    title_he: "ערן פינגר- מעצב אופנה שביצע הסבה לעולמות הסייבר",
    title_ru: "ערן פינגר- מעצב אופנה שביצע הסבה לעולמות הסייבר",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/___-_____.webp',
    published_at: '2023-05-21T14:20:34',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  },
  {
    id: 28,
    slug: 'עם-כזה-ממליץ-מי-צריך-אויבים-וגם-חמישה',
    title_he: "&quot;עם כזה ממליץ, מי צריך אויבים?!&quot;",
    title_ru: "&quot;עם כזה ממליץ, מי צריך אויבים?!&quot;",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '/images/blog/_____-_____-__-________.webp',
    published_at: '2023-05-21T14:14:51',
    published: true,
    blog_categories: {
      name_he: "מאמרים",
      name_ru: "מאמרים",
      slug: 'articles',
    },
    blog_post_tags: [
    ],
  }
];

export function getPostBySlug(slug: string): StaticBlogPost | null {
  return staticBlogPosts.find((post) => post.slug === slug && post.published) || null;
}

export function getAllPosts(): StaticBlogPost[] {
  return staticBlogPosts.filter((post) => post.published);
}
