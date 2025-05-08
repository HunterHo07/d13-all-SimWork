import { Task } from '@/types';

export const dummyTasks: Task[] = [
  // Developer Tasks
  {
    id: 'task-1',
    title: 'Debug the Authentication Flow',
    description: 'Identify and fix the bugs in the user authentication process. The login form submits but users are not being authenticated properly.',
    role: 'developer',
    difficulty: 'intermediate',
    xpReward: 150,
    timeLimit: 900, // 15 minutes
    type: 'code-challenge',
    content: {
      codeSnippet: `function authenticateUser(email, password) {
  // Check if user exists
  const user = users.find(u => u.email === email);
  
  // Bug: Not checking if user exists before accessing properties
  if (user.password === hashPassword(password)) {
    return generateToken(user);
  }
  
  return null;
}`,
      expectedOutput: 'Successfully authenticated user',
      hints: [
        'Check what happens when a user is not found',
        'Make sure to validate all inputs',
        'Consider adding proper error handling'
      ]
    },
    evaluation: {
      metrics: [
        { name: 'correctness', weight: 0.5, threshold: 0.8 },
        { name: 'efficiency', weight: 0.3, threshold: 0.7 },
        { name: 'code-quality', weight: 0.2, threshold: 0.6 }
      ],
      totalScore: 100
    }
  },
  
  // Designer Tasks
  {
    id: 'task-2',
    title: 'Create a Futuristic Button Component',
    description: 'Design a button component that feels futuristic and interactive. The button should have hover, active, and disabled states.',
    role: 'designer',
    difficulty: 'beginner',
    xpReward: 100,
    type: 'design-brief',
    content: {
      requirements: [
        'Create a primary button with text "Submit"',
        'Design hover, active, and disabled states',
        'Use a futuristic color scheme',
        'Include subtle animations or effects',
        'Ensure the design is accessible (sufficient contrast)'
      ],
      dimensions: { width: 200, height: 60 },
      format: 'PNG or SVG'
    },
    evaluation: {
      metrics: [
        { name: 'creativity', weight: 0.4, threshold: 0.7 },
        { name: 'usability', weight: 0.3, threshold: 0.8 },
        { name: 'technical-execution', weight: 0.3, threshold: 0.6 }
      ],
      totalScore: 100
    }
  },
  
  // Project Manager Tasks
  {
    id: 'task-6',
    title: 'Resolve Resource Allocation Conflict',
    description: 'Your team has conflicting resource needs. Two critical projects need the same senior developer at the same time. Make a decision on how to resolve this conflict.',
    role: 'pm',
    difficulty: 'advanced',
    xpReward: 200,
    type: 'decision-making',
    content: {
      scenario: 'Project A is a high-visibility client project that is already behind schedule. Project B is an internal infrastructure project with long-term benefits but no immediate client visibility. Both project leads are requesting Senior Developer Dana for the next two weeks.',
      options: [
        'Assign Dana to Project A full-time and find an alternative solution for Project B',
        'Assign Dana to Project B full-time and explain the delay to the client',
        'Split Dana\'s time 50/50 between both projects',
        'Bring in an external contractor to help with one of the projects',
        'Propose your own solution'
      ],
      constraints: [
        'Budget for external contractors is limited',
        'The client for Project A is already frustrated with delays',
        'Project B affects the efficiency of all future projects'
      ]
    },
    evaluation: {
      metrics: [
        { name: 'stakeholder-impact', weight: 0.4, threshold: 0.7 },
        { name: 'resource-efficiency', weight: 0.3, threshold: 0.6 },
        { name: 'risk-management', weight: 0.3, threshold: 0.7 }
      ],
      totalScore: 100
    }
  },
  
  // Data Entry Tasks
  {
    id: 'task-10',
    title: 'Process Customer Information Forms',
    description: 'Enter customer information from forms into the database system accurately and efficiently.',
    role: 'data-entry',
    difficulty: 'beginner',
    xpReward: 80,
    timeLimit: 600, // 10 minutes
    type: 'data-entry',
    content: {
      forms: [
        {
          id: 'form-1',
          customer: {
            name: 'John Smith',
            email: 'john.smith@example.com',
            phone: '555-123-4567',
            address: '123 Main St, Anytown, CA 90210',
            subscription: 'Premium',
            startDate: '2023-05-15'
          }
        },
        // More forms would be included here
      ],
      fields: ['name', 'email', 'phone', 'address', 'subscription', 'startDate'],
      specialInstructions: 'Format phone numbers as XXX-XXX-XXXX. All dates should be in YYYY-MM-DD format.'
    },
    evaluation: {
      metrics: [
        { name: 'accuracy', weight: 0.6, threshold: 0.9 },
        { name: 'speed', weight: 0.4, threshold: 0.7 }
      ],
      totalScore: 100
    }
  },
  
  // AI Engineer Tasks
  {
    id: 'task-12',
    title: 'Optimize Prompt for Customer Service AI',
    description: 'Create an effective prompt for an AI assistant that will handle customer service inquiries for an e-commerce website.',
    role: 'ai-engineer',
    difficulty: 'intermediate',
    xpReward: 150,
    type: 'prompt-engineering',
    content: {
      context: 'The AI assistant will be the first point of contact for customers with questions about orders, returns, and product information. It should be helpful, friendly, and able to escalate to a human when necessary.',
      requirements: [
        'Include clear instructions on tone and personality',
        'Define the scope of questions the AI should answer',
        'Include criteria for when to escalate to a human',
        'Provide examples of good responses to common questions',
        'Include constraints to prevent harmful outputs'
      ],
      exampleQueries: [
        'Where is my order?',
        'How do I return this product?',
        'Is this item in stock?',
        'I want to speak to a manager!'
      ]
    },
    evaluation: {
      metrics: [
        { name: 'clarity', weight: 0.3, threshold: 0.8 },
        { name: 'effectiveness', weight: 0.4, threshold: 0.7 },
        { name: 'safety', weight: 0.3, threshold: 0.9 }
      ],
      totalScore: 100
    }
  }
];

export const getTasksByRole = (role: string): Task[] => {
  return dummyTasks.filter(task => task.role === role);
};
