import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h2 className="text-lg font-extrabold uppercase tracking-tight sm:text-2xl">{children}</h2>
      <span className="mt-3 block h-1 w-16 rounded-full bg-primary" />
    </div>
  );
}
