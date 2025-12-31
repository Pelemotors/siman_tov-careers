import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: 'שירותים - חניט קורן',
  description: 'ייעוץ קריירה מקצועי: כתיבת קורות חיים, הכנה לראיונות, בניית פרופיל לינקדאין וחיפוש עבודה. 10+ שנים בגיוס ומשאבי אנוש.',
  openGraph: {
    title: 'שירותים - חניט קורן',
    description: 'ייעוץ קריירה מקצועי: כתיבת קורות חיים, הכנה לראיונות, בניית פרופיל לינקדאין וחיפוש עבודה',
    url: `${baseUrl}/services`,
    siteName: 'חניט קורן',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            שירותים
          </h1>
          <p className="text-lg md:text-xl text-text-medium font-body max-w-3xl mx-auto">
            ייעוץ קריירה מקצועי עם 15+ שנות ניסיון בגיוס ומשאבי אנוש. ליוויתי כבר מעל 1,000 מחפשי עבודה לעבר משרת החלומות!
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-white border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-heading font-bold text-primary">
                תוכנית &quot;מחיפוש עבודה לחוזה חתום&quot; - 6 מפגשים
              </h2>
              <span className="bg-accent-sky text-white px-3 py-1 rounded-full text-sm font-heading font-semibold">
                מומלץ
              </span>
            </div>
            <p className="text-text-dark font-body mb-4 text-lg">
              <strong>מה זה:</strong> תוכנית מקיפה בת 6 מפגשים קבוצתיים שתעביר אתכם ממצב של &quot;שולחים ומקווים&quot; למצב של &quot;יודעים בדיוק מה לעשות ומשיגים את משרת החלומות&quot;.
            </p>
            <p className="text-text-dark font-body mb-4">
              <strong>מה כלול:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-dark font-body mb-4 ml-4">
              <li>6 מפגשים קבוצתיים עם אנשים בדיוק כמוכם</li>
              <li>כלים פרקטיים ליישום מיידי</li>
              <li>קהילת נטוורקינג פעילה</li>
              <li>ליווי אישי וצמוד לכל משתתף</li>
              <li>קבוצת ווטסאפ סגורה להתייעצויות ותמיכה יום-יומית</li>
              <li>גישה למשרות חדשות, טיפים סודיים וחיפוש אנשי מפתח בחברות</li>
            </ul>
            <p className="text-text-dark font-body mb-4">
              <strong>תוצרים:</strong> קורות חיים משודרגים, פרופיל לינקדאין מקצועי, ארגז כלים מלא לראיונות, רשת קשרים אישית, וידע סודי על עולם הגיוס.
            </p>
            <div className="mt-6">
              <Button variant="primary" size="lg" asChild>
                <Link href="/programs/6-meetings">לפרטים המלאים על התוכנית</Link>
              </Button>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              כתיבת קורות חיים מותאמים למשרות
            </h2>
            <p className="text-text-dark font-body mb-3">
              <strong>מה זה:</strong> קורות חיים מקצועיים שמבליטים את הערך שלכם ועוברים בהצלחה מערכות ATS (המסננות האוטומטיות).
            </p>
            <p className="text-text-dark font-body mb-3">
              <strong>מה כלול:</strong> כתיבת תמצית מרשימה, הצגת הניסיון בצורה נכונה, שילוב הישגים בולטים, מילות מפתח מותאמות, ופידבק אישי.
            </p>
            <p className="text-text-dark font-body">
              <strong>למי מתאים:</strong> מחפשי עבודה שרוצים לבלוט בין אלפי קורות חיים ולקבל יותר פניות ממגייסים.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              בנייה/שדרוג של פרופיל הלינקדאין
            </h2>
            <p className="text-text-dark font-body mb-3">
              <strong>מה זה:</strong> בניית פרופיל לינקדאין מקצועי ומותאם אישית שיגרום למעסיקים לפנות אליכם.
            </p>
            <p className="text-text-dark font-body mb-3">
              <strong>מה כלול:</strong> כתיבת כותרת (Headline) מזקקת, About מקצועי ושיווקי, ניסוח ניסיון תעסוקתי, הוספת Skills נכונים, אופטימיזציה לחיפוש, ופידבק אישי.
            </p>
            <p className="text-text-dark font-body">
              <strong>למי מתאים:</strong> מחפשי עבודה שרוצים להגדיל את הנראות שלהם ולמשוך פניות איכותיות ממגייסים.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              הכנה מקיפה לראיונות ודיוק מסרים
            </h2>
            <p className="text-text-dark font-body mb-3">
              <strong>מה זה:</strong> הכנה מקצועית לראיונות עבודה, כולל ראיונות מתקדמים מול דרגים בכירים.
            </p>
            <p className="text-text-dark font-body mb-3">
              <strong>מה כלול:</strong> הכרת השאלות הרווחות בראיונות, טכניקות מוכחות לפיצוח שאלות, תרגול מעשי, אסטרטגיות למענה על שאלות מתקילות, וכלים להרשים את המראיינים.
            </p>
            <p className="text-text-dark font-body">
              <strong>למי מתאים:</strong> מועמדים שרוצים לעבור בהצלחה ראיונות ולזכות במשרה.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              פיצוח השלב הבא בקריירה על ידי כלים מקצועיים
            </h2>
            <p className="text-text-dark font-body mb-3">
              <strong>מה זה:</strong> ייעוץ קריירה מקיף שיעזור לכם להבין מה השלב הבא בקריירה שלכם ואיך להשיג אותו.
            </p>
            <p className="text-text-dark font-body mb-3">
              <strong>מה כלול:</strong> בניית טבלת עוגנים אישית, מיפוי מה חשוב לכם באמת, בניית תוכנית עבודה מותאמת, וכלים פרקטיים לקידום הקריירה.
            </p>
            <p className="text-text-dark font-body">
              <strong>למי מתאים:</strong> אנשים שמחפשים כיוון בקריירה או רוצים לעשות שינוי מקצועי.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              ליווי מנטלי, חיזוק ביטחון וחידוד חוזקות
            </h2>
            <p className="text-text-dark font-body mb-3">
              <strong>מה זה:</strong> ליווי מנטלי בתהליך חיפוש העבודה, כולל חיזוק הביטחון העצמי ופיתוח חוסן נפשי.
            </p>
            <p className="text-text-dark font-body mb-3">
              <strong>מה כלול:</strong> כלים להתמודדות עם התמודדויות נפשיות בתהליך חיפוש העבודה, חיזוק הביטחון העצמי, חידוד החוזקות שלכם, ופיתוח רושם חיובי בראיונות.
            </p>
            <p className="text-text-dark font-body">
              <strong>למי מתאים:</strong> מחפשי עבודה שמרגישים שהתהליך מציף אותם נפשית או מאבדים אמונה.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              ביצוע מפגשים 1X1 (&quot;שיעור פרטי&quot;) בכל נושא אחר הקשור לקריירה
            </h2>
            <p className="text-text-dark font-body mb-3">
              <strong>מה זה:</strong> מפגש אישי אחד על אחד לכל נושא הקשור לקריירה שלכם.
            </p>
            <p className="text-text-dark font-body mb-3">
              <strong>מה כלול:</strong> מפגש מותאם אישית לפי הצרכים שלכם, כלים פרקטיים, ופידבק אישי.
            </p>
            <p className="text-text-dark font-body">
              <strong>למי מתאים:</strong> מי שמחפש עזרה ספציפית בנושא מסוים או רוצה ליווי אישי יותר.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              העברת הרצאות וסדנאות לארגונים
            </h2>
            <p className="text-text-dark font-body mb-3">
              <strong>מה זה:</strong> הרצאות וסדנאות מקצועיות על חיפוש עבודה, כתיבת קורות חיים, הכנה לראיונות ועוד.
            </p>
            <p className="text-text-dark font-body mb-3">
              <strong>מה כלול:</strong> הרצאות מותאמות לצרכים של הארגון, כלים פרקטיים, ותוכן מעודכן.
            </p>
            <p className="text-text-dark font-body">
              <strong>למי מתאים:</strong> ארגונים שרוצים להעביר הרצאות וסדנאות לעובדים או למחפשי עבודה.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg font-body text-text-medium mb-6">
            לא בטוחים מה מתאים לכם? דברו איתי בוואטסאפ או השאירו פרטים ואחזור אליכם בהקדם.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                לשליחה בוואטסאפ
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/assessment">בדיקה מהירה (2 דקות)</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


