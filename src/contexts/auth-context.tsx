'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '@/types';
import { loadUserData, saveUserData, clearUserData } from '@/lib/utils';
import { getDemoUser } from '@/data/users';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<boolean>;
  startDemo: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user data from localStorage on initial render
    const loadUser = async () => {
      const userData = loadUserData();
      if (userData) {
        setUser(userData);
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, any email/password combination works
    // In a real app, this would validate against a backend
    const demoUser: User = {
      id: 'user-' + Math.random().toString(36).substring(2, 9),
      name: email.split('@')[0],
      email,
      role: 'developer', // Default role
      avatar: '/images/avatars/avatar-1.png',
      progress: {
        level: 1,
        xp: 0,
        completedTasks: [],
        skills: {}
      }
    };
    
    setUser(demoUser);
    saveUserData(demoUser);
    setIsLoading(false);
    return true;
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    role: UserRole
  ): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, registration always succeeds
    // In a real app, this would create a user in the backend
    const newUser: User = {
      id: 'user-' + Math.random().toString(36).substring(2, 9),
      name,
      email,
      role,
      avatar: '/images/avatars/avatar-1.png',
      progress: {
        level: 1,
        xp: 0,
        completedTasks: [],
        skills: {}
      }
    };
    
    setUser(newUser);
    saveUserData(newUser);
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    clearUserData();
  };

  const startDemo = (role: UserRole) => {
    const demoUser = getDemoUser(role);
    setUser(demoUser);
    saveUserData(demoUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        register,
        startDemo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
