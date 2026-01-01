import { Metadata } from 'next';
import { AboutContent } from '@/components/about/AboutContent';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: 'אודות - חגית סימן טוב',
  description: 'נעים להכיר, חגית סימן טוב. יועצת קריירה מקצועית עם 15+ שנות ניסיון בגיוס ומשאבי אנוש. ליוויתי כבר מעל 1,000 מחפשי עבודה לעבר משרת החלומות! סיוע בחיפוש עבודה, כתיבת קורות חיים והכנה לראיונות.',
    openGraph: {
    title: 'אודות - חגית סימן טוב',
    description: 'נעים להכיר, חגית סימן טוב. יועצת קריירה מקצועית עם 15+ שנות ניסיון בגיוס ומשאבי אנוש. ליוויתי כבר מעל 1,000 מחפשי עבודה לעבר משרת החלומות!',
    url: `${baseUrl}/about`,
    siteName: 'חגית סימן טוב',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

