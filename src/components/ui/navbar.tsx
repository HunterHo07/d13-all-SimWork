'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Demo', href: '/demo' },
    { label: 'Pitch Deck', href: '/pitch-deck' },
    { label: 'Why Us', href: '/why-us' },
  ];

  // Update active state based on current path
  const items = navItems.map(item => ({
    ...item,
    isActive: pathname === item.href,
  }));

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    initial: { backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)' },
    scrolled: { backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)' },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, pointerEvents: 'none' },
    open: { opacity: 1, y: 0, pointerEvents: 'auto' },
  };

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-2' : 'py-4',
        className
      )}
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'initial'}
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-bold text-xl">S</span>
            </motion.div>
            <span className="text-white font-bold text-xl">SimWork</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative"
              >
                <span
                  className={cn(
                    'text-sm font-medium transition-colors',
                    item.isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  )}
                >
                  {item.label}
                </span>
                {item.isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Button
              variant="primary"
              size="sm"
              className="ml-4"
              href="/landing"
            >
              Sign Up Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 bg-gray-900/90 backdrop-blur-lg rounded-lg"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-4 px-4">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium py-2 transition-colors',
                      item.isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  variant="primary"
                  size="sm"
                  className="mt-2"
                  href="/landing"
                >
                  Sign Up Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
