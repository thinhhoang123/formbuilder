export function Typography({
  children,
  className,
  variant,
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'muted';
}) {
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

  return <p className={classNameValue}>{children}</p>;
}
