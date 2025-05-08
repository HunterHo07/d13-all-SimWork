'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroScene } from '@/components/three/hero-scene';
import { TextReveal } from '@/components/animations/text-reveal';
import { ParallaxSection } from '@/components/animations/parallax-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/ui/navbar';
import { WorkstationCard } from '@/components/workstations/workstation-card';
import { officeEnvironment } from '@/data/office';
import { getTasksByRole } from '@/data/tasks';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* 3D Hero Background */}
        <HeroScene />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            className="container mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TextReveal
              text="The Future of Work Simulation"
              element="h1"
              preset="gradient"
              className="text-4xl md:text-6xl font-bold mb-6"
            />

            <TextReveal
              text="Train. Simulate. Master."
              element="p"
              preset="typewriter"
              className="text-xl md:text-2xl mb-8 text-gray-300"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="mr-4"
                href="/demo"
              >
                Try Demo
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/landing"
              >
                Sign Up Now
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [0, 1, 0], y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Immersive Simulation</span> for Real Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SimulEx bridges the gap between theoretical knowledge and practical application with our AI-driven simulation platform.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card variant="glass" className="h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Interactive Workstations</h3>
                  <p className="text-gray-400">
                    Engage with realistic workstations for different roles, from coding terminals to design canvases.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card variant="glass" className="h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI-Powered Adaptation</h3>
                  <p className="text-gray-400">
                    Our AI engine adjusts task difficulty based on your performance for optimal learning.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card variant="glass" className="h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real-Time Analytics</h3>
                  <p className="text-gray-400">
                    Track your progress with detailed metrics and personalized feedback on your performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workstations Preview */}
      <section className="py-20 bg-gray-950 grid-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized <span className="gradient-text">Workstations</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your role and master the skills that matter in your field.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeEnvironment.workstations.slice(0, 3).map((workstation) => (
              <WorkstationCard
                key={workstation.id}
                workstation={workstation}
                tasks={getTasksByRole(workstation.role)}
                onSelectTask={() => {}}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              href="/demo"
            >
              Explore All Workstations
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="gradient-text">Users Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from professionals who have experienced the SimulEx difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ParallaxSection speed={0.2} direction="up">
              <Card variant="glass" className="p-8">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Alex Johnson</h4>
                      <p className="text-sm text-gray-400">Senior Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    "SimulEx transformed our onboarding process. New developers get up to speed twice as fast with the interactive coding challenges."
                  </p>
                </CardContent>
              </Card>
            </ParallaxSection>

            <ParallaxSection speed={0.3} direction="down">
              <Card variant="glass" className="p-8">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Sam Rivera</h4>
                      <p className="text-sm text-gray-400">UX Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    "The design workstation in SimulEx provides realistic briefs and feedback that helped me improve my skills dramatically."
                  </p>
                </CardContent>
              </Card>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Experience the <span className="gradient-text">Future of Work</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join SimulEx today and transform how you train, assess, and develop professional skills.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/landing"
              >
                Sign Up Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/demo"
              >
                Try Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-white font-bold text-xl">SimulEx</span>
              </Link>
              <p className="text-gray-400 mt-2">The Future of Work Simulation</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><Link href="/demo" className="text-gray-400 hover:text-white">Demo</Link></li>
                  <li><Link href="/pitch-deck" className="text-gray-400 hover:text-white">Pitch Deck</Link></li>
                  <li><Link href="/why-us" className="text-gray-400 hover:text-white">Why Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white">Privacy</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Terms</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white">Cookies</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">© 2024 SimulEx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
