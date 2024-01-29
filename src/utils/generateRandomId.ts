export const generateRandomId = (): string =>
  "task-" + Date.now() + "-" + Math.floor(Math.random() * 10000);
