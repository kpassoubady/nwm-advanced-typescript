import { Task, TaskStatus } from './types';

export class TaskManager {
  private tasks: Task[] = [];

  async addTask(description: string): Promise<void> {
    if (!description) {
      throw new Error('Task description is required.');
    }

    const newTask: Task = {
      id: this.tasks.length + 1,
      description,
      status: TaskStatus.Incomplete,
    };

    this.tasks.push(newTask);
  }

  async completeTask(taskId: number): Promise<void> {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      throw new Error('Task not found.');
    }

    if (this.tasks[taskIndex].status === TaskStatus.Complete) {
      throw new Error('Task is already marked as completed.');
    }

    this.tasks[taskIndex].status = TaskStatus.Complete;
  }

  async displayTasks(): Promise<void> {
    if (this.tasks.length === 0) {
      console.log('No tasks found.');
    } else {
      console.log('Task List:');
      this.tasks.forEach((task) => {
        const status = task.status === TaskStatus.Complete ? ' (Completed)' : '';
        console.log(`Task ${task.id}: ${task.description}${status}`);
      });
    }
  }
}
