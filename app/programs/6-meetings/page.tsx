import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'תוכנית מחיפוש עבודה לחוזה חתום - 6 מפגשים | חגית סימן טוב',
  description: 'ב-6 מפגשים תעברו ממצב של "שולחים ומקווים להתקבל" למצב של "יודעים בדיוק מה לעשות ומשיגים את משרת החלומות"',
};

export default function SixMeetingsProgramPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <section className="relative mb-20 md:mb-32 py-12 md:py-20 bg-gradient-to-br from-white via-background-warm to-accent-lavender/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 max-w-4xl mx-auto leading-tight tracking-tight animate-fade-in">
            תוכנית &quot;מחיפוש עבודה לחוזה חתום&quot;
          </h1>
          <p className="text-2xl md:text-3xl text-text-dark mb-6 font-body max-w-3xl mx-auto font-medium leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            6 מפגשים שישנו עבורכם הכל!
          </p>
          <p className="text-xl md:text-2xl text-text-medium mb-8 font-body max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            ב-6 מפגשים תעברו ממצב של &quot;שולחים ומקווים להתקבל&quot;
            <br />
            למצב של &quot;יודעים בדיוק מה לעשות ומשיגים את משרת החלומות&quot;
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="primary" size="lg" asChild className="hover-lift">
              <Link href="/contact">
                צור קשר - להרשמה
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white shadow-lg">
              <Link href="/contact">השאירו פרטים ואחזור אליכם</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* מה כוללת התוכנית */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            מה כוללת התוכנית?
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-sky/5 border-2 border-accent-sky/20">
              <div className="flex items-start gap-3">
                <span className="text-accent-sky text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  השתתפות בשישה מפגשים קבוצתיים עם אנשים בדיוק כמוכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-lavender/5 border-2 border-accent-lavender/20">
              <div className="flex items-start gap-3">
                <span className="text-accent-lavender text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  שינוי המציאות של &quot;שליחת קורות חיים ו...לקוות לטוב&quot; למציאות של &quot;אני יודע/ת בדיוק מה אני שווה וגם המעסיק יבחין בזה&quot;!
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-pink/5 border-2 border-accent-pink/20">
              <div className="flex items-start gap-3">
                <span className="text-accent-pink text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  יצירת כוח של קהילת נטוורקינג, ביחד, שיעזור לכל משתתף בתוכנית להגיע למשרות השוות באמת!
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-warm/5 border-2 border-accent-warm/20">
              <div className="flex items-start gap-3">
                <span className="text-accent-warm text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  פיתוח קשרים, תרגול ואימון על חוסן נפשי ורושם חיובי בראיונות, העלאת הביטחון העצמי וקבלת כלים להשגת המשרה המתאימה לכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-sky/5 border-2 border-accent-sky/20">
              <div className="flex items-start gap-3">
                <span className="text-accent-sky text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  קבלת כלים פרקטים וקלים ליישום מיידי.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-lavender/5 border-2 border-accent-lavender/20">
              <div className="flex items-start gap-3">
                <span className="text-accent-lavender text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  גילוי של סודות מאחורי הקלעים, ומה ישכנע באמת את המעסיק לבחור דווקא בכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-pink/5 border-2 border-accent-pink/20 md:col-span-2">
              <div className="flex items-start gap-3">
                <span className="text-accent-pink text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  ליווי אישי וצמוד לכל משתתף, קבוצה פעילה לשיתופים ותמיכה ברמה היום-יומית.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* פירוט המפגשים */}
      <section className="mb-20 md:mb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-sky/5 to-transparent"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            אז מה תקבלו במפגשים?
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 space-y-8">
          {/* מפגש 1 */}
          <Card className="p-8 bg-gradient-to-br from-white to-accent-sky/10 border-2 border-accent-sky/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-sky text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg">
                1
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  📍 מפגש 1: מאיפה מתחילים, ומהם הצעדים הראשונים לקראת המשרה המיוחלת?
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sky">•</span>
                    <p className="text-text-dark font-body">
                      הכרות עם חברי הקבוצה, יצירת רשת תמיכה וקשרים, כניסה לקבוצת הוואטסאפ הסגורה והבלעדית (כן, כבר במפגש הראשון!)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sky">•</span>
                    <p className="text-text-dark font-body">
                      בניית טבלת עוגנים אישית: מה באמת חשוב לך? על מה לא להתפשר? על מה חשוב לוותר? ועוד רעיונות שיעזרו לכם להתפקס על הכיוון המקצועי בצורה חכמה.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sky">•</span>
                    <p className="text-text-dark font-body">
                      כיצד להגדיר במדויק את התפקיד שתרצו להשיג - ציפיות שכר, תחום בתעשייה, מיקום גיאוגרפי, דרג, מעמד ועוד פרמטרים שחשובים למציאת המשרה הבאה שלכם.
                    </p>
                  </li>
                </ul>
                <div className="bg-accent-sky/10 p-4 rounded-lg">
                  <p className="text-lg font-heading font-bold text-primary mb-2">💡 עם מה תצאו מהמפגש ולמה הוא חשוב?</p>
                  <p className="text-text-dark font-body">
                    רוב מחפשי העבודה מתחילים את התהליך בלי מיקוד, נבלעים בכאוס ובסוף מתפשרים. בסיום המפגש, תקבלו בהירות, מיקוד במשרה הבאה שבאמת מתאימה לכם, והתחלה של התהליך ברגל ימין. כמו כן, תקבלו משימות שיעזרו לכם לדייק ולהגדיר מה מתאים לכם, במה אתם הכי טובים וכיצד תוכלו לבלוט בין שאר מחפשי העבודה.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* מפגש 2 */}
          <Card className="p-8 bg-gradient-to-br from-white to-accent-lavender/10 border-2 border-accent-lavender/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-lavender text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg">
                2
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  📍 מפגש 2: בואו נדבר תפקידים - איך למצוא משרות שבאמת מתאימות לכם
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-lavender">•</span>
                    <p className="text-text-dark font-body">
                      פענוח התוצאות מהמפגש הקודם ומה גיליתם על עצמכם.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-lavender">•</span>
                    <p className="text-text-dark font-body">
                      השתתפות בסדנת איתור תפקידים: איך להשתמש נכון בכלי החיפוש השונים.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-lavender">•</span>
                    <p className="text-text-dark font-body">
                      בניית רשימת משרות מותאמת אישית, בעברית פשוטה, של משרות שמעניינות ומתאימות לך.
                    </p>
                  </li>
                </ul>
                <div className="bg-accent-lavender/10 p-4 rounded-lg">
                  <p className="text-lg font-heading font-bold text-primary mb-2">💡 עם מה תצאו מהמפגש ולמה הוא חשוב?</p>
                  <p className="text-text-dark font-body">
                    שמות של תפקידים הם דבר דינאמי, וכשאתם לא מתחקים אחריהם בכלים הנכונים, אתם מפספסים משרות שאחרים ישיגו במקומכם. בסיום המפגש תלמדו כיצד לבנות רשימת משרות מותאמות אישית עבורכם, כולל שימוש ברשתות ובכלים חדשניים כמו AI. העולם האמיתי מחכה לכם!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* מפגש 3 */}
          <Card className="p-8 bg-gradient-to-br from-white to-accent-pink/10 border-2 border-accent-pink/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-pink text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg">
                3
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  📍 מפגש 3: הסוד של קורות חיים שמביאים פניות
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink">•</span>
                    <p className="text-text-dark font-body">
                      מה באמת מחפשות המגייסות ואיך לבלוט בין אלפי קורות חיים.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink">•</span>
                    <p className="text-text-dark font-body">
                      איך לעבור בהצלחה מערכות ATS (המסננות האוטומטיות של קורות החיים).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink">•</span>
                    <p className="text-text-dark font-body">
                      כתיבת תמצית מרשימה, הצגת הניסיון בצורה נכונה ושילוב הישגים בולטים בקובץ.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink">•</span>
                    <p className="text-text-dark font-body">
                      המוקשים שצריך להכיר ולהימנע מהם (כן, יש כאלה!).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink">•</span>
                    <p className="text-text-dark font-body">
                      למה קשרים אישיים יכולים לקדם אותך יותר מ-100 קורות חיים, ואיך לעשות זאת נכון.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink">•</span>
                    <p className="text-text-dark font-body">
                      נלמד איך חברי הקבוצה יעזרו אחד לשני לאתר משרות מבוקשות (גם כאלה שלא פורסמו!).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-pink">•</span>
                    <p className="text-text-dark font-body">
                      נבין איך להגיע למגייסות מהדלת האחורית.
                    </p>
                  </li>
                </ul>
                <div className="bg-accent-pink/10 p-4 rounded-lg">
                  <p className="text-lg font-heading font-bold text-primary mb-2">💡 עם מה תצאו מהמפגש ולמה הוא חשוב?</p>
                  <p className="text-text-dark font-body">
                    קורות החיים שלכם כנראה לא רעים, אבל הם נבלעים בין מאות אחרים ולא בולטים. ביחד נהפוך אותם לאטרקטיביים, כך שהפעם לא יפספסו אתכם. בסיום המפגש תשדרגו את קורות החיים שלכם, ותקבלו פידבק אישי.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* מפגש 4 */}
          <Card className="p-8 bg-gradient-to-br from-white to-accent-warm/10 border-2 border-accent-warm/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-warm text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg">
                4
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  📍 מפגש 4: הפכו את הלינקדאין לכלי שעובד בשבילכם
                </h3>
                <div className="mb-6">
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">חלק א&apos; - הפרופיל המושלם:</h4>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-warm">•</span>
                      <p className="text-text-dark font-body">
                        תמונות פרופיל ורקע שתואמות את הסטנדרטים שלינקדאין מקדמת.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-warm">•</span>
                      <p className="text-text-dark font-body">
                        כתיבת כותרת (Headline) שמזקקת אתכם, מגבירה חשיפה וממצבת אתכם כמובילים בתחום.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-warm">•</span>
                      <p className="text-text-dark font-body">
                        כתיבת About מקצועי ושיווקי משכנע.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-warm">•</span>
                      <p className="text-text-dark font-body">
                        ניסוח ניסיון תעסוקתי, הוספת Skills נכונים ועוד דגשים חשובים על הפרופיל כדי שידעו במה אתם הכי טובים ולמה כדאי לבחור דווקא בכם.
                      </p>
                    </li>
                  </ul>
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">חלק ב&apos; - איך לעבוד נכון עם הפלטפורמה:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-warm">•</span>
                      <p className="text-text-dark font-body">
                        מאחורי הקלעים: איך מגייסות מחפשות אתכם בלינקדאין Recruiter ולמה חשוב לשים לב.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-warm">•</span>
                      <p className="text-text-dark font-body">
                        איך לייצר חשיפה מול המגייסות, ולקבל קדימות על פני אלפי מועמדים.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-warm">•</span>
                      <p className="text-text-dark font-body">
                        מבחן SSI - בדיקת איכות הפרופיל להגדלת חשיפה ולקבלת הצעות עבודה יזומות.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-warm">•</span>
                      <p className="text-text-dark font-body">
                        טיפים להרחבת רשת הקשרים שלך ל&quot;אנשים הנכונים&quot;, ומידע סודי נוסף שיעזור לכם להגיע ליותר הזדמנויות.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="bg-accent-warm/10 p-4 rounded-lg">
                  <p className="text-lg font-heading font-bold text-primary mb-2">💡 עם מה תצאו מהמפגש ולמה הוא חשוב?</p>
                  <p className="text-text-dark font-body">
                    הלינקדאין הוא הזירה בה הכל קורה. אם אתם לא שם, אתם לא קיימים. בסיום המפגש תשדרגו את פרופיל הלינקדאין שלכם, ותקבלו פידבק אישי.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* מפגש 5 */}
          <Card className="p-8 bg-gradient-to-br from-white to-accent-sky/10 border-2 border-accent-sky/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-sky text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg">
                5
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  📍 מפגש 5: איך לעבור בהצלחה ראיונות עבודה
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sky">•</span>
                    <p className="text-text-dark font-body">
                      מהן השאלות הרווחות בראיונות וכיצד להתמודד איתן.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sky">•</span>
                    <p className="text-text-dark font-body">
                      מה באמת בוחנים המראיינים בכל שאלה (ואיך נדע האם יש להם כוונה נסתרת?!).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sky">•</span>
                    <p className="text-text-dark font-body">
                      טכניקות מוכחות לפיצוח שאלות והצגה עצמית.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sky">•</span>
                    <p className="text-text-dark font-body">
                      תרגול מעשי עם חברי הקבוצה על ידי ביצוע ראיונות אמיתיים ופידבק בזמן אמת.
                    </p>
                  </li>
                </ul>
                <div className="bg-accent-sky/10 p-4 rounded-lg">
                  <p className="text-lg font-heading font-bold text-primary mb-2">💡 עם מה תצאו מהמפגש ולמה הוא חשוב?</p>
                  <p className="text-text-dark font-body">
                    אתם לא נכשלים בראיונות כי אתם לא מספיק טובים. אתם נכשלים כי לא הבנתם מה באמת בחנו. בסיום המפגש תכירו היטב את הסיבה לשאלות שישאלו אתכם, ותתאמנו על טכניקות ותשובות שירשימו את המראיינים.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* מפגש 6 */}
          <Card className="p-8 bg-gradient-to-br from-white to-accent-lavender/10 border-2 border-accent-lavender/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-lavender text-white flex items-center justify-center font-heading font-bold text-xl shadow-lg">
                6
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  📍 מפגש 6: ראיונות מול כרישים - איך לעבור בהצלחה ראיונות עבודה מתקדמים
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-lavender">•</span>
                    <p className="text-text-dark font-body">
                      איך להתמודד עם השאלות שמתקילות ותפקידן לגלות מידע נסתר עלינו, שלא בהכרח נרצה לחשוף.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-lavender">•</span>
                    <p className="text-text-dark font-body">
                      כיצד להגיב לשאלות שלא התכוננו אליהן מראש / אסטרטגיות למענה כשאין לכם תשובה מוכנה.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-lavender">•</span>
                    <p className="text-text-dark font-body">
                      איך להרשים את המראיינים כדי שיבינו שאתם הכי מתאימים לתפקיד.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-lavender">•</span>
                    <p className="text-text-dark font-body">
                      תרגול מעשי עם חברי הקבוצה על ידי ביצוע ראיונות מתקילים וקבלת פידבק בזמן אמת.
                    </p>
                  </li>
                </ul>
                <div className="bg-accent-lavender/10 p-4 rounded-lg">
                  <p className="text-lg font-heading font-bold text-primary mb-2">💡 עם מה תצאו מהמפגש ולמה הוא חשוב?</p>
                  <p className="text-text-dark font-body">
                    הגעתם לראיון מתקדם ועכשיו אסור לכם לעשות טעויות! פגישה עם בכירים בראיון מתקדם הוא מצב מלחיץ, שצריך לדעת כיצד להתמודד איתו ולהרשים באמת כדי לזכות במשרה! בסיום המפגש תתאמנו על שאלות מורכבות וטכניקות חכמות למענה שירשים בכל סיטואציה.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* עם מה תצאו מהתוכנית */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            עם מה תצאו מהתוכנית?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  רשימת תפקידים ממוקדת שתקדם אתכם למשרה המיוחלת.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  מיפוי אישי של מה שחשוב לכם באמת, ואיך להשיג זאת בתפקיד הבא.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  קורות חיים משודרגים שמבליטים את הערך שלכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  פרופיל לינקדאין שיגרום למעסיקים לפנות אליכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  ארגז כלים מלא לניהול ראיונות בהצלחה, גם מול דרגים בכירים.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  ידע סודי ופרקטי על עולם הגיוס, כזה שלמחפשי עבודה אחרים אין, ויעזור לכם להשיג הזדמנויות.
                </p>
              </div>
            </Card>
          </div>
          
          <Card className="p-6 bg-gradient-to-br from-blue-50/80 to-white border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">🤝 החיבור והתמיכה:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <p className="text-text-dark font-body">
                  רשת קשרים אישיים עם אנשים כמוכם בדיוק, שמבינים שביחד יותר קל להצליח.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <p className="text-text-dark font-body">
                  קבוצת ווטסאפ סגורה להתייעצויות, שיתוף משרות לפני כולם ותמיכה יום-יומית.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <p className="text-text-dark font-body">
                  גישה למשרות חדשות שמפרסמות, טיפים סודיים, חיפוש אנשי מפתח בחברות ועוד...
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-purple-50/80 to-white border-2 border-purple-300 mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">💎 בונוסים בהרשמה מוקדמת:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✅</span>
                <p className="text-text-dark font-body">
                  פגישה אישית 1:1 איתי (ללא עלות) עד 3 חודשים מסיום התוכנית לקבלת עזרה אישית בתהליך.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✅</span>
                <p className="text-text-dark font-body">
                  גישה לכל ההקלטות כדי שתוכלו לחזור על החומר ולהתאמן לקראת פגישות חשובות בעתיד.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* למתי מתאימה התוכנית */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            למתי מתאימה התוכנית?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300">
              <h3 className="text-2xl font-heading font-bold text-green-700 mb-4">✅ התוכנית מיועדת למי ש:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600">•</span>
                  <p className="text-text-dark font-body">באמת רוצה למצוא עבודה, ולא רק לחפש ולסמן וי...</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">•</span>
                  <p className="text-text-dark font-body">רוצה לראות תוצאות, ולא רק &quot;לשמוע טיפים&quot;, אלא לעשות שינוי אמיתי.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">•</span>
                  <p className="text-text-dark font-body">מחפש סביבה תומכת, כלים מקצועיים ורשת קשרים לקידום אמיתי בקריירה.</p>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-red-50/80 to-white border-2 border-red-300">
              <h3 className="text-2xl font-heading font-bold text-red-700 mb-4">❌ היא לא מיועדת למי ש:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600">•</span>
                  <p className="text-text-dark font-body">מחפש &quot;פתרון קסם&quot; בלי להשקיע מאמץ.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600">•</span>
                  <p className="text-text-dark font-body">לא פנוי לביצוע מטלות ושינוי הרגלים בתהליך חיפוש העבודה.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600">•</span>
                  <p className="text-text-dark font-body">מצפה שמישהו אחר יעשה את העבודה בשבילך.</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* מי מפתחת התוכנית */}
      <section className="mb-20 md:mb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-lavender/5 to-transparent"></div>
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            מי מפתחת התוכנית ולמה כדאי לכם להצטרף?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Card className="p-8 bg-gradient-to-br from-white to-accent-lavender/10 border-2 border-accent-lavender/20 mb-6">
            <p className="text-xl font-body text-text-dark mb-6 leading-relaxed">
              נעים להכיר, שמי <strong>חגית סימן טוב</strong>, יועצת קריירה מקצועית עם ניסיון עשיר בגיוס, משאבי אנוש וייעוץ קריירה.
            </p>
            <p className="text-lg font-body text-text-dark mb-4 leading-relaxed">
              אני מאמינה בגישה פרקטית ומעשית, שמבוססת על ניסיון מעשי ועבודה מול מגייסים ומחפשי עבודה מכל התחומים.
            </p>
            <p className="text-lg font-body text-text-dark mb-4 leading-relaxed">
              יש לי הבנה מעמיקה של שוק העבודה, של תהליכי הגיוס ושל מה שצריך כדי להצליח בחיפוש עבודה. אני מביאה עמי כלים מקצועיים וטכניקות מוכחות שעובדות.
            </p>
            <p className="text-lg font-body text-text-dark mb-4 leading-relaxed">
              הגישה שלי היא פרקטית וממוקדת תוצאות - אני רואה את הצרכים האישיים של כל אחד, מתאימה את השירות בהתאם, ונותנת כלים אמיתיים שיעזרו לכם להשיג את המשרה שאתם רוצים.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-white to-accent-sky/10 border-2 border-accent-sky/20">
            <p className="text-lg font-body text-text-dark mb-4 leading-relaxed">
              אני מלווה אנשים בתהליך חיפוש העבודה בצורה אישית ומותאמת. כל תהליך מותאם לצרכים הייחודיים של כל אחד, בין אם זה בליווי אישי ובין אם בליווי קבוצתי.
            </p>
            <p className="text-lg font-body text-text-dark mb-4 leading-relaxed">
              אני מאמינה שכל אחד שונה וצריך גישה שונה. אני לא מוכרת פתרונות כלליים, אלא מקשיבה, לומדת מה מתאים לכל אחד, ומלווה אתכם בצורה מדויקת ומקצועית.
            </p>
            <p className="text-lg font-body text-text-dark font-medium leading-relaxed">
              תקבלו ממני ליווי מקצועי, כלים פרקטיים, זמינות לשאלות ותמיכה מלאה עד למציאת המשרה המתאימה לכם.
            </p>
          </Card>
        </div>
      </section>

      {/* התוצאות מדברות בעד עצמן */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            התוצאות מדברות בעד עצמן
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent-lavender/10 to-accent-pink/10 border-2 border-primary/20 text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              עשרות לקוחות מצאו את התפקיד הבא שלהם, עם הליווי המקצועי שלי.
            </p>
            <p className="text-xl font-body text-text-dark mb-6">
              ועכשיו הגיע תורך.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16 md:mb-24">
        <Card className="bg-gradient-to-br from-primary/10 via-accent-lavender/10 to-accent-pink/10 border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          <div className="relative py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
              מוכנים להתחיל את המסע למשרת החלומות?
            </h2>
            <p className="text-lg md:text-xl text-text-medium mb-10 font-body max-w-3xl mx-auto">
              ב-6 מפגשים תעברו ממצב של &quot;שולחים ומקווים&quot; למצב של &quot;יודעים בדיוק מה לעשות ומשיגים את המשרה&quot;.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild className="hover-lift">
                <Link href="/contact">
                  צור קשר - להרשמה
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white shadow-lg">
                <Link href="/contact">השאירו פרטים ואחזור אליכם</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

