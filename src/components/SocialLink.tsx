import React from 'react';

export const SocialLink = ({ href, label }: { href: string, label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all rounded-sm text-xs font-mono"
    >
      {label}
    </a>
  );
};
