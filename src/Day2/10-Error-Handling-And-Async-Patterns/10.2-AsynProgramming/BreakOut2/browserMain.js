var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TaskStatus = void 0;
    // Define the TaskStatus enum to represent the status of a task.
    var TaskStatus;
    (function (TaskStatus) {
        TaskStatus["Incomplete"] = "Incomplete";
        TaskStatus["Complete"] = "Complete";
    })(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
});
define("taskManager", ["require", "exports", "types"], function (require, exports, types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TaskManager = void 0;
    var TaskManager = /** @class */ (function () {
        function TaskManager() {
            this.tasks = [];
        }
        TaskManager.prototype.addTask = function (description) {
            return __awaiter(this, void 0, void 0, function () {
                var newTask;
                return __generator(this, function (_a) {
                    if (!description) {
                        throw new Error('Task description is required.');
                    }
                    newTask = {
                        id: this.tasks.length + 1,
                        description: description,
                        status: types_1.TaskStatus.Incomplete,
                    };
                    this.tasks.push(newTask);
                    return [2 /*return*/];
                });
            });
        };
        TaskManager.prototype.completeTask = function (taskId) {
            return __awaiter(this, void 0, void 0, function () {
                var taskIndex;
                return __generator(this, function (_a) {
                    taskIndex = this.tasks.findIndex(function (task) { return task.id === taskId; });
                    if (taskIndex === -1) {
                        throw new Error('Task not found.');
                    }
                    if (this.tasks[taskIndex].status === types_1.TaskStatus.Complete) {
                        throw new Error('Task is already marked as completed.');
                    }
                    this.tasks[taskIndex].status = types_1.TaskStatus.Complete;
                    return [2 /*return*/];
                });
            });
        };
        TaskManager.prototype.displayTasks = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.tasks.length === 0) {
                        console.log('No tasks found.');
                    }
                    else {
                        console.log('Task List:');
                        this.tasks.forEach(function (task) {
                            var status = task.status === types_1.TaskStatus.Complete ? ' (Completed)' : '';
                            console.log("Task ".concat(task.id, ": ").concat(task.description).concat(status));
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        return TaskManager;
    }());
    exports.TaskManager = TaskManager;
});
define("browserMain", ["require", "exports", "taskManager"], function (require, exports, taskManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var taskManager = new taskManager_1.TaskManager();
    // Helper function to read user input from the console
    function readInput(prompt) {
        return new Promise(function (resolve) {
            var input = prompt;
            setTimeout(function () {
                resolve(input);
            }, 100);
        });
    }
    // Main function to interact with the Task Manager
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var choice, _a, taskDescription, error_1, taskId, error_2, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 21];
                        console.log('Task List Manager');
                        console.log('1. Add Task');
                        console.log('2. Complete Task');
                        console.log('3. Display Tasks');
                        console.log('4. Quit');
                        return [4 /*yield*/, readInput('Enter your choice: ')];
                    case 1:
                        choice = _b.sent();
                        _a = choice;
                        switch (_a) {
                            case '1': return [3 /*break*/, 2];
                            case '2': return [3 /*break*/, 8];
                            case '3': return [3 /*break*/, 14];
                            case '4': return [3 /*break*/, 18];
                        }
                        return [3 /*break*/, 19];
                    case 2: return [4 /*yield*/, readInput('Enter task description: ')];
                    case 3:
                        taskDescription = _b.sent();
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, taskManager.addTask(taskDescription)];
                    case 5:
                        _b.sent();
                        console.log('Task added successfully.');
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 20];
                    case 8: return [4 /*yield*/, readInput('Enter task ID to mark as completed: ')];
                    case 9:
                        taskId = _b.sent();
                        _b.label = 10;
                    case 10:
                        _b.trys.push([10, 12, , 13]);
                        return [4 /*yield*/, taskManager.completeTask(Number(taskId))];
                    case 11:
                        _b.sent();
                        console.log('Task marked as completed.');
                        return [3 /*break*/, 13];
                    case 12:
                        error_2 = _b.sent();
                        console.error(error_2);
                        return [3 /*break*/, 13];
                    case 13: return [3 /*break*/, 20];
                    case 14:
                        _b.trys.push([14, 16, , 17]);
                        return [4 /*yield*/, taskManager.displayTasks()];
                    case 15:
                        _b.sent();
                        return [3 /*break*/, 17];
                    case 16:
                        error_3 = _b.sent();
                        console.error(error_3);
                        return [3 /*break*/, 17];
                    case 17: return [3 /*break*/, 20];
                    case 18:
                        console.log('Goodbye!');
                        return [2 /*return*/];
                    case 19:
                        console.log('Invalid choice. Please try again.');
                        _b.label = 20;
                    case 20: return [3 /*break*/, 0];
                    case 21: return [2 /*return*/];
                }
            });
        });
    }
    main();
});
