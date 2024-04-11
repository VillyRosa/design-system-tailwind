import Link from 'next/link';

export type LinkComponentProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.ComponentProps<typeof Link>;

const LinkComponent = ({ children, href, disabled, className, ...rest }: LinkComponentProps) => {
  return (
    <Link 
      href={disabled ? '#' : href}
      className={`text-primary aria-disabled:text-disabled ${className}`}
      aria-disabled={disabled}
      {...rest}
    >
      { children }
    </Link>
  );
}

export default LinkComponent;