export default function EditOnGithub({ locale, version, slug }: { locale: string, version: string, slug: string }) {
  const githubRepo = "https://github.com/your-username/docs-portal/blob/main";
  const editUrl = `${githubRepo}/_docs/${locale}/${version}/${slug}.md`;

  return (
    <div className="mt-12 pt-6 border-t">
      <a 
        href={editUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-2"
      >
        <span>✎ Edit this page on GitHub</span>
      </a>
    </div>
  );
}
