'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Workstation, Task } from '@/types';
import { cn } from '@/lib/utils';

interface WorkstationCardProps {
  workstation: Workstation;
  tasks: Task[];
  onSelectTask: (task: Task) => void;
  className?: string;
}

export function WorkstationCard({
  workstation,
  tasks,
  onSelectTask,
  className,
}: WorkstationCardProps) {
  // Role-specific colors
  const roleColors = {
    developer: {
      bg: 'from-blue-600 to-indigo-700',
      text: 'text-blue-100',
      icon: '💻',
    },
    designer: {
      bg: 'from-purple-600 to-pink-700',
      text: 'text-purple-100',
      icon: '🎨',
    },
    pm: {
      bg: 'from-green-600 to-teal-700',
      text: 'text-green-100',
      icon: '📊',
    },
    'data-entry': {
      bg: 'from-yellow-600 to-amber-700',
      text: 'text-yellow-100',
      icon: '📝',
    },
    'ai-engineer': {
      bg: 'from-red-600 to-rose-700',
      text: 'text-red-100',
      icon: '🤖',
    },
  };

  const roleColor = roleColors[workstation.role as keyof typeof roleColors] || {
    bg: 'from-gray-600 to-gray-700',
    text: 'text-gray-100',
    icon: '🔍',
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    hover: {
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 }
    }
  };

  const taskVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.1 * i,
        duration: 0.3
      }
    }),
    hover: {
      scale: 1.02,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      className={className}
    >
      <Card 
        variant="glass" 
        className={cn(
          'overflow-hidden border-0',
          'bg-gradient-to-br',
          roleColor.bg
        )}
      >
        <div className="absolute top-0 right-0 p-4 text-4xl">
          {roleColor.icon}
        </div>
        
        <CardHeader>
          <CardTitle className={cn('text-2xl font-bold', roleColor.text)}>
            {workstation.name}
          </CardTitle>
          <CardDescription className={cn('text-sm opacity-80', roleColor.text)}>
            Complete tasks to earn XP and improve your skills
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3 mt-2">
            <h4 className={cn('text-lg font-semibold', roleColor.text)}>
              Available Tasks
            </h4>
            
            {tasks.length === 0 ? (
              <p className={cn('text-sm opacity-70', roleColor.text)}>
                No tasks available at the moment
              </p>
            ) : (
              <div className="space-y-2">
                {tasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    custom={index}
                    variants={taskVariants}
                    whileHover="hover"
                    className={cn(
                      'p-3 rounded-lg bg-black/20 cursor-pointer',
                      'border border-white/10 backdrop-blur-sm'
                    )}
                    onClick={() => onSelectTask(task)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className={cn('font-medium', roleColor.text)}>
                          {task.title}
                        </h5>
                        <p className={cn('text-xs mt-1 opacity-70', roleColor.text)}>
                          {task.description.length > 80
                            ? `${task.description.substring(0, 80)}...`
                            : task.description}
                        </p>
                      </div>
                      <div className={cn(
                        'px-2 py-1 text-xs rounded-full',
                        'bg-white/20 backdrop-blur-sm',
                        roleColor.text
                      )}>
                        {task.difficulty}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className={cn(
                        'flex items-center text-xs',
                        roleColor.text
                      )}>
                        <span className="mr-1">⚡</span> {task.xpReward} XP
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          'text-xs',
                          roleColor.text,
                          'hover:bg-white/10'
                        )}
                      >
                        Start Task
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
