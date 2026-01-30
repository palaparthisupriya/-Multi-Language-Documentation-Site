'use client';
import { useState } from 'react';

export default function FeedbackWidget() {
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) setSubmitted(true);
  };

  return (
    <div className='mt-8 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900'>
      <h3 className='font-bold mb-2'>Was this helpful?</h3>
      {submitted ? (
        <div data-testid='feedback-success-message' className='text-green-600'>Thank you for your feedback!</div>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <textarea data-testid='feedback-input' value={text} onChange={(e) => setText(e.target.value)} className='border p-2 rounded text-black' placeholder='Tell us more...' />
          <button type='submit' data-testid='feedback-submit' className='bg-blue-600 text-white py-2 px-4 rounded'>Submit</button>
        </form>
      )}
    </div>
  );
}
