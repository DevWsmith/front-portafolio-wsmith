import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export const Primary = ({
  children,
  className = "",
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <button
    className={`btn bg-primary hover:bg-primary-hover text-white ${fullWidth ? "w-full" : "w-fit"} ${className}`}
    {...props}
  >
    {children}
  </button>
);
