'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  preset?: 'fade' | 'slide' | 'typewriter' | 'gradient' | 'glitch';
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  staggerChildren?: number;
  color?: string;
}

export function TextReveal({
  text,
  className,
  element: Element = 'h2',
  preset = 'fade',
  delay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.1,
  staggerChildren = 0.03,
  color = 'text-white',
}: TextRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  // Split text into words and characters
  const words = text.split(' ');

  // Variants for different animation presets
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  // Variants for different animation presets
  const getVariants = (): Variants => {
    switch (preset) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration },
          },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration },
          },
        };
      case 'typewriter':
        return {
          hidden: { opacity: 0, width: 0 },
          visible: {
            opacity: 1,
            width: 'auto',
            transition: { duration: duration * 2 },
          },
        };
      case 'gradient':
        return {
          hidden: { opacity: 0, color: '#000000' },
          visible: {
            opacity: 1,
            color: ['#4f46e5', '#8b5cf6', '#3b82f6', '#4f46e5'],
            transition: { 
              duration: duration * 3,
              times: [0, 0.33, 0.66, 1],
              repeat: Infinity,
              repeatType: 'reverse'
            },
          },
        };
      case 'glitch':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            x: [0, -2, 3, -1, 0],
            y: [0, 1, -1, 2, 0],
            filter: [
              'blur(0px)',
              'blur(1px)',
              'blur(0px)',
              'blur(2px)',
              'blur(0px)',
            ],
            transition: { 
              duration: 0.5,
              repeat: 3,
              repeatType: 'reverse',
              repeatDelay: 5
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration },
          },
        };
    }
  };

  // For typewriter effect, we need to render differently
  if (preset === 'typewriter') {
    return (
      <Element className={cn('overflow-hidden whitespace-nowrap', color, className)}>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={getVariants()}
          style={{ display: 'inline-block' }}
        >
          {text}
        </motion.span>
      </Element>
    );
  }

  // For gradient effect, we need to render the whole text at once
  if (preset === 'gradient') {
    return (
      <Element className={cn('overflow-hidden', className)}>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={getVariants()}
          style={{ display: 'inline-block' }}
        >
          {text}
        </motion.span>
      </Element>
    );
  }

  // For other effects, we stagger each word
  return (
    <Element className={cn('overflow-hidden', color, className)}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{ display: 'inline-block' }}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={getVariants()}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Element>
  );
}
