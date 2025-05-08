'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TextReveal } from '@/components/animations/text-reveal';
import Link from 'next/link';
import { UserRole } from '@/types';

export default function LandingPage() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '' as UserRole,
    company: '',
    size: '',
    interests: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, interests: [...formData.interests, value] });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value),
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formStep < 2) {
      setFormStep(formStep + 1);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Save to localStorage for demo purposes
      localStorage.setItem('simwork-signup', JSON.stringify(formData));
    }, 1500);
  };

  // Early access benefits
  const benefits = [
    {
      title: "50% Discount",
      description: "Early adopters get 50% off the regular subscription price for the first year.",
      icon: "💰"
    },
    {
      title: "Priority Support",
      description: "Get direct access to our development team for feedback and support.",
      icon: "🛠️"
    },
    {
      title: "Feature Input",
      description: "Help shape the future of SimWork by providing direct input on new features.",
      icon: "🚀"
    },
    {
      title: "Extended Trial",
      description: "Enjoy a 60-day trial period instead of the standard 14 days.",
      icon: "⏱️"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Form steps
  const renderFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters with a number and special character
                </p>
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Your Role & Company</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                  Primary Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="pm">Project Manager</option>
                  <option value="data-entry">Data Entry Specialist</option>
                  <option value="ai-engineer">AI Engineer</option>
                  <option value="hr">HR Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-300 mb-1">
                  Company Size
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Your Interests</h2>
            <div className="space-y-4">
              <p className="text-gray-400 mb-4">
                Which features are you most interested in? (Select all that apply)
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="interest-training"
                    name="interests"
                    value="training"
                    checked={formData.interests.includes('training')}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="interest-training" className="ml-2 text-sm text-gray-300">
                    Employee Training & Development
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="interest-hiring"
                    name="interests"
                    value="hiring"
                    checked={formData.interests.includes('hiring')}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="interest-hiring" className="ml-2 text-sm text-gray-300">
                    Hiring & Candidate Assessment
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="interest-onboarding"
                    name="interests"
                    value="onboarding"
                    checked={formData.interests.includes('onboarding')}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="interest-onboarding" className="ml-2 text-sm text-gray-300">
                    New Employee Onboarding
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="interest-skills"
                    name="interests"
                    value="skills"
                    checked={formData.interests.includes('skills')}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="interest-skills" className="ml-2 text-sm text-gray-300">
                    Skill Gap Analysis
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="interest-team"
                    name="interests"
                    value="team"
                    checked={formData.interests.includes('team')}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="interest-team" className="ml-2 text-sm text-gray-300">
                    Team Collaboration Exercises
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-300">
                    Subscribe to our newsletter for updates and early access information
                  </label>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  // Success message
  const renderSuccess = () => (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-4">Thank You for Signing Up!</h2>
      <p className="text-gray-300 mb-6">
        We've received your information and will be in touch soon with your early access details.
      </p>
      <Button
        variant="primary"
        href="/demo"
      >
        Try the Demo Now
      </Button>
    </div>
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-950 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <TextReveal
              text="Join the Future of Work"
              element="h1"
              preset="gradient"
              className="text-4xl md:text-5xl font-bold mb-4"
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sign up now for early access to SimWork and get exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sign Up Form */}
            <div>
              <Card variant="glass" className="overflow-hidden">
                <CardContent className="p-8">
                  {isSuccess ? (
                    renderSuccess()
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {/* Form Steps Progress */}
                      <div className="flex mb-8">
                        {[0, 1, 2].map((step) => (
                          <div key={step} className="flex-1">
                            <div
                              className={`h-2 rounded-full ${
                                formStep >= step ? 'bg-indigo-500' : 'bg-gray-700'
                              }`}
                            />
                            <div className="text-xs text-center mt-1 text-gray-500">
                              Step {step + 1}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Form Content */}
                      {renderFormStep()}

                      {/* Form Navigation */}
                      <div className="mt-8 flex justify-between">
                        {formStep > 0 ? (
                          <Button
                            variant="outline"
                            type="button"
                            onClick={() => setFormStep(formStep - 1)}
                          >
                            Back
                          </Button>
                        ) : (
                          <div></div>
                        )}

                        <Button
                          variant="primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </>
                          ) : formStep < 2 ? (
                            'Next'
                          ) : (
                            'Complete Sign Up'
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Early Access <span className="gradient-text">Benefits</span>
              </h2>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {benefits.map((benefit, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card variant="glass" className="border border-indigo-500/30">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-2xl">{benefit.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8 bg-indigo-900/30 rounded-lg p-6 border border-indigo-500/30">
                <h3 className="text-lg font-bold mb-2">Limited Time Offer</h3>
                <p className="text-gray-300">
                  Early access is limited to the first 500 users. Sign up now to secure your spot and all the exclusive benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
