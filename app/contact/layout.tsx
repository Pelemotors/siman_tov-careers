import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: 'צור קשר - חגית סימן טוב',
  description: 'דברו איתי. רוצים ייעוץ קריירה, כתיבת קורות חיים או הכנה לראיון? שלחו לי כמה פרטים — ואחזור אליכם',
  openGraph: {
    title: 'צור קשר - חגית סימן טוב',
    description: 'דברו איתי. רוצים ייעוץ קריירה, כתיבת קורות חיים או הכנה לראיון?',
    url: `${baseUrl}/contact`,
    siteName: 'חגית סימן טוב',
    locale: 'he_IL',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

