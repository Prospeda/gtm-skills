'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    // In production, send to your analytics/feedback endpoint
    console.log('Feedback:', { feedback, message });
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFeedback(null);
      setMessage('');
    }, 2000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full text-sm font-medium transition-all shadow-lg border border-zinc-700 hover:border-zinc-600"
      >
        <MessageSquare className="h-4 w-4" />
        <span className="hidden sm:inline">Feedback</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-zinc-900 rounded-xl shadow-2xl border border-zinc-800 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <span className="font-medium text-sm">Quick Feedback</span>
        <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-zinc-300">
          <X className="h-4 w-4" />
        </button>
      </div>

      {submitted ? (
        <div className="p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
            <ThumbsUp className="h-6 w-6 text-green-500" />
          </div>
          <p className="font-medium">Thanks for your feedback!</p>
          <p className="text-sm text-zinc-500 mt-1">It helps us improve.</p>
        </div>
      ) : (
        <div className="p-4">
          <p className="text-sm text-zinc-400 mb-4">How useful is this resource?</p>

          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setFeedback('positive')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${
                feedback === 'positive'
                  ? 'bg-green-500/20 border-green-500/50 text-green-400'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-600'
              }`}
            >
              <ThumbsUp className="h-5 w-5" />
              <span className="text-sm font-medium">Useful</span>
            </button>
            <button
              onClick={() => setFeedback('negative')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${
                feedback === 'negative'
                  ? 'bg-red-500/20 border-red-500/50 text-red-400'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-zinc-600'
              }`}
            >
              <ThumbsDown className="h-5 w-5" />
              <span className="text-sm font-medium">Not yet</span>
            </button>
          </div>

          {feedback && (
            <div className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={feedback === 'positive' ? 'What did you find most useful?' : 'What would make this better?'}
                className="w-full h-20 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 placeholder:text-zinc-500 resize-none focus:outline-none focus:border-zinc-600"
              />
              <Button onClick={handleSubmit} size="sm" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Feedback
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
