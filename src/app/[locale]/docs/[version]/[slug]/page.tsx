import { getDocContent } from '@/lib/docs';
import TableOfContents from '@/components/TableOfContents';
import EditOnGithub from '@/components/EditOnGithub';
import FeedbackWidget from '@/components/FeedbackWidget';

export const revalidate = 60;

export default async function DocPage({ params }: { params: { locale: string, version: string, slug: string } }) {
  const { locale, version, slug } = params;
  const content = await getDocContent(locale, version, slug);

  return (
    <div className="flex gap-8">
      <article className="flex-1 prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <EditOnGithub locale={locale} version={version} slug={slug} />
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-2">Was this helpful?</h3>
          <FeedbackWidget />
        </div>
      </article>
      <TableOfContents />
    </div>
  );
}
