'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'relative inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    // Variant styles
    const variantStyles = {
      primary: 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:from-indigo-700 hover:to-blue-600 focus:ring-blue-500',
      secondary: 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white hover:from-purple-700 hover:to-indigo-600 focus:ring-indigo-500',
      outline: 'border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50 focus:ring-indigo-500',
      ghost: 'text-indigo-500 hover:bg-indigo-50 focus:ring-indigo-500',
      link: 'text-indigo-500 underline-offset-4 hover:underline focus:ring-indigo-500 p-0',
    };

    // Size styles
    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-6 py-3',
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    // Loading spinner
    const LoadingSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    // Button hover effect
    const buttonVariants = {
      hover: {
        scale: 1.03,
        transition: { duration: 0.2 }
      },
      tap: {
        scale: 0.97,
        transition: { duration: 0.1 }
      }
    };

    // If href is provided, render as Link
    if (href) {
      return (
        <Link href={href} className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          variant !== 'link' && 'shadow-lg hover:shadow-xl',
          className
        )}>
          {isLoading && <LoadingSpinner />}
          {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}

          {/* Glow effect */}
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400/20 to-blue-400/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
        </Link>
      );
    }

    // Otherwise render as button
    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          variant !== 'link' && 'shadow-lg hover:shadow-xl',
          className
        )}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}

        {/* Glow effect */}
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400/20 to-blue-400/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
