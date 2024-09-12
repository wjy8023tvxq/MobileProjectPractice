
# Fullstack File Upload App

## Description
This is a full-stack application that enables users to upload files. The project is built using a client-server architecture where the front-end is served by a React application and the back-end is powered by a Node.js/Express server.

## Features
- Upload files through the front-end UI
- Handle file uploads on the server-side using Node.js
- Cross-Origin Resource Sharing (CORS) enabled for secure communication between client and server
- Concurrent development mode for simultaneous front-end and back-end execution

## Technologies Used
- **Client**: React (JavaScript)
- **Server**: Node.js, Express
- **Other Dependencies**:
  - `cors`: Used for enabling CORS
  - `concurrently`: For running client and server simultaneously during development

## Getting Started

### Prerequisites
- Node.js installed on your local machine
- NPM (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wjy8023tvxq/MobileProjectPractice.git
   cd MobileProjectPractice/reactjs/fullstack-file-upload-app
   ```

2. Install dependencies for both client and server:
   ```bash
   npm install
   ```

3. Navigate to the `client` and `server` directories and install their dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

### Running the Application

To run both the server and client concurrently in development mode:
```bash
npm run dev
```

- The server will start at `http://localhost:5000`
- The client will start at `http://localhost:3000`

### Folder Structure

- **client/**: Contains the React front-end application
- **server/**: Contains the Node.js back-end server application
- **node_modules/**: Contains project dependencies
- **package.json**: Project configuration and scripts

### Scripts

- `npm run client`: Runs the React client
- `npm run server`: Runs the Node.js server
- `npm run dev`: Runs both the client and server concurrently

## License
This project is licensed under the MIT License.
