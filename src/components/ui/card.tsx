'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outline' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  isHoverable?: boolean;
  isInteractive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'md',
      isHoverable = false,
      isInteractive = false,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'rounded-xl overflow-hidden';
    
    // Variant styles
    const variantStyles = {
      default: 'bg-white dark:bg-gray-800 shadow-lg',
      glass: 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg',
      outline: 'border-2 border-gray-200 dark:border-gray-700',
      dark: 'bg-gray-900 text-white shadow-lg',
    };
    
    // Padding styles
    const paddingStyles = {
      none: '',
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-7',
    };
    
    // Hover styles
    const hoverStyles = isHoverable
      ? 'transition-all duration-300 hover:shadow-xl'
      : '';
    
    // Interactive styles
    const interactiveStyles = isInteractive
      ? 'cursor-pointer active:scale-[0.98] transition-transform'
      : '';

    // Card hover effect
    const cardVariants = {
      hover: isHoverable ? {
        y: -5,
        transition: { duration: 0.3 }
      } : {},
      tap: isInteractive ? {
        scale: 0.98,
        transition: { duration: 0.1 }
      } : {}
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          paddingStyles[padding],
          hoverStyles,
          interactiveStyles,
          className
        )}
        whileHover="hover"
        whileTap="tap"
        variants={cardVariants}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mb-4', className)}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-bold', className)}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-gray-500 dark:text-gray-400', className)}
      {...props}
    />
  )
);

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-4 flex items-center', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
