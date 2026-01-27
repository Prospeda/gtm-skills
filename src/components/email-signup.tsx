'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Check, Mail } from 'lucide-react';

interface EmailSignupProps {
  source?: string;
  variant?: 'default' | 'hero' | 'inline';
  placeholder?: string;
  buttonText?: string;
}

export function EmailSignup({
  source = 'website',
  variant = 'default',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.alreadySubscribed ? 'You\'re already subscribed!' : 'Welcome aboard!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 ${variant === 'hero' ? 'justify-center' : ''}`}>
        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
          <Check className="h-5 w-5" />
          <span className="font-medium">{message}</span>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12"
            required
          />
        </div>
        <Button type="submit" size="lg" className="h-12" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            buttonText
          )}
        </Button>
        {status === 'error' && (
          <p className="text-sm text-red-500 mt-2">{message}</p>
        )}
      </form>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" size="sm" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            buttonText
          )}
        </Button>
      </form>
    );
  }

  // Default variant
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          buttonText
        )}
      </Button>
      {status === 'error' && (
        <p className="text-sm text-red-500">{message}</p>
      )}
    </form>
  );
}
