// app.ts (Main application module)
import { login } from "./auth";
import { fetchData } from "./data";
import { renderUI } from "./ui";

login("user@example.com", "password");
fetchData("/api/data").then((data) => renderUI(data));
// Run this code using the following command:
