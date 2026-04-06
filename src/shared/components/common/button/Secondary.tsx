import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export const Secondary = ({
  children,
  className = "",
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <button
    className={`btn bg-secondary hover:bg-secondary-hover text-secondary-foreground ${fullWidth ? "w-full" : "w-fit"} ${className}`}
    {...props}
  >
    {children}
  </button>
);
