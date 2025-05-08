import { User, UserRole } from '@/types';

export const dummyUsers: User[] = [
  {
    id: 'user-1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'developer',
    avatar: '/images/avatars/avatar-1.png',
    progress: {
      level: 3,
      xp: 1250,
      completedTasks: ['task-1', 'task-3', 'task-5'],
      skills: {
        'javascript': 75,
        'react': 60,
        'node': 45,
        'problem-solving': 70
      }
    }
  },
  {
    id: 'user-2',
    name: 'Sam Rivera',
    email: 'sam@example.com',
    role: 'designer',
    avatar: '/images/avatars/avatar-2.png',
    progress: {
      level: 4,
      xp: 1800,
      completedTasks: ['task-2', 'task-4', 'task-7'],
      skills: {
        'ui-design': 80,
        'typography': 65,
        'color-theory': 70,
        'figma': 85
      }
    }
  },
  {
    id: 'user-3',
    name: 'Jordan Lee',
    email: 'jordan@example.com',
    role: 'pm',
    avatar: '/images/avatars/avatar-3.png',
    progress: {
      level: 5,
      xp: 2200,
      completedTasks: ['task-6', 'task-8', 'task-9'],
      skills: {
        'project-planning': 85,
        'risk-management': 75,
        'team-leadership': 80,
        'stakeholder-communication': 70
      }
    }
  },
  {
    id: 'user-4',
    name: 'Taylor Kim',
    email: 'taylor@example.com',
    role: 'data-entry',
    avatar: '/images/avatars/avatar-4.png',
    progress: {
      level: 2,
      xp: 850,
      completedTasks: ['task-10', 'task-11'],
      skills: {
        'typing-speed': 90,
        'data-accuracy': 85,
        'attention-to-detail': 80,
        'spreadsheet-management': 65
      }
    }
  },
  {
    id: 'user-5',
    name: 'Morgan Chen',
    email: 'morgan@example.com',
    role: 'ai-engineer',
    avatar: '/images/avatars/avatar-5.png',
    progress: {
      level: 6,
      xp: 3100,
      completedTasks: ['task-12', 'task-13', 'task-14', 'task-15'],
      skills: {
        'prompt-engineering': 90,
        'model-evaluation': 75,
        'data-preprocessing': 80,
        'fine-tuning': 70
      }
    }
  }
];

export const getDemoUser = (role: UserRole): User => {
  return {
    id: 'demo-user',
    name: 'Demo User',
    email: 'demo@simulex.ai',
    role,
    avatar: '/images/avatars/avatar-demo.png',
    progress: {
      level: 1,
      xp: 0,
      completedTasks: [],
      skills: {}
    }
  };
};
