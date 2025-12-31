import { Metadata } from 'next';
import { BlogContent } from '@/components/blog/BlogContent';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'מאמרים - חניט קורן',
  description: 'מאמרים מקצועיים על ייעוץ קריירה, כתיבת קורות חיים, בניית פרופיל לינקדאין והכנה לראיונות',
  openGraph: {
    title: 'מאמרים - חניט קורן',
    description: 'מאמרים מקצועיים על ייעוץ קריירה, כתיבת קורות חיים, בניית פרופיל לינקדאין והכנה לראיונות',
    url: `${baseUrl}/portfolio`,
    siteName: 'חניט קורן',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <BlogContent />;
}

