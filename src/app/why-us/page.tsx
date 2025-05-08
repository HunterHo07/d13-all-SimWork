'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TextReveal } from '@/components/animations/text-reveal';
import { ParallaxSection } from '@/components/animations/parallax-section';
import Link from 'next/link';

export default function WhyUsPage() {
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

  // Competitor comparison data
  const competitors = [
    {
      name: "SimulEx",
      price: "$19.99/mo",
      age: "New",
      features: {
        "Multi-role simulation": true,
        "Real-time adaptation": true,
        "Immersive environment": true,
        "Detailed analytics": true,
        "Practical skill assessment": true,
        "AI-powered feedback": true,
        "Cross-domain integration": true,
        "Gamified experience": true,
      }
    },
    {
      name: "Cornerstone",
      price: "$30-$65/mo",
      age: "20+ years",
      features: {
        "Multi-role simulation": false,
        "Real-time adaptation": false,
        "Immersive environment": false,
        "Detailed analytics": true,
        "Practical skill assessment": false,
        "AI-powered feedback": false,
        "Cross-domain integration": true,
        "Gamified experience": false,
      }
    },
    {
      name: "Labster",
      price: "$15-$30/mo",
      age: "12 years",
      features: {
        "Multi-role simulation": false,
        "Real-time adaptation": false,
        "Immersive environment": true,
        "Detailed analytics": false,
        "Practical skill assessment": true,
        "AI-powered feedback": false,
        "Cross-domain integration": false,
        "Gamified experience": true,
      }
    },
    {
      name: "HackerRank",
      price: "$25-$60/mo",
      age: "14 years",
      features: {
        "Multi-role simulation": false,
        "Real-time adaptation": true,
        "Immersive environment": false,
        "Detailed analytics": true,
        "Practical skill assessment": true,
        "AI-powered feedback": false,
        "Cross-domain integration": false,
        "Gamified experience": false,
      }
    }
  ];

  // Key benefits
  const benefits = [
    {
      title: "Faster Onboarding",
      description: "Reduce onboarding time by up to 60% with hands-on simulation of real work tasks.",
      icon: "⚡",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Better Hiring Decisions",
      description: "Evaluate candidates based on actual performance, not just interviews and resumes.",
      icon: "🎯",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Skill Gap Analysis",
      description: "Identify and address skill gaps with precision using our detailed analytics.",
      icon: "📊",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Engaging Learning",
      description: "Increase engagement and knowledge retention through gamified simulation.",
      icon: "🎮",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Adaptive Difficulty",
      description: "AI-powered system adjusts to each user's skill level for optimal learning.",
      icon: "🤖",
      color: "from-indigo-600 to-blue-600"
    },
    {
      title: "Cross-Functional Training",
      description: "Train employees across multiple roles and departments in one platform.",
      icon: "🔄",
      color: "from-pink-600 to-purple-600"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-950 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <TextReveal
              text="Why Choose SimulEx?"
              element="h1"
              preset="gradient"
              className="text-4xl md:text-5xl font-bold mb-4"
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we compare to traditional training and assessment platforms
            </p>
          </div>

          {/* Key Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key <span className="gradient-text">Benefits</span>
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card variant="glass" className="h-full">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                        <span className="text-white text-xl">{benefit.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Competitor Comparison */}
          <section className="mb-20">
            <ParallaxSection speed={0.1} direction="up">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Competitive <span className="gradient-text">Comparison</span>
              </h2>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="py-4 px-6 text-left">Feature</th>
                        {competitors.map((competitor, index) => (
                          <th key={index} className="py-4 px-6 text-center">
                            {competitor.name === "SimulEx" ? (
                              <span className="text-indigo-400 font-bold">{competitor.name}</span>
                            ) : (
                              competitor.name
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-800">
                        <td className="py-3 px-6 text-gray-300">Starting Price</td>
                        {competitors.map((competitor, index) => (
                          <td key={index} className="py-3 px-6 text-center text-gray-400">
                            {competitor.name === "SimulEx" ? (
                              <span className="text-indigo-400 font-bold">{competitor.price}</span>
                            ) : (
                              competitor.price
                            )}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-t border-gray-800">
                        <td className="py-3 px-6 text-gray-300">Company Age</td>
                        {competitors.map((competitor, index) => (
                          <td key={index} className="py-3 px-6 text-center text-gray-400">
                            {competitor.name === "SimulEx" ? (
                              <span className="text-indigo-400 font-bold">{competitor.age}</span>
                            ) : (
                              competitor.age
                            )}
                          </td>
                        ))}
                      </tr>
                      {Object.keys(competitors[0].features).map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-t border-gray-800">
                          <td className="py-3 px-6 text-gray-300">{feature}</td>
                          {competitors.map((competitor, compIndex) => (
                            <td key={compIndex} className="py-3 px-6 text-center">
                              {competitor.features[feature as keyof typeof competitor.features] ? (
                                <span className={competitor.name === "SimulEx" ? "text-green-500 font-bold" : "text-green-500"}>✓</span>
                              ) : (
                                <span className="text-red-500">✗</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ParallaxSection>
          </section>

          {/* Testimonials */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our <span className="gradient-text">Users Say</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="glass" className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Alex Johnson</h4>
                      <p className="text-sm text-gray-400">Senior Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "SimulEx transformed our onboarding process. New developers get up to speed twice as fast with the interactive coding challenges."
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Sam Rivera</h4>
                      <p className="text-sm text-gray-400">UX Designer</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "The design workstation in SimulEx provides realistic briefs and feedback that helped me improve my skills dramatically."
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Jordan Lee</h4>
                      <p className="text-sm text-gray-400">Project Manager</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "The decision-making scenarios in SimulEx are incredibly realistic. They've helped our PM team develop better judgment and resource allocation skills."
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 mr-4"></div>
                    <div>
                      <h4 className="font-bold">Taylor Kim</h4>
                      <p className="text-sm text-gray-400">HR Director</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    "SimulEx has revolutionized our hiring process. We can now evaluate candidates based on actual performance rather than just interviews and resumes."
                  </p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
