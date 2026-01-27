'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface GitHubStarsProps {
  repo: string;
  className?: string;
}

export function GitHubStars({ repo, className = '' }: GitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        // Silently fail - just don't show the count
      });
  }, [repo]);

  if (stars === null) {
    return null;
  }

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
      <span>{stars.toLocaleString()}</span>
    </span>
  );
}
