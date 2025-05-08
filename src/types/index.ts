// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  progress: UserProgress;
}

export type UserRole = 'developer' | 'designer' | 'pm' | 'data-entry' | 'ai-engineer';

export interface UserProgress {
  level: number;
  xp: number;
  completedTasks: string[];
  skills: Record<string, number>; // skill name -> proficiency level (0-100)
}

// Task types
export interface Task {
  id: string;
  title: string;
  description: string;
  role: UserRole;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  xpReward: number;
  timeLimit?: number; // in seconds
  type: TaskType;
  content: any; // varies based on task type
  evaluation: EvaluationCriteria;
}

export type TaskType = 
  | 'code-challenge'
  | 'design-brief'
  | 'decision-making'
  | 'data-entry'
  | 'prompt-engineering';

export interface EvaluationCriteria {
  metrics: {
    name: string;
    weight: number;
    threshold: number;
  }[];
  totalScore: number;
}

// Workstation types
export interface Workstation {
  id: string;
  name: string;
  role: UserRole;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
  model: string;
  availableTasks: string[]; // task ids
}

// Office environment types
export interface OfficeEnvironment {
  id: string;
  name: string;
  workstations: Workstation[];
  npcs: NPC[];
  obstacles: Obstacle[];
  bounds: {
    min: { x: number; y: number; z: number };
    max: { x: number; y: number; z: number };
  };
}

export interface NPC {
  id: string;
  name: string;
  role: string;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  model: string;
  dialogue: DialogueNode[];
}

export interface DialogueNode {
  id: string;
  text: string;
  options?: {
    text: string;
    nextId: string;
  }[];
}

export interface Obstacle {
  id: string;
  type: 'wall' | 'desk' | 'chair' | 'plant' | 'other';
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
  model: string;
  collider: {
    type: 'box' | 'sphere' | 'cylinder';
    dimensions: any; // depends on type
  };
}

// Animation types
export interface AnimationSequence {
  id: string;
  duration: number;
  easing: string;
  keyframes: any[];
  onComplete?: () => void;
}

// UI types
export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  href: string;
  children?: MenuItem[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: number;
  read: boolean;
}

// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

export type ThemeMode = 'light' | 'dark' | 'system';
