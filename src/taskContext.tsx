import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { Task } from "@/types";
import { TASKS_LOCAL_STORAGE_ITEM_NAME, initialTasks } from "@/constants";
import { generateRandomId } from "@utils/generateRandomId";

// Task props with only id required
type UpdateTaskProps = {
  id: Task["id"];
} & Partial<Omit<Task, "id">>;

// TODO: Fix type
type AddTaskProps = {
  title: string;
  description: string;
  completed: boolean;
  dueDateTime: Date;
};

// Define the type for the context value
type TaskContextType = {
  tasks: Task[];
  addTask: (task: AddTaskProps) => void;
  updateTask: (task: UpdateTaskProps) => void;
  removeTask: (taskId: string) => void;
};

// Provide a default value for the context
const defaultValue: TaskContextType = {
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  removeTask: () => {},
};

const TaskContext = createContext<TaskContextType>(defaultValue);

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem(TASKS_LOCAL_STORAGE_ITEM_NAME);
    const parsedData = localData ? JSON.parse(localData) : null;
    const hasTasks = Array.isArray(parsedData) && parsedData.length > 0;
    setTasks(hasTasks ? parsedData : initialTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(TASKS_LOCAL_STORAGE_ITEM_NAME, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: AddTaskProps) => {
    const taskId = generateRandomId();

    setTasks([...tasks, { ...newTask, id: taskId }]);
  };

  const updateTask = (updatedTask: UpdateTaskProps) =>
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );

  const removeTask = (taskId: string) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
