'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Task } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TaskInterfaceProps {
  task: Task;
  onComplete: (score: number) => void;
  onCancel: () => void;
}

export function TaskInterface({ task, onComplete, onCancel }: TaskInterfaceProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userSolution, setUserSolution] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Task type specific interfaces
  const renderTaskInterface = () => {
    switch (task.type) {
      case 'code-challenge':
        return (
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-sm font-mono text-gray-300 mb-2">Challenge:</h3>
              <pre className="text-sm font-mono text-white overflow-x-auto p-2 bg-black/30 rounded">
                {task.content.codeSnippet}
              </pre>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Your Solution:</h3>
              <textarea
                className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono text-white"
                value={userSolution}
                onChange={(e) => setUserSolution(e.target.value)}
                placeholder="Write your solution here..."
              />
            </div>
            
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-2">Hints:</h3>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {task.content.hints.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            </div>
          </div>
        );
        
      case 'design-brief':
        return (
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-2">Design Brief:</h3>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {task.content.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Upload Your Design:</h3>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-400 mb-2">Drag and drop your file here, or click to browse</p>
                  <p className="text-xs text-gray-500">Supported formats: {task.content.format}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Browse Files
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-2">Dimensions:</h3>
              <p className="text-sm text-gray-400">
                Width: {task.content.dimensions.width}px, Height: {task.content.dimensions.height}px
              </p>
            </div>
          </div>
        );
        
      case 'decision-making':
        return (
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-2">Scenario:</h3>
              <p className="text-sm text-gray-400">{task.content.scenario}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Options:</h3>
              <div className="space-y-2">
                {task.content.options.map((option, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-3 border rounded-lg cursor-pointer transition-colors",
                      userSolution === option
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-700 hover:border-gray-600"
                    )}
                    onClick={() => setUserSolution(option)}
                  >
                    <p className="text-sm text-gray-300">{option}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-2">Constraints:</h3>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {task.content.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400">This task type is not yet implemented in the demo.</p>
          </div>
        );
    }
  };
  
  // Steps for task completion
  const steps = [
    { title: 'Task Details', content: renderTaskInterface() },
    { title: 'Submission', content: (
      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300 mb-2">Review Your Submission:</h3>
          <p className="text-sm text-gray-400 mb-4">
            Please review your solution before final submission.
          </p>
          
          <div className="bg-black/30 p-3 rounded-lg">
            <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap">
              {userSolution || 'No solution provided yet.'}
            </pre>
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-3 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300 mb-2">Evaluation Criteria:</h3>
          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
            {task.evaluation.metrics.map((metric, index) => (
              <li key={index}>
                {metric.name} ({metric.weight * 100}% of total score)
              </li>
            ))}
          </ul>
        </div>
      </div>
    )},
  ];
  
  // Handle task submission
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate evaluation process
    setTimeout(() => {
      // Calculate a random score between 60-100
      const score = Math.floor(Math.random() * 41) + 60;
      onComplete(score);
      setIsSubmitting(false);
    }, 2000);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`task-${task.id}-step-${currentStep}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <Card className="w-full max-w-2xl bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-bold">{task.title}</CardTitle>
              <div className="flex items-center space-x-2">
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                  {task.difficulty}
                </span>
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full">
                  {task.xpReward} XP
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{task.description}</p>
            
            {/* Progress steps */}
            <div className="flex mt-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium",
                      currentStep >= index
                        ? "bg-blue-500 text-white"
                        : "bg-gray-700 text-gray-400"
                    )}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "h-1 w-16",
                        currentStep > index
                          ? "bg-blue-500"
                          : "bg-gray-700"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardHeader>
          
          <CardContent>
            {steps[currentStep].content}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button
              variant="ghost"
              onClick={onCancel}
            >
              Cancel
            </Button>
            
            <div className="flex space-x-2">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              )}
              
              {currentStep < steps.length - 1 ? (
                <Button
                  variant="primary"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!userSolution}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !userSolution}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Evaluating...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
