'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

interface UseGSAPOptions {
  animation?: gsap.TweenVars;
  trigger?: Element | string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  pin?: boolean;
  anticipatePin?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

/**
 * Custom hook for GSAP animations
 */
export function useGSAP<T extends Element>(
  options: UseGSAPOptions = {}
) {
  const elementRef = useRef<T | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Create the animation
    if (options.animation) {
      animationRef.current = gsap.to(
        elementRef.current,
        options.animation
      );
    }

    // Create ScrollTrigger if trigger is provided
    if (options.trigger) {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: options.trigger,
        start: options.start || 'top 80%',
        end: options.end || 'bottom 20%',
        scrub: options.scrub || false,
        markers: options.markers || false,
        pin: options.pin || false,
        anticipatePin: options.anticipatePin || false,
        onEnter: options.onEnter,
        onLeave: options.onLeave,
        onEnterBack: options.onEnterBack,
        onLeaveBack: options.onLeaveBack,
        animation: animationRef.current || undefined,
      });
    }

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [options]);

  return { elementRef, animationRef, scrollTriggerRef };
}

/**
 * Creates a staggered animation for multiple elements
 */
export function useStaggerAnimation<T extends Element>(
  elements: T[] | NodeListOf<T>,
  animation: gsap.TweenVars,
  staggerAmount: number = 0.1
) {
  useEffect(() => {
    if (!elements || elements.length === 0) return;

    const tl = gsap.timeline();
    tl.to(elements, {
      ...animation,
      stagger: staggerAmount,
    });

    return () => {
      tl.kill();
    };
  }, [elements, animation, staggerAmount]);
}

/**
 * Creates a parallax effect
 */
export function useParallax<T extends Element>(
  speed: number = 0.5
) {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = elementRef.current;
      if (element) {
        gsap.to(element, {
          y: scrollPosition * speed,
          ease: 'none',
          duration: 0.5,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return elementRef;
}

/**
 * Smooth scroll to an element
 */
export function scrollToElement(
  target: string | Element,
  duration: number = 1,
  offset: number = 0
) {
  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY: offset,
    },
    ease: 'power2.inOut',
  });
}
