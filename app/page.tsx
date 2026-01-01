import { Metadata } from 'next';
import { HomeContent } from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'חגית סימן טוב - יועצת קריירה',
  description: 'יועצת קריירה מקצועית עם 15+ שנות ניסיון בגיוס ומשאבי אנוש. ליוויתי כבר מעל 1,000 מחפשי עבודה לעבר משרת החלומות! סיוע בחיפוש עבודה, כתיבת קורות חיים, הכנה לראיונות ופיתוח קריירה.',
};

// Ensure this page is static
export const dynamic = 'force-static';
export const revalidate = false;

export default function Home() {
  // כל התכנים סטטיים - ללא Supabase
  const programs: any[] = [];
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
  
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'חגית סימן טוב - יועצת קריירה',
    description: 'יועצת קריירה מקצועית עם 15+ שנות ניסיון בגיוס ומשאבי אנוש. ליוויתי כבר מעל 1,000 מחפשי עבודה לעבר משרת החלומות! סיוע בחיפוש עבודה, כתיבת קורות חיים, הכנה לראיונות ופיתוח קריירה.',
    url: baseUrl,
    serviceType: [
      'ייעוץ קריירה',
      'כתיבת קורות חיים',
      'הכנה לראיונות',
      'חיפוש עבודה',
      'פיתוח קריירה',
      'ייעוץ תעסוקתי',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'ישראל',
      '@id': 'https://www.wikidata.org/wiki/Q801',
    },
    inLanguage: 'he-IL',
    availableLanguage: ['he-IL'],
    keywords: 'יועצת קריירה, חיפוש עבודה, קורות חיים, הכנה לראיונות, ייעוץ תעסוקתי, פיתוח קריירה',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <HomeContent programs={programs} />
    </>
  );
}
