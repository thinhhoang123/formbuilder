'use client';
import { useRef } from 'react';

export function Typography({
  children,
  className,
  variant,
  contentEditable,
  onUpdate,
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'muted';
  contentEditable?: boolean;
  onUpdate?: (text: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const variantClasses = {
    h1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
    h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    p: 'leading-7 [&:not(:first-child)]:mt-6',
    small: 'text-sm leading-none font-medium',
    muted: 'text-muted-foreground text-sm',
  };

  const classNameValue = `${variantClasses[variant || 'p']} ${className}`;

  const handleBlur = async () => {
    if (!contentEditable) return;
    const text = inputRef.current?.innerText;
    onUpdate?.(text || '');
  };

  return (
    <p
      contentEditable={contentEditable}
      className={classNameValue}
      ref={inputRef}
      onBlur={handleBlur}
      suppressContentEditableWarning
    >
      {children}
    </p>
  );
}
