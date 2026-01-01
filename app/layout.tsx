import type { Metadata, Viewport } from "next";
import { Rubik, Heebo } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-body",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-heading",
  weight: ["400", "500", "700"],
  display: "swap",
});

// בדיקה בטוחה של baseUrl
function getBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  if (envUrl) {
    try {
      new URL(envUrl); // בדיקה שהערך תקין
      return envUrl;
    } catch {
      // אם לא תקין, נשתמש בברירת מחדל
    }
  }
  
  // ברירת מחדל לפי סביבה
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  
  return 'https://example.com';
}

const baseUrl = getBaseUrl();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "חגית סימן טוב - יועצת קריירה",
    template: "%s | חגית סימן טוב",
  },
  description:
    "יועצת קריירה מקצועית עם 15+ שנות ניסיון בגיוס ומשאבי אנוש. ליוויתי כבר מעל 1,000 מחפשי עבודה לעבר משרת החלומות! סיוע בחיפוש עבודה, כתיבת קורות חיים, הכנה לראיונות ופיתוח קריירה.",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: baseUrl,
    title: "חגית סימן טוב - יועצת קריירה",
    description:
      "יועצת קריירה מקצועית עם 15+ שנות ניסיון בגיוס ומשאבי אנוש. ליוויתי כבר מעל 1,000 מחפשי עבודה לעבר משרת החלומות! סיוע בחיפוש עבודה, כתיבת קורות חיים, הכנה לראיונות ופיתוח קריירה.",
    siteName: "חגית סימן טוב",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${heebo.variable} font-body`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

