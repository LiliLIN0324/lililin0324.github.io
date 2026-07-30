import React from 'react';

export const SocialLink = ({ href, label }: { href: string, label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-btn font-mono text-[10px] tracking-eyebrow"
    >
      {label}
    </a>
  );
};
