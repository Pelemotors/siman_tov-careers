'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SOCIAL_LINKS } from '@/lib/constants';

export function AboutContent() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 tracking-tight">
            נעים להכיר, חניט קורן
          </h1>
        </div>

        <Card className="mb-12 border border-secondary/10 bg-white p-8 md:p-12 hover-lift animate-slide-up">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* תמונת שרית */}
            <div className="flex-shrink-0 w-full md:w-80">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-accent-lavender/20 animate-float">
                <Image
                  src="/images/487240142_671240585860041_8030060960374462124_n.jpg"
                  alt="חניט קורן - יועצת קריירה"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* טקסט */}
            <div className="prose prose-lg max-w-none flex-1">
              <p className="text-lg md:text-xl text-text-dark font-body leading-relaxed mb-6">
                שמי <strong>חניט קורן</strong>, יועצת קריירה.
              </p>
              <p className="text-lg md:text-xl text-text-dark font-body leading-relaxed mb-6">
                אחרי <strong>עשור פורה</strong> בתחומי גיוס ומש&quot;א, עם המון ידע פרקטי, כלים ותשוקה לתחום, הוכשרתי ושילבתי לפני מספר שנים תחום נוסף - ייעוץ ופיתוח קריירה.
              </p>
              <p className="text-lg md:text-xl text-text-dark font-body leading-relaxed mb-6 font-bold text-primary">
                ומאז ליוויתי כבר <strong>מעל 1,000 מחפשי עבודה</strong> לעבר משרת החלומות!
              </p>
            </div>
          </div>
        </Card>

          {/* עם מי אני עובדת */}
          <Card className="mb-12 border border-secondary/10 bg-white p-8 md:p-12 hover-lift animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
              עם מי אני עובדת?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-accent-sky text-xl">•</span>
                  <p className="text-text-dark font-body text-lg">
                    הייטקטיסים במגוון תפקידים
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-lavender text-xl">•</span>
                  <p className="text-text-dark font-body text-lg">
                    מחפשי עבודה בדרג ביניים ועד רמת בכירות
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-text-dark font-body text-lg">
                  בתחומי מש&quot;א, לוגיסטיקה, שיווק, פיתוח עסקי, גיוס, מכירות, שירות, כספים ועוד…
                </p>
              </div>
            </div>
          </Card>

          {/* המסר */}
          <Card className="mb-12 border border-secondary/10 bg-gradient-to-br from-primary/5 to-white p-8 md:p-12 hover-lift animate-slide-up">
            <p className="text-xl md:text-2xl text-text-dark font-body leading-relaxed mb-6 text-center">
              אני כאן כדי להביא אתכם, יד ביד, למקום של צמיחה, סיפוק, משמעות ומימוש עצמי, כך שגם אתם, בדיוק כמוני -
            </p>
            <p className="text-2xl md:text-3xl font-heading font-bold text-primary text-center mb-6">
              תקומו בכל בוקר לעבודה שאתם אוהבים, כי עשרות מחפשי עבודה לא טועים!
            </p>
            <p className="text-xl md:text-2xl text-text-dark font-body leading-relaxed text-center">
              בואו נעשה זאת יחד ונהנה מהמסע 🙂
            </p>
          </Card>

          {/* השירותים שלי */}
          <Card className="mb-12 border border-secondary/10 bg-white p-8 md:p-12 hover-lift animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
              השירותים שלי
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-accent-sky text-xl">✓</span>
                <p className="text-text-dark font-body">הכנה מקיפה לראיונות ודיוק מסרים</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-lavender text-xl">✓</span>
                <p className="text-text-dark font-body">פיצוח השלב הבא בקריירה על ידי כלים מקצועיים</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-pink text-xl">✓</span>
                <p className="text-text-dark font-body">בנייה/שדרוג של פרופיל הלינקדאין, מיתוג אישי ונטוורקינג אפקטיבי</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-warm text-xl">✓</span>
                <p className="text-text-dark font-body">בניית תוכנית עבודה מותאמת</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-sky text-xl">✓</span>
                <p className="text-text-dark font-body">בניית קורות חיים מותאמים למשרות, בדגש על מילות מפתח ומעבר על ATS</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-lavender text-xl">✓</span>
                <p className="text-text-dark font-body">ביצוע מפגשים 1X1 (&quot;שיעור פרטי&quot;) בכל נושא אחר הקשור לקריירה</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-pink text-xl">✓</span>
                <p className="text-text-dark font-body">העברת הרצאות וסדנאות לארגונים</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-warm text-xl">✓</span>
                <p className="text-text-dark font-body">ליווי מנטלי, חיזוק ביטחון וחידוד חוזקות</p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg font-body text-text-medium mb-4">
              רוצה לשמוע איך אני יכולה לעזור לך בקריירה?
            </p>
            <Button variant="primary" size="lg" asChild className="animate-scale-in">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                דברו איתי בוואטסאפ
              </a>
            </Button>
          </div>
      </div>
    </div>
  );
}
