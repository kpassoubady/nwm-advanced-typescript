# Error Handling in a Web Server

This project demonstrates error handling in an Express web server using TypeScript.

## Prerequisites

- Node.js
- TypeScript
- ts-node
- nodemon (optional, for development)

## Installation

1. Install the necessary packages globally:

```bash
npm install -g ts-node
npm install -g nodemon
```

## Running the Server
### Using ts-node
You can run the server using ts-node directly:

```bash
ts-node ./2-ErrorHandlingWebServer.ts
```
Using nodemon
```bash
nodemon ./2-ErrorHandlingWebServer.ts
```

### Using npm script
In your package.json file, you can add a script to serve the application:
```json
{
  "scripts": {
    "serve": "ts-node ./2-ErrorHandlingWebServer.ts"
  }
}

```
Then, run the server using:

```bash
npm run serve
```

### API Endpoints
#### GET /books
Fetches a list of books.

#### GET /
Returns a greeting message.

## Error Handling
The server includes basic error handling. In case of an error, it will log the error message and return a 500 Internal Server Error response.

## Running the Server on Port 3000
The server runs on port 3000. You can open http://localhost:3000/ in your browser to see the greeting message.

## Killing a Running Server
### On macOS
Open Terminal.
Find the process ID (PID) using:

```bash
sudo lsof -i :3000

```
Kill the process using:

```bash
kill -9 <PID>

```

### On Windows
Open Command Prompt.
Find the process ID (PID) using:

```bat
netstat -ano | findstr :3000

```
Kill the process using:

```bat
taskkill /PID <PID> /F
```
