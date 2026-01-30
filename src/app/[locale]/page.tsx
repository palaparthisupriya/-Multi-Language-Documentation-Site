import Link from 'next/link';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh]'>
      <h2 className='text-4xl font-bold mb-4'>Welcome to Partnr Docs</h2>
      <p className='text-xl mb-8 text-slate-600 dark:text-slate-400'>
        High-performance documentation powered by Next.js and ISR.
      </p>
      <Link 
        href={`/${locale}/docs/v1/introduction`} 
        className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'
      >
        View Documentation
      </Link>
    </div>
  );
}
