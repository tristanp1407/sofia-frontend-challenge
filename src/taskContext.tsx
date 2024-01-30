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

type AddTaskProps = {
  title: string;
  description?: string;
  dueDate?: string;
  dueTime?: string;
};

type TaskContextType = {
  tasks: Task[];
  getTasks: () => Task[];
  addTask: (task: AddTaskProps) => void;
  updateTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
};

const defaultValue: TaskContextType = {
  tasks: [],
  getTasks: () => [],
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
    // Set demo tasks if no tasks in local storage
    setTasks(getTasksFromLocalStorage() ?? initialTasks);
  }, []);

  const getTasksFromLocalStorage = (): Task[] => {
    const localData = localStorage.getItem(TASKS_LOCAL_STORAGE_ITEM_NAME);
    return localData && localData !== "undefined"
      ? JSON.parse(localData)
      : initialTasks;
  };

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem(TASKS_LOCAL_STORAGE_ITEM_NAME, JSON.stringify(tasks));
  };

  const getTasks = () => tasks;

  const addTask = (newTask: AddTaskProps) => {
    const taskId = generateRandomId();
    const updatedTasks = [
      ...tasks,
      { ...newTask, id: taskId, completed: false },
    ];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const updateTask = (updatedTask: Task) => {
    // Find the index of the task being updated
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);

    // Move last completed tasks to front
    if (taskIndex > -1) {
      const updatedTasks = [
        updatedTask,
        ...tasks.slice(0, taskIndex),
        ...tasks.slice(taskIndex + 1),
      ];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
    }
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, addTask, updateTask, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
