import { OfficeEnvironment, Workstation, NPC, Obstacle } from '@/types';

// Workstations
const workstations: Workstation[] = [
  {
    id: 'dev-bay',
    name: 'Developer Bay',
    role: 'developer',
    position: { x: -8, y: 0, z: -5 },
    rotation: { x: 0, y: Math.PI / 4, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    model: '/models/workstation-dev.glb',
    availableTasks: ['task-1', 'task-3', 'task-5']
  },
  {
    id: 'design-lab',
    name: 'Design Lab',
    role: 'designer',
    position: { x: 8, y: 0, z: -5 },
    rotation: { x: 0, y: -Math.PI / 4, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    model: '/models/workstation-design.glb',
    availableTasks: ['task-2', 'task-4', 'task-7']
  },
  {
    id: 'pm-hub',
    name: 'Project Management Hub',
    role: 'pm',
    position: { x: 0, y: 0, z: -10 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    model: '/models/workstation-pm.glb',
    availableTasks: ['task-6', 'task-8', 'task-9']
  },
  {
    id: 'data-station',
    name: 'Data Entry Station',
    role: 'data-entry',
    position: { x: -8, y: 0, z: 5 },
    rotation: { x: 0, y: -Math.PI / 4, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    model: '/models/workstation-data.glb',
    availableTasks: ['task-10', 'task-11']
  },
  {
    id: 'ai-zone',
    name: 'AI Engineering Zone',
    role: 'ai-engineer',
    position: { x: 8, y: 0, z: 5 },
    rotation: { x: 0, y: Math.PI / 4, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    model: '/models/workstation-ai.glb',
    availableTasks: ['task-12', 'task-13', 'task-14', 'task-15']
  }
];

// NPCs
const npcs: NPC[] = [
  {
    id: 'npc-1',
    name: 'Dr. Ada',
    role: 'AI Guide',
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    model: '/models/npc-guide.glb',
    dialogue: [
      {
        id: 'intro',
        text: 'Welcome to SimWork! I\'m Dr. Ada, your AI guide. How can I assist you today?',
        options: [
          { text: 'Tell me about the workstations', nextId: 'workstations' },
          { text: 'How do I complete tasks?', nextId: 'tasks' },
          { text: 'What skills can I learn here?', nextId: 'skills' }
        ]
      },
      {
        id: 'workstations',
        text: 'There are five specialized workstations in our office: Developer Bay, Design Lab, Project Management Hub, Data Entry Station, and AI Engineering Zone. Each offers unique challenges tailored to different professional skills.',
        options: [
          { text: 'Tell me about Developer Bay', nextId: 'dev-bay-info' },
          { text: 'Tell me about Design Lab', nextId: 'design-lab-info' },
          { text: 'I\'ll explore on my own', nextId: 'goodbye' }
        ]
      },
      {
        id: 'tasks',
        text: 'To complete tasks, approach a workstation and interact with it. You\'ll be presented with a challenge relevant to that workstation\'s specialty. Complete the task according to the instructions, and you\'ll earn XP and skill points!',
        options: [
          { text: 'How am I evaluated?', nextId: 'evaluation' },
          { text: 'Thanks, I\'ll try it out', nextId: 'goodbye' }
        ]
      },
      {
        id: 'skills',
        text: 'SimWork helps you develop both technical and soft skills. Technical skills include coding, design, data analysis, and AI engineering. Soft skills include problem-solving, time management, attention to detail, and decision-making.',
        options: [
          { text: 'How do I track my progress?', nextId: 'progress' },
          { text: 'Thanks for the information', nextId: 'goodbye' }
        ]
      },
      {
        id: 'goodbye',
        text: 'Good luck with your simulation experience! If you need any more help, just find me in the central area.'
      }
    ]
  },
  {
    id: 'npc-2',
    name: 'Mentor Max',
    role: 'Senior Developer',
    position: { x: -6, y: 0, z: -3 },
    rotation: { x: 0, y: Math.PI / 2, z: 0 },
    model: '/models/npc-dev.glb',
    dialogue: [
      {
        id: 'intro',
        text: 'Hey there! I\'m Max, the senior developer. Need any coding tips?',
        options: [
          { text: 'What languages should I focus on?', nextId: 'languages' },
          { text: 'Any debugging advice?', nextId: 'debugging' },
          { text: 'No thanks, just looking around', nextId: 'goodbye' }
        ]
      },
      {
        id: 'languages',
        text: 'It depends on your goals, but JavaScript is always useful for web development. Python is great for data science and AI. The most important thing is to understand programming concepts that apply across languages.',
        options: [
          { text: 'Thanks for the advice', nextId: 'goodbye' }
        ]
      },
      {
        id: 'debugging',
        text: 'The best debugging technique is to break down the problem. Add console logs or print statements to track the flow of data. And remember, the error is usually between the keyboard and the chair!',
        options: [
          { text: 'Thanks for the advice', nextId: 'goodbye' }
        ]
      },
      {
        id: 'goodbye',
        text: 'Good luck with your coding challenges! Stop by the Developer Bay if you want to test your skills.'
      }
    ]
  }
];

// Obstacles
const obstacles: Obstacle[] = [
  {
    id: 'obstacle-1',
    type: 'wall',
    position: { x: 0, y: 2, z: -15 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 30, y: 4, z: 0.5 },
    model: '/models/wall.glb',
    collider: {
      type: 'box',
      dimensions: { width: 30, height: 4, depth: 0.5 }
    }
  },
  {
    id: 'obstacle-2',
    type: 'wall',
    position: { x: 0, y: 2, z: 15 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 30, y: 4, z: 0.5 },
    model: '/models/wall.glb',
    collider: {
      type: 'box',
      dimensions: { width: 30, height: 4, depth: 0.5 }
    }
  },
  {
    id: 'obstacle-3',
    type: 'wall',
    position: { x: -15, y: 2, z: 0 },
    rotation: { x: 0, y: Math.PI / 2, z: 0 },
    scale: { x: 30, y: 4, z: 0.5 },
    model: '/models/wall.glb',
    collider: {
      type: 'box',
      dimensions: { width: 30, height: 4, depth: 0.5 }
    }
  },
  {
    id: 'obstacle-4',
    type: 'wall',
    position: { x: 15, y: 2, z: 0 },
    rotation: { x: 0, y: Math.PI / 2, z: 0 },
    scale: { x: 30, y: 4, z: 0.5 },
    model: '/models/wall.glb',
    collider: {
      type: 'box',
      dimensions: { width: 30, height: 4, depth: 0.5 }
    }
  }
];

// Office Environment
export const officeEnvironment: OfficeEnvironment = {
  id: 'main-office',
  name: 'SimWork Headquarters',
  workstations,
  npcs,
  obstacles,
  bounds: {
    min: { x: -15, y: 0, z: -15 },
    max: { x: 15, y: 4, z: 15 }
  }
};
