import React, { createContext, useContext, useState, ReactNode } from 'react';

// Sample types (you can update these as needed)
type Employee = { name: string };
type Department = { name: string };
type Task = { title: string };
type Recognition = { employeeName: string };
type Onboarding = { completionPercentage: number };

interface HRContextType {
  employees: Employee[];
  departments: Department[];
  tasks: Task[];
  recognitions: Recognition[];
  onboarding: Onboarding[];
}

const HRContext = createContext<HRContextType | null>(null);

export const HRProvider = ({ children }: { children: ReactNode }) => {
  const [employees] = useState<Employee[]>([]);
  const [departments] = useState<Department[]>([]);
  const [tasks] = useState<Task[]>([]);
  const [recognitions] = useState<Recognition[]>([]);
  const [onboarding] = useState<Onboarding[]>([]);

  return (
    <HRContext.Provider value={{ employees, departments, tasks, recognitions, onboarding }}>
      {children}
    </HRContext.Provider>
  );
};

export const useHR = () => {
  const context = useContext(HRContext);
  if (!context) throw new Error('useHR must be used within HRProvider');
  return context;
};
