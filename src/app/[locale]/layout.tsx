import './globals.css';
import Sidebar from '@/components/Sidebar';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body className="flex h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Sidebar locale={params.locale} version="v1" />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b flex items-center justify-between px-8">
            <div data-testid="language-switcher" className="flex gap-4">
              <Link href="/en/docs/v1/introduction">EN</Link>
              <Link href="/es/docs/v1/introduction">ES</Link>
              <Link href="/fr/docs/v1/introduction">FR</Link>
              <Link href="/de/docs/v1/introduction">DE</Link>
            </div>
            <div className="flex gap-4 items-center">
              <Link href={`/${params.locale}/api-reference`} className="text-sm font-medium hover:underline">API Reference</Link>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 overflow-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
