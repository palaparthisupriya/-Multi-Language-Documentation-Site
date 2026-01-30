'use client';
import { useEffect, useState } from 'react';

export default function TableOfContents() {
  const [activeId, setActiveId] = useState('');

  const headings = [
    { id: 'introduction', text: 'Introduction' },
    { id: 'installation', text: 'Installation' },
  ];

  return (
    <aside data-testid="table-of-contents" className="w-48 p-4 border-l hidden xl:block">
      <h4 className="text-sm font-bold mb-4">On This Page</h4>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              data-testid={`toc-link-${h.id}`}
              className={activeId === h.id ? 'text-blue-600 font-bold border-l-2 border-blue-600 pl-2' : 'text-gray-600 hover:text-blue-500'}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
