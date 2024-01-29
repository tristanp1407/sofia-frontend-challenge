import { TASKS_LOCAL_STORAGE_ITEM_NAME } from "@/constants";
import { Task } from "@/types";
import { useEffect, useState } from "react";

// Fetched and parses tasks from local storage
export const useGetTasks = (): Task[] => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks: string | null = localStorage.getItem(
      TASKS_LOCAL_STORAGE_ITEM_NAME
    );

    console.log(storedTasks);

    try {
      const tasks = storedTasks ? JSON.parse(storedTasks) : [];
      setTasks(tasks);
    } catch (e) {
      console.error("Failed to parse the tasks list", e);
    }
  }, []);

  return tasks;
};
