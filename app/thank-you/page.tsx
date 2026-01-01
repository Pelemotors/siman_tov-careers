import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'תודה - חגית סימן טוב',
  description: 'קיבלתי את ההודעה שלך',
};

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center">
        <div className="text-6xl mb-6">🙌</div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          קיבלתי 🙌
        </h1>
        <p className="text-lg md:text-xl text-text-dark font-body mb-6">
          תודה! אני חוזרת אליך עד 24 שעות עם נקודת שיפור ראשונה + המלצה למסלול המתאים (ליטוש / דף נחיתה / תוכן לאתר).
        </p>
          <p className="text-base text-text-medium font-body mb-8">
          אחזור אליכם בהקדם עם התשובה המבוקשת.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">
              צור קשר
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/">חזרה לעמוד הבית</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}

