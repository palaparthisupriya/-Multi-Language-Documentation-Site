'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar({ locale, version }: { locale: string, version: string }) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const allDocs = [
    { slug: 'introduction', title: 'Introduction' },
    { slug: 'setup', title: 'Getting Started' },
  ];

  const filteredDocs = allDocs.filter(doc =>
    doc.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleVersionChange = (newV: string) => {
    const newPath = pathname.replace(`/${version}/`, `/${newV}/`);
    router.push(newPath);
  };

  return (
    <nav data-testid="sidebar" className="w-64 h-screen border-r p-6 bg-gray-50 flex flex-col">
      <div className="mb-6">
        <label className="block text-xs font-bold mb-1">VERSION</label>
        <select 
          data-testid="version-selector"
          value={version}
          onChange={(e) => handleVersionChange(e.target.value)}
          className="w-full mb-4 p-1 border rounded text-black"
        >
          <option value="v1" data-testid="version-option-v1">v1</option>
          <option value="v2" data-testid="version-option-v2">v2</option>
          <option value="v3" data-testid="version-option-v3">v3</option>
        </select>

        <input
          type="text"
          data-testid="search-input"
          placeholder="Search docs..."
          className="w-full p-2 text-sm border rounded text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div data-testid="search-results" className="flex-1 overflow-y-auto">
        {filteredDocs.length > 0 ? (
          <ul className="space-y-2">
            {filteredDocs.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={`/${locale}/docs/${version}/${doc.slug}`}
                  data-testid={`sidebar-nav-link-${doc.slug}`}
                  className="text-blue-600 hover:underline block py-1"
                >
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p data-testid="search-no-results" className="text-gray-500 text-sm">No results found.</p>
        )}
      </div>
    </nav>
  );
}
