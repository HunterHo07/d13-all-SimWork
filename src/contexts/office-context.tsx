'use client';

import React, { createContext, useContext, useState } from 'react';
import { OfficeEnvironment, Workstation, Task, NPC } from '@/types';
import { officeEnvironment } from '@/data/office';
import { dummyTasks } from '@/data/tasks';

interface OfficeContextType {
  environment: OfficeEnvironment;
  activeWorkstation: Workstation | null;
  activeTask: Task | null;
  activeNPC: NPC | null;
  playerPosition: { x: number; y: number; z: number };
  setActiveWorkstation: (workstation: Workstation | null) => void;
  setActiveTask: (task: Task | null) => void;
  setActiveNPC: (npc: NPC | null) => void;
  setPlayerPosition: (position: { x: number; y: number; z: number }) => void;
  getTaskById: (id: string) => Task | undefined;
  getWorkstationByRole: (role: string) => Workstation | undefined;
}

const OfficeContext = createContext<OfficeContextType | undefined>(undefined);

export function OfficeProvider({ children }: { children: React.ReactNode }) {
  const [environment] = useState<OfficeEnvironment>(officeEnvironment);
  const [activeWorkstation, setActiveWorkstation] = useState<Workstation | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [activeNPC, setActiveNPC] = useState<NPC | null>(null);
  const [playerPosition, setPlayerPosition] = useState<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });

  const getTaskById = (id: string): Task | undefined => {
    return dummyTasks.find(task => task.id === id);
  };

  const getWorkstationByRole = (role: string): Workstation | undefined => {
    return environment.workstations.find(ws => ws.role === role);
  };

  return (
    <OfficeContext.Provider
      value={{
        environment,
        activeWorkstation,
        activeTask,
        activeNPC,
        playerPosition,
        setActiveWorkstation,
        setActiveTask,
        setActiveNPC,
        setPlayerPosition,
        getTaskById,
        getWorkstationByRole
      }}
    >
      {children}
    </OfficeContext.Provider>
  );
}

export function useOffice() {
  const context = useContext(OfficeContext);
  if (context === undefined) {
    throw new Error('useOffice must be used within an OfficeProvider');
  }
  return context;
}
