import { TaskManager } from './taskManager';
import * as readline from 'readline';
declare module 'readline';

const taskManager = new TaskManager();

// Create a readline interface for reading user input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to read user input from the console
function readInput(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

// Main function to interact with the Task Manager
async function main() {
  while (true) {
    console.log('Task List Manager');
    console.log('1. Add Task');
    console.log('2. Complete Task');
    console.log('3. Display Tasks');
    console.log('4. Quit');

    const choice = await readInput('Enter your choice: ');

    switch (choice) {
      case '1':
        const taskDescription = await readInput('Enter task description: ');
        try {
          await taskManager.addTask(taskDescription);
          console.log('Task added successfully.');
        } catch (error) {
          console.error(error);
        }
        break;

      case '2':
        const taskId = await readInput('Enter task ID to mark as completed: ');
        try {
          await taskManager.completeTask(Number(taskId));
          console.log('Task marked as completed.');
        } catch (error) {
          console.error(error);
        }
        break;

      case '3':
        try {
          await taskManager.displayTasks();
        } catch (error) {
          console.error(error);
        }
        break;

      case '4':
        console.log('Goodbye!');
        rl.close(); // Close the readline interface
        return;

      default:
        console.log('Invalid choice. Please try again.');
    }
  }
}

main();