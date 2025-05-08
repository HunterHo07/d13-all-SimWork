'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TextReveal } from '@/components/animations/text-reveal';

export default function PitchDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Pitch deck slides
  const slides = [
    {
      title: "SimWork",
      subtitle: "The Future of Work Simulation",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-4xl">S</span>
          </div>
          <p className="text-xl text-gray-300 mb-6">
            Train. Simulate. Master.
          </p>
          <p className="text-gray-400">
            Presented by SimWork Team
          </p>
        </div>
      )
    },
    {
      title: "The Problem",
      subtitle: "Current training and hiring processes are broken",
      content: (
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-xl">💸</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Wrong Hires, Wasted Money</h3>
              <p className="text-gray-400">
                Companies keep hiring the wrong people—time, salary, and training costs wasted. Real candidates also lose out due to bad screening and vague interviews.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-xl">🎭</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Fake Skills, No Real Test</h3>
              <p className="text-gray-400">
                Many hires pass interviews but fail on the job. There's no hands-on task or live environment to prove they can actually do the daily work—even with AI tools.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-xl">⏱️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Slow, Inefficient Hiring Process</h3>
              <p className="text-gray-400">
                Too many rounds, test sheets, and guesswork. No live data, no real output. Hiring managers waste time when they could just watch candidates solve actual tasks.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our Solution",
      subtitle: "Immersive, AI-driven work simulation",
      content: (
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-xl">🌐</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Immersive, Multi-Role Game World</h3>
              <p className="text-gray-400">
                SimWork places users in a 3D office/map with stations for Developer, Designer, PM, Data Entry, and AI Engineer roles. Trainees navigate to desks equipped with real terminals, virtual notebooks, and design tools.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Adaptivity & Agents</h3>
              <p className="text-gray-400">
                Integrated GPT-based agents guide scenarios, perform OCR on designer-submitted assets, and dynamically adjust task complexity. This prevents mis-hires by exposing candidates to true job demands.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-xl">📊</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Real-Time Analytics & Feedback</h3>
              <p className="text-gray-400">
                A dashboard tracks KPIs (accuracy, speed, decision quality), generates personalized feedback loops, and offers hiring managers live or recorded sessions.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Market Opportunity",
      subtitle: "A growing need for better training and assessment",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Market Size</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-indigo-400 mb-2">$25.6B</p>
                <p className="text-sm text-gray-400">Corporate E-Learning Market (2023)</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-indigo-400 mb-2">$44.5B</p>
                <p className="text-sm text-gray-400">Projected Market Size (2028)</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-indigo-400 mb-2">11.7%</p>
                <p className="text-sm text-gray-400">CAGR (2023-2028)</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-indigo-400 mb-2">74%</p>
                <p className="text-sm text-gray-400">Companies Reporting Skills Gaps</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Key Trends</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Remote work increasing demand for virtual training</li>
              <li>AI integration transforming skill requirements</li>
              <li>Growing focus on practical skills over credentials</li>
              <li>Rising costs of bad hires (up to 30% of first-year salary)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Competitive Advantage",
      subtitle: "What sets SimWork apart",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="glass" className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Cross-Domain Integration</h3>
                <p className="text-gray-400 text-sm">
                  Unlike specialized platforms, SimWork spans multiple job functions in one environment.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Real-World Task Simulation</h3>
                <p className="text-gray-400 text-sm">
                  Goes beyond quizzes and videos to simulate actual work environments and tasks.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Adaptive Difficulty</h3>
                <p className="text-gray-400 text-sm">
                  AI-driven system that adjusts to user skill level in real-time.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass" className="h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Comprehensive Analytics</h3>
                <p className="text-gray-400 text-sm">
                  Provides detailed performance metrics beyond simple completion rates.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Competitor Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">Feature</th>
                    <th className="text-center py-2">SimWork</th>
                    <th className="text-center py-2">Traditional LMS</th>
                    <th className="text-center py-2">Coding Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">Multi-role simulation</td>
                    <td className="text-center text-green-500">✓</td>
                    <td className="text-center text-red-500">✗</td>
                    <td className="text-center text-red-500">✗</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">Real-time adaptation</td>
                    <td className="text-center text-green-500">✓</td>
                    <td className="text-center text-red-500">✗</td>
                    <td className="text-center text-yellow-500">Partial</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2">Immersive environment</td>
                    <td className="text-center text-green-500">✓</td>
                    <td className="text-center text-red-500">✗</td>
                    <td className="text-center text-red-500">✗</td>
                  </tr>
                  <tr>
                    <td className="py-2">Detailed analytics</td>
                    <td className="text-center text-green-500">✓</td>
                    <td className="text-center text-yellow-500">Partial</td>
                    <td className="text-center text-yellow-500">Partial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Business Model",
      subtitle: "Pricing and go-to-market strategy",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="glass" className="h-full">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Individual</h3>
                <div className="text-3xl font-bold text-indigo-400 mb-4">$19.99</div>
                <p className="text-sm text-gray-400 mb-4">per month</p>
                <ul className="text-left text-sm text-gray-400 space-y-2 mb-6">
                  <li>✓ All workstations</li>
                  <li>✓ Basic analytics</li>
                  <li>✓ Personal progress tracking</li>
                  <li>✗ Team features</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card variant="glass" className="h-full border border-indigo-500">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full inline-block mb-2">POPULAR</div>
                <h3 className="text-xl font-bold mb-2">Team</h3>
                <div className="text-3xl font-bold text-indigo-400 mb-4">$16.99</div>
                <p className="text-sm text-gray-400 mb-4">per user/month</p>
                <ul className="text-left text-sm text-gray-400 space-y-2 mb-6">
                  <li>✓ All workstations</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Team dashboard</li>
                  <li>✓ 5-20 users</li>
                </ul>
                <Button variant="primary" size="sm" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card variant="glass" className="h-full">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-indigo-400 mb-4">Custom</div>
                <p className="text-sm text-gray-400 mb-4">contact for pricing</p>
                <ul className="text-left text-sm text-gray-400 space-y-2 mb-6">
                  <li>✓ All workstations</li>
                  <li>✓ Enterprise analytics</li>
                  <li>✓ Custom integrations</li>
                  <li>✓ Unlimited users</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Go-to-Market Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Phase 1: Launch</h4>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  <li>Free trial for early adopters</li>
                  <li>Focus on tech and design companies</li>
                  <li>Content marketing and webinars</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Phase 2: Growth</h4>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  <li>Expand to educational institutions</li>
                  <li>Partner with HR platforms</li>
                  <li>Referral program launch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Roadmap",
      subtitle: "Our phased development plan",
      content: (
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-indigo-500/30"></div>

            <div className="relative pl-16 pb-8">
              <div className="absolute left-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phase 1: MVP (Current)</h3>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Web-based 2.5D simulation game</li>
                    <li>Interactive office environment</li>
                    <li>AI-powered quest system</li>
                    <li>Embedded tools for various roles</li>
                    <li>Basic scoring and feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative pl-16 pb-8">
              <div className="absolute left-0 w-12 h-12 bg-indigo-500/70 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phase 2: Expansion (Q3 2024)</h3>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Desktop/mobile applications</li>
                    <li>Expanded role scenarios</li>
                    <li>Enhanced analytics dashboard</li>
                    <li>Team collaboration features</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative pl-16">
              <div className="absolute left-0 w-12 h-12 bg-indigo-500/40 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phase 3: Advanced Features (2025)</h3>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>VR/AR integration</li>
                    <li>Multiplayer enterprise modules</li>
                    <li>Advanced AI coaching</li>
                    <li>Industry-specific simulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Team",
      subtitle: "Meet the founders",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="glass" className="h-full">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-indigo-500/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">Alex Chen</h3>
              <p className="text-indigo-400 mb-3">CEO & Co-Founder</p>
              <p className="text-sm text-gray-400 mb-4">
                Former Head of Learning & Development at TechCorp. 10+ years in corporate training.
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="h-full">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-purple-500/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">Maya Rodriguez</h3>
              <p className="text-indigo-400 mb-3">CTO & Co-Founder</p>
              <p className="text-sm text-gray-400 mb-4">
                AI Engineer with experience at leading tech companies. Expert in simulation systems.
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="h-full">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-blue-500/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-1">Jordan Taylor</h3>
              <p className="text-indigo-400 mb-3">CPO & Co-Founder</p>
              <p className="text-sm text-gray-400 mb-4">
                Former Product Lead at EdTech startup. Specializes in gamification and user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Thank You",
      subtitle: "Ready to transform training and hiring",
      content: (
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-4xl">S</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Join the Future of Work</h3>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to learn more or schedule a demo
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="primary" size="lg">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
          <p className="text-gray-400 mt-8">
            contact@simwork.ai | www.simwork.ai
          </p>
        </div>
      )
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Animation variants
  const slideVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-950 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Pitch Deck */}
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            {/* Slide Navigation */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  ←
                </Button>
                <span className="text-sm text-gray-400">
                  {currentSlide + 1} / {slides.length}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                >
                  →
                </Button>
              </div>

              <div className="flex items-center space-x-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? 'bg-indigo-500' : 'bg-gray-600'
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Slide Content */}
            <div className="relative h-[calc(100vh-200px)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0 p-8"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={slideVariants}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-full flex flex-col">
                    <div className="mb-6">
                      <TextReveal
                        text={slides[currentSlide].title}
                        element="h1"
                        preset="gradient"
                        className="text-3xl md:text-4xl font-bold mb-2"
                      />
                      <p className="text-gray-400">{slides[currentSlide].subtitle}</p>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                      {slides[currentSlide].content}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Controls */}
            <div className="bg-gray-800 px-4 py-3 flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                Previous
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
