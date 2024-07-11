// Define the TaskStatus enum to represent the status of a task.
export enum TaskStatus {
  Incomplete = 'Incomplete',
  Complete = 'Complete',
}

// Define the Task type to represent a task object.
export interface Task {
  id: number;
  description: string;
  status: TaskStatus;
}


