'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { WorkstationCard } from '@/components/workstations/workstation-card';
import { TaskInterface } from '@/components/workstations/task-interface';
import { TextReveal } from '@/components/animations/text-reveal';
import { officeEnvironment } from '@/data/office';
import { getTasksByRole } from '@/data/tasks';
import { Task, UserRole } from '@/types';

export default function DemoPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [userScore, setUserScore] = useState<number>(0);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  // Role selection cards
  const roles: { role: UserRole; title: string; description: string; icon: string }[] = [
    {
      role: 'developer',
      title: 'Developer',
      description: 'Solve coding challenges and debug applications',
      icon: '💻',
    },
    {
      role: 'designer',
      title: 'Designer',
      description: 'Create visual assets and user interfaces',
      icon: '🎨',
    },
    {
      role: 'pm',
      title: 'Project Manager',
      description: 'Make strategic decisions and allocate resources',
      icon: '📊',
    },
    {
      role: 'data-entry',
      title: 'Data Entry Specialist',
      description: 'Process information with speed and accuracy',
      icon: '📝',
    },
    {
      role: 'ai-engineer',
      title: 'AI Engineer',
      description: 'Design prompts and evaluate AI models',
      icon: '🤖',
    },
  ];

  // Handle task selection
  const handleSelectTask = (task: Task) => {
    setActiveTask(task);
  };

  // Handle task completion
  const handleCompleteTask = (score: number) => {
    if (activeTask) {
      setCompletedTasks([...completedTasks, activeTask.id]);
      setUserScore(userScore + score);
      setActiveTask(null);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  // Handle task cancellation
  const handleCancelTask = () => {
    setActiveTask(null);
  };

  // Get workstation by role
  const getWorkstationByRole = (role: UserRole) => {
    return officeEnvironment.workstations.find(ws => ws.role === role);
  };

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

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-950 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <TextReveal
              text="SimulEx Demo"
              element="h1"
              preset="gradient"
              className="text-4xl md:text-5xl font-bold mb-4"
            />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of work simulation. Choose a role to get started.
            </p>
          </div>
          
          {/* Success Message */}
          {showSuccess && (
            <motion.div
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <span className="text-xl mr-2">✓</span>
                  <span>Task completed successfully! You earned {userScore} points.</span>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Role Selection */}
          {!selectedRole && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roles.map((role) => (
                  <motion.div key={role.role} variants={itemVariants}>
                    <Card
                      variant="glass"
                      className="h-full cursor-pointer hover:border-indigo-500 transition-colors"
                      onClick={() => setSelectedRole(role.role)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4">
                            <span className="text-2xl">{role.icon}</span>
                          </div>
                          <h3 className="text-xl font-bold">{role.title}</h3>
                        </div>
                        <p className="text-gray-400">{role.description}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4"
                        >
                          Select Role
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Workstation View */}
          {selectedRole && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">
                  {roles.find(r => r.role === selectedRole)?.title} Workstation
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedRole(null)}
                >
                  Change Role
                </Button>
              </div>
              
              {/* User Stats */}
              <div className="bg-gray-900/50 rounded-lg p-4 mb-8">
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-800 rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-400">Role:</span>
                    <span className="ml-2 font-bold">{roles.find(r => r.role === selectedRole)?.title}</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-400">Tasks Completed:</span>
                    <span className="ml-2 font-bold">{completedTasks.length}</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg px-4 py-2">
                    <span className="text-sm text-gray-400">Score:</span>
                    <span className="ml-2 font-bold">{userScore}</span>
                  </div>
                </div>
              </div>
              
              {/* Available Tasks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Available Tasks</h3>
                  <div className="space-y-4">
                    {getWorkstationByRole(selectedRole) && (
                      <WorkstationCard
                        workstation={getWorkstationByRole(selectedRole)!}
                        tasks={getTasksByRole(selectedRole).filter(task => !completedTasks.includes(task.id))}
                        onSelectTask={handleSelectTask}
                      />
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Workstation Overview</h3>
                  <Card variant="glass" className="h-full">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl">{roles.find(r => r.role === selectedRole)?.icon}</span>
                        </div>
                        <h4 className="text-xl font-bold">{roles.find(r => r.role === selectedRole)?.title} Station</h4>
                        <p className="text-gray-400 mt-2">{roles.find(r => r.role === selectedRole)?.description}</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Skills You'll Develop</h5>
                          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                            {selectedRole === 'developer' && (
                              <>
                                <li>Problem-solving</li>
                                <li>Debugging techniques</li>
                                <li>Code optimization</li>
                                <li>Algorithm design</li>
                              </>
                            )}
                            {selectedRole === 'designer' && (
                              <>
                                <li>Visual design</li>
                                <li>UI/UX principles</li>
                                <li>Color theory</li>
                                <li>Typography</li>
                              </>
                            )}
                            {selectedRole === 'pm' && (
                              <>
                                <li>Decision making</li>
                                <li>Resource allocation</li>
                                <li>Risk management</li>
                                <li>Stakeholder communication</li>
                              </>
                            )}
                            {selectedRole === 'data-entry' && (
                              <>
                                <li>Accuracy</li>
                                <li>Speed typing</li>
                                <li>Attention to detail</li>
                                <li>Data validation</li>
                              </>
                            )}
                            {selectedRole === 'ai-engineer' && (
                              <>
                                <li>Prompt engineering</li>
                                <li>Model evaluation</li>
                                <li>Data preprocessing</li>
                                <li>Fine-tuning techniques</li>
                              </>
                            )}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">How It Works</h5>
                          <ol className="list-decimal list-inside text-sm text-gray-400 space-y-1">
                            <li>Select a task from the available options</li>
                            <li>Complete the task according to the instructions</li>
                            <li>Submit your solution for evaluation</li>
                            <li>Receive feedback and earn points</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Task Interface */}
      {activeTask && (
        <TaskInterface
          task={activeTask}
          onComplete={handleCompleteTask}
          onCancel={handleCancelTask}
        />
      )}
    </>
  );
}
