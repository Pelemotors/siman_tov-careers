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
    content_he: "<p>חיפוש עבודה יכול להיות תהליך מתסכל, במיוחד כשאתם שולחים קורות חיים רבים ולא מקבלים תגובה. אם אתם רוצים לקבל יותר טלפונים ממגייסות, חשוב להכיר את הטעויות הנפוצות ולהימנע מהן.</p><h2>1. קורות חיים לא מותאמים למשרה</h2><p>אחד השגיאות הנפוצות ביותר היא שליחת קורות חיים כלליים לכל המשרות. מגייסות מחפשות מועמדים שתואמים בדיוק לדרישות התפקיד. חשוב להתאים את קורות החיים לכל משרה, להדגיש את הניסיון הרלוונטי ולהוסיף מילות מפתח מהמודעה.</p><h2>2. פרופיל לינקדאין לא מעודכן</h2><p>מגייסות רבות בודקות את פרופיל הלינקדאין שלכם לפני שהן מתקשרות. פרופיל לא מעודכן, תמונה לא מקצועית או חוסר בתוכן יכול לפגוע בסיכויי ההצלחה שלכם. ודאו שהפרופיל מעודכן, מקצועי ומשקף את הניסיון שלכם.</p><h2>3. חוסר בהירות במסרים</h2><p>חשוב להיות ברורים וחדים במה שאתם מחפשים ובמה שאתם יכולים להציע. מסר מטושטש או כללי מדי לא ימשוך את תשומת הלב של המגייסות. הגדירו לעצמכם מה המשרה האידיאלית שלכם והביעו זאת בבירור.</p><h2>4. חוסר פעילות ברשתות החברתיות</h2><p>רשתות חברתיות מקצועיות, במיוחד לינקדאין, הן כלי חשוב בחיפוש עבודה. חוסר פעילות, היעדר קשרים מקצועיים או היעדר תוכן מקצועי יכול לפגוע בנראות שלכם. היו פעילים, שתפו תוכן רלוונטי וצרו קשרים מקצועיים.</p><h2>5. היעדר מעקב אחר פניות</h2><p>לאחר שליחת קורות חיים, חשוב לעקוב אחר הפניות. אולם, יש לעשות זאת בצורה מקצועית ומכובדת. מכתב מעקב קצר ומנומס יכול לעזור, אבל אל תהפכו למטרידים. התקשרו פעם אחת או שלחו אימייל אחד נוסף לאחר שבוע-שבועיים.</p><p>להימנע מטעויות אלו יכול לשפר משמעותית את הסיכויים שלכם לקבל פניות ממגייסות. זכרו - חיפוש עבודה הוא תהליך שדורש סבלנות, התמדה וגישה מקצועית.</p>",
    content_ru: "",
    excerpt_he: "5 טעויות נפוצות שחשוב להימנע מהן כדי לקבל יותר פניות ממגייסות - מדריך מקצועי לחיפוש עבודה מוצלח",
    excerpt_ru: "",
    featured_image_url: '',
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
    content_he: "<p>חזרה לעבודה אחרי חופשת לידה היא שלב משמעותי בחיים של כל אישה. זהו תהליך שיכול להיות מאתגר, מלחיץ ומבלבל. חשוב לדעת שהקשיים שאתן חוות הם לגיטימיים לחלוטין ואתן בהחלט לא לבד.</p><h2>האתגרים של חזרה לעבודה אחרי חופשת לידה</h2><p>חזרה לעבודה אחרי תקופה ארוכה בבית יכולה להציב אתגרים רבים. יש צורך להתמודד עם שינויים במקום העבודה, להסתגל מחדש לשגרת עבודה, ולשלב בין דרישות העבודה לבין הצרכים של התינוק והמשפחה.</p><h2>תחושות רגשיות נפוצות</h2><p>רגשות מעורבים הם נורמליים לחלוטין. מצד אחד, יש את הרצון לחזור לעבודה, לפתח קריירה ולהיות חלק מהעולם המקצועי. מצד שני, יש את החששות והאשמה על עזיבת התינוק. חשוב להבין שכל התחושות האלו הן טבעיות ונורמליות.</p><h2>איך להתמודד עם החזרה לעבודה</h2><p>הכנה מראש יכולה לעזור מאוד. כדאי לתכנן את החזרה, לדבר עם המעסיק על הצרכים שלכן, ולמצוא פתרונות שיאפשרו לכן לשלב בין העבודה לבין המשפחה. חשוב גם לזכור שזה תהליך שדורש זמן והסתגלות.</p><h2>תמיכה מהסביבה</h2><p>אל תהססו לבקש תמיכה. תמיכה מבן הזוג, מהמשפחה, מהחברים או מהקולגות בעבודה יכולה לעזור מאוד. זכרו - אתן לא צריכות לעשות את זה לבד.</p><p>חזרה לעבודה אחרי חופשת לידה היא מסע שדורש סבלנות, הבנה ותמיכה. זכרו שהקשיים שאתן חוות הם לגיטימיים, ואתן בהחלט לא לבד במסע הזה.</p>",
    content_ru: "",
    excerpt_he: "מדריך מקיף לאימהות שחוזרות לעבודה אחרי חופשת לידה - התמודדות עם אתגרים, רגשות נפוצים וטיפים מעשיים",
    excerpt_ru: "",
    featured_image_url: '',
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
    content_he: "<p>זהו ציטוט שמשקף בעיה נפוצה מאוד בחיפוש עבודה - תחושה שהבחירה אינה בידיים שלנו. אבל האמת היא שונה לחלוטין.</p><h2>מי באמת בוחר?</h2><p>כשאנחנו מחפשים עבודה, יש לנו הרבה יותר כוח בחירה ממה שאנחנו חושבים. אמנם לא כל מקום עבודה יתאים לנו, אבל יש לנו יכולת להחליט לאן אנחנו רוצים להגיש מועמדות, מה אנחנו מוכנים לקבל, ומה לא.</p><h2>הבחירה היא שלנו</h2><p>אנחנו בוחרים אילו משרות לבדוק, אילו חברות מעניינות אותנו, מה התנאים שאנחנו מוכנים לקבל, ומה הקריטריונים החשובים לנו. הבחירה היא שלנו, גם אם לפעמים נדמה שהיא לא.</p><h2>איך לעשות בחירות נכונות</h2><p>חשוב להגדיר לעצמנו מה חשוב לנו, מה הקריטריונים שלנו, ומה אנחנו מוכנים להתפשר עליו ומה לא. כשיש לנו בהירות לגבי מה שאנחנו רוצים, קל יותר לעשות בחירות נכונות.</p><h2>לקחת אחריות</h2><p>חשוב לקחת אחריות על הבחירות שלנו. אנחנו אלה שבוחרים לאן להגיש מועמדות, מה לקבל ומה לדחות. כשאנחנו לוקחים אחריות, אנחנו מרגישים יותר בשליטה ויכולים לכוון את הקריירה שלנו בכיוון הנכון.</p><p>זכרו - הבחירה היא שלכם. אתם אלה שבוחרים איפה לעבוד, מה לקבל ומה לא. קחו אחריות על הקריירה שלכם ותעשו בחירות שמתאימות לכם.</p>",
    content_ru: "",
    excerpt_he: "מי באמת בוחר איפה לעבוד? מדוע חשוב לקחת אחריות על הבחירות שלנו בחיפוש עבודה וכיצד לעשות זאת",
    excerpt_ru: "",
    featured_image_url: '',
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
    title_he: ""האם חלק מהמקצועות בהייטק הולכים להיעלם בעידן ה-AI? סקירה מקיפה של השינויים הצפויים",
    title_ru: ""האם חלק מהמקצועות בהייטק הולכים להיעלם בעידן ה-AI? סקירה מקיפה של השינויים הצפויים",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    title_he: ""לגיטימי לבקש הארכה בהגשת מטלה?  בעלי חזר ממילואים ויש לי איתו רק 24 שעות?"",
    title_ru: ""לגיטימי לבקש הארכה בהגשת מטלה?  בעלי חזר ממילואים ויש לי איתו רק 24 שעות?"",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '',
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
    featured_image_url: '',
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
    title_he: ""פיטרו אותי הבוקר בזום, ולא הצלחתי לקבל תשובות קונקרטיות באשר לסיבה".",
    title_ru: ""פיטרו אותי הבוקר בזום, ולא הצלחתי לקבל תשובות קונקרטיות באשר לסיבה".",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '',
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
    featured_image_url: '',
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
    title_he: ""איך את, האישה החילונית- תלווי בחור דתי, חובש כיפה שאפילו לא גר באיזור המגורים שלך?!"",
    title_ru: ""איך את, האישה החילונית- תלווי בחור דתי, חובש כיפה שאפילו לא גר באיזור המגורים שלך?!"",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    title_he: ""אם היית פרי-איזה פרי היית?" השאלה המשונה שצצה בחיינו לאחרונה וכיצד להתמודד איתה",
    title_ru: ""אם היית פרי-איזה פרי היית?" השאלה המשונה שצצה בחיינו לאחרונה וכיצד להתמודד איתה",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    featured_image_url: '',
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
    title_he: ""עם כזה ממליץ, מי צריך אויבים?!"",
    title_ru: ""עם כזה ממליץ, מי צריך אויבים?!"",
    content_he: "",
    content_ru: "",
    excerpt_he: "",
    excerpt_ru: "",
    featured_image_url: '',
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

