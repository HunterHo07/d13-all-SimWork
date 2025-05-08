'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = 'up',
  offset = 50,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Create transforms directly
  let yTransform = null;
  let xTransform = null;

  if (direction === 'up') {
    yTransform = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  } else if (direction === 'down') {
    yTransform = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  } else if (direction === 'left') {
    xTransform = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  } else if (direction === 'right') {
    xTransform = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  }

  // Apply transform based on direction
  const style = {
    y: yTransform,
    x: xTransform,
  };

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div
        style={style}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
