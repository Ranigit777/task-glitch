import { createContext, useContext, ReactNode } from 'react';
import { useTasks } from '@/hooks/useTasks';

const TasksContext = createContext<ReturnType<typeof useTasks> | undefined>(undefined);

export function TasksProvider({ children }: { children: ReactNode }) {
  const tasks = useTasks(); // this now includes clearLastDeleted
  return <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>;
}

export function useTasksContext() {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error('useTasksContext must be used within TasksProvider');
  return ctx;
}