# Project Description: Task List Manager

Create a simple task list manager in TypeScript that allows users to add and complete tasks asynchronously. The tasks will be represented as Promises. You should implement the following functionalities:

* Add a new task to the task list.
* Mark a task as completed.
* Display the list of tasks.
* Handle errors gracefully.

## Instructions:

Start with the provided TypeScript code in the main.ts and taskManager.ts files. The Task and TaskStatus types are already provided in the types.ts file.

Implement the TaskManager class in the taskManager.ts file. The class should have the following methods:

+ addTask(description: string): Promise<void>: Adds a new task to the task list.
+ completeTask(taskId: number): Promise<void>: Marks a task as completed.
+ displayTasks(): Promise<void>: Displays the list of tasks.

In the main.ts file, create an instance of the TaskManager class and use it to interact with the task list. Implement the necessary user input and handling of Promises using .then() and .catch().

