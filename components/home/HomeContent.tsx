'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { mockFAQs } from '@/lib/mockData';
import { FAQItem } from './FAQItem';
import { SOCIAL_LINKS } from '@/lib/constants';

interface HomeContentProps {
  programs: any[];
}

export function HomeContent({ programs }: HomeContentProps) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <section className="relative mb-20 md:mb-32 py-12 md:py-20 bg-gradient-to-br from-white via-background-warm to-accent-lavender/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 max-w-4xl mx-auto leading-tight tracking-tight animate-fade-in">
            אתם לא לבד בחיפוש העבודה
          </h1>
          <p className="text-xl md:text-2xl text-text-dark mb-6 font-body max-w-3xl mx-auto font-medium leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            ב-6 מפגשים תעברו ממצב של &quot;שולחים ומקווים להתקבל&quot;
            <br />
            למצב של &quot;יודעים בדיוק מה לעשות ומשיגים את משרת החלומות&quot;
          </p>
          
          <p className="text-lg md:text-xl text-text-medium mb-6 font-body max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            יועצת קריירה מקצועית עם 15+ שנות ניסיון בגיוס ומשאבי אנוש.
            <br />
            ליוויתי כבר מעל 1,000 מחפשי עבודה לעבר משרת החלומות!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="primary" size="lg" asChild className="hover-lift">
              <Link href="/contact">
                צור קשר
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white shadow-lg">
              <Link href="/assessment">בדיקה מהירה בחינם (2 דקות)</Link>
            </Button>
          </div>
          
          <p className="text-base md:text-lg text-text-medium font-body animate-fade-in" style={{ animationDelay: '0.6s' }}>
            התוכנית &quot;מחיפוש עבודה לחוזה חתום&quot; - 6 מפגשים שישנו עבורכם הכל!
          </p>
        </div>
      </section>

      {/* האם גם אתם? */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            האם גם אתם?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <Card className="p-6 border-l-4 border-accent-sky hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-lg font-body text-text-dark flex items-start gap-3">
                <span className="text-accent-sky text-xl">⬅️</span>
                <span>שולחים 100+ קורות חיים ומקבלים בקושי 3 פניות, וגם זה לא מתקדם?</span>
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-accent-lavender hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg font-body text-text-dark flex items-start gap-3">
                <span className="text-accent-lavender text-xl">⬅️</span>
                <span>מרגישים שכולם סביבכם מוצאים עבודה בקלות, ורק לכם זה לא מצליח?</span>
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-accent-pink hover-lift animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg font-body text-text-dark flex items-start gap-3">
                <span className="text-accent-pink text-xl">⬅️</span>
                <span>פותחים את הלינקדאין, רואים עוד פוסט של &quot;התחלתי עבודה חדשה&quot; ומקנאים?</span>
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-accent-warm hover-lift animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg font-body text-text-dark flex items-start gap-3">
                <span className="text-accent-warm text-xl">⬅️</span>
                <span>יש לכם שנים של ניסיון, אבל עדיין נפסלתם על OQ, מבלי שקיבלתם בכלל הזדמנות?</span>
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-accent-sky hover-lift animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-lg font-body text-text-dark flex items-start gap-3">
                <span className="text-accent-sky text-xl">⬅️</span>
                <span>מרגישים שאתם עוברים ראיונות מוצלחים, ועדיין מפסידים את התפקיד למועמד אחר, כל פעם מחדש?</span>
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-accent-lavender hover-lift animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg font-body text-text-dark flex items-start gap-3">
                <span className="text-accent-lavender text-xl">⬅️</span>
                <span>מתעוררים בבוקר לעוד יום ללא תכלית, מאבדים אמונה ומרגישים שזה לא רק חיפוש עבודה, אלא מלחמת התשה?</span>
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-accent-pink hover-lift animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <p className="text-lg font-body text-text-dark flex items-start gap-3">
                <span className="text-accent-pink text-xl">⬅️</span>
                <span>יודעים שצריך &quot;קשרים&quot; אבל לא יודעים איך ליצור ולמצוא אותם?</span>
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-accent-warm hover-lift animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg font-body text-text-dark flex items-start gap-3">
                <span className="text-accent-warm text-xl">⬅️</span>
                <span>שומעים שוב ושוב ש-90% מהמשרות הטובות בכלל לא מתפרסמות, אז איך אפשר להגיע אליהן?!</span>
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-xl font-body text-text-dark mb-4 font-medium">
              אם עניתם &quot;כן&quot; לשניים או יותר מהמקרים האלה — התוכנית הזאת עבורכם!
            </p>
            <p className="text-lg font-body text-text-medium mb-6">
              חשוב שתדעו שהבעיה האמיתית היא לא אצלכם, כי אף פעם לא לימדו אתכם את החוקים האמיתיים של המשחק.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/programs/6-meetings">לפרטים על התוכנית</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* מה כוללת התוכנית */}
      <section className="mb-20 md:mb-32 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-sky/5 to-transparent"></div>
        
        <div className="text-center mb-12 relative z-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            תוכנית &quot;מחיפוש עבודה לחוזה חתום&quot; - 6 מפגשים שישנו עבורכם הכל!
          </h2>
          <p className="text-lg md:text-xl text-text-medium font-body max-w-3xl mx-auto">
            מה כוללת התוכנית?
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-sky/5 border-2 border-accent-sky/20 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-sky text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  השתתפות בשישה מפגשים קבוצתיים עם אנשים בדיוק כמוכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-lavender/5 border-2 border-accent-lavender/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-lavender text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  שינוי המציאות של &quot;שליחת קורות חיים ו...לקוות לטוב&quot; למציאות של &quot;אני יודע/ת בדיוק מה אני שווה וגם המעסיק יבחין בזה&quot;!
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-pink/5 border-2 border-accent-pink/20 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-pink text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  יצירת כוח של קהילת נטוורקינג, ביחד, שיעזור לכל משתתף בתוכנית להגיע למשרות השוות באמת!
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-warm/5 border-2 border-accent-warm/20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-warm text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  פיתוח קשרים, תרגול ואימון על חוסן נפשי ורושם חיובי בראיונות, העלאת הביטחון העצמי וקבלת כלים להשגת המשרה המתאימה לכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-sky/5 border-2 border-accent-sky/20 animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-sky text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  קבלת כלים פרקטים וקלים ליישום מיידי.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-lavender/5 border-2 border-accent-lavender/20 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-lavender text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  גילוי של סודות מאחורי הקלעים, ומה ישכנע באמת את המעסיק לבחור דווקא בכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift bg-gradient-to-br from-white to-accent-pink/5 border-2 border-accent-pink/20 animate-scale-in md:col-span-2" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-pink text-2xl">⬅️</span>
                <p className="text-text-dark font-body text-lg">
                  ליווי אישי וצמוד לכל משתתף, קבוצה פעילה לשיתופים ותמיכה ברמה היום-יומית.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="primary" size="lg" asChild>
              <Link href="/programs/6-meetings">לפרטים המלאים על התוכנית</Link>
            </Button>
          </div>
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
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300 hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  רשימת תפקידים ממוקדת שתקדם אתכם למשרה המיוחלת.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300 hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  מיפוי אישי של מה שחשוב לכם באמת, ואיך להשיג זאת בתפקיד הבא.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300 hover-lift animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  קורות חיים משודרגים שמבליטים את הערך שלכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300 hover-lift animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  פרופיל לינקדאין שיגרום למעסיקים לפנות אליכם.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300 hover-lift animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                <p className="text-text-dark font-body text-lg">
                  ארגז כלים מלא לניהול ראיונות בהצלחה, גם מול דרגים בכירים.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300 hover-lift animate-slide-up" style={{ animationDelay: '0.6s' }}>
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
          
          <div className="text-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/programs/6-meetings">להצטרף לתוכנית</Link>
            </Button>
          </div>
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
            <Card className="p-6 bg-gradient-to-br from-green-50/80 to-white border-2 border-green-300 hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
            
            <Card className="p-6 bg-gradient-to-br from-red-50/80 to-white border-2 border-red-300 hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-lavender/5 to-transparent"></div>
        
        <div className="text-center mb-12 relative z-10 animate-fade-in">
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
            <Button variant="primary" size="lg" asChild>
              <Link href="/programs/6-meetings">להצטרף לתוכנית</Link>
            </Button>
          </Card>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="mb-20 md:mb-32 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-lavender/5 to-transparent"></div>
        
        <div className="text-center mb-12 relative z-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            שאלות נפוצות
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          {mockFAQs.map((faq, index) => (
            <div key={faq.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FAQItem question={faq.question_he} answer={faq.answer_he} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16 md:mb-24">
        <Card className="bg-gradient-to-br from-primary/10 via-accent-lavender/10 to-accent-pink/10 border-2 border-primary/20 relative overflow-hidden animate-fade-in">
          {/* Decorative gradient overlay */}
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
                <Link href="/programs/6-meetings">להצטרף לתוכנית</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white shadow-lg">
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                  דברו איתי בוואטסאפ
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
