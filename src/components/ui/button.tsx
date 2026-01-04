import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  /* If set, will render as a React Scroll Link */
  toScroll?: string; 
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      toScroll,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      secondary:
        "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
      ghost: "bg-transparent text-primary hover:bg-gray-100",
      link: "bg-transparent text-primary hover:text-blue-700 p-0 h-auto underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    // Link variant specific override (no px/py usually, or smaller)
    const sizeStyles = variant === "link" ? "" : sizes[size];

    const mergedClasses = cn(
      baseStyles,
      variants[variant],
      sizeStyles,
      className
    );

    const content = (
      <>
        {children}
        {variant === "link" && <ArrowRight className="ml-2 w-4 h-4" />}
      </>
    );

    // If it's a Next.js Link
    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            className={mergedClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={mergedClasses}>
          {content}
        </Link>
      );
    }

    // Standard Button
    return (
      <button ref={ref} className={mergedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
