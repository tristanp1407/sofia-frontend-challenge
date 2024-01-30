import { Task } from "@/types";

export const TASKS_LOCAL_STORAGE_ITEM_NAME = "todos";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Buy groceries 🛒",
    description: "Milk, eggs, bread 🥛🥚🍞",
    completed: false,
    dueDate: "2024-03-24",
    dueTime: "15:50",
  },
  {
    id: "2",
    title: "Learn Spanish 🇲🇽",
    description:
      "Practice speaking, listening, reading, and writing skills 🗣️👂📖✍️",
    completed: false,
    dueDate: "2024-03-24",
  },
  {
    id: "3",
    title: "Exercise 🏃‍♂️",
    description: "Go for a run 🏃‍♀️",
    completed: true,
  },
];
