import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GTM Skills | 2,500+ AI Prompts for B2B Sales',
  description: 'The most comprehensive GTM prompt library for Claude, ChatGPT, and any LLM. Industry packs, role playbooks, workflows, and methodologies. Free and open source.',
  keywords: 'gtm skills, gtm prompts, sales prompts, ai sales, b2b sales prompts, chatgpt sales, claude prompts, llm prompts, meddic prompts, spin selling prompts',
  authors: [{ name: 'Prospeda' }],
  openGraph: {
    title: 'GTM Skills | 2,500+ AI Prompts for B2B Sales',
    description: 'The most comprehensive GTM prompt library. Industry packs, role playbooks, workflows, and methodologies.',
    url: 'https://gtm-skills.com',
    siteName: 'GTM Skills',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Skills | 2,500+ AI Prompts for B2B Sales',
    description: 'The most comprehensive GTM prompt library. Industry packs, role playbooks, workflows, and methodologies.',
  },
  metadataBase: new URL('https://gtm-skills.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
