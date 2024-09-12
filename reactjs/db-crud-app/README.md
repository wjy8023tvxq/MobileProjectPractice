
# Database CRUD React App

This is a simple React-based CRUD (Create, Read, Update, Delete) application that interacts with a backend API to manage user data.

## Features

- Add new users
- Edit existing user details
- Delete users
- List all users

## Technology Stack

- **Frontend**: React, Axios for making HTTP requests
- **Backend**: REST API (Node.js + MySQL) from [node-mysql API](https://github.com/JiayiWu-MobilePractice/node-mysql.git)
- **Database**: MySQL for storing user information
- **Other Tools**:
  - Testing: React Testing Library, Jest
  - Build: React Scripts

## Getting Started

### Prerequisites

- Node.js and npm installed
- Backend API available from [node-mysql]running on localhost

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wjy8023tvxq/MobileProjectPractice.git
   cd MobileProjectPractice/reactjs/db-crud-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

The application will run on `http://localhost:3000` by default.

### Backend API Setup

1. Clone and set up the backend API by following instructions from the [node-mysql]directory.
2. Ensure the API is running on `http://localhost:4000` (or configure a different port in the environment variables).

### Environment Variables

You can configure the backend API URL by creating a `.env` file at the root of the project:

```bash
REACT_APP_API_BASE_URL=http://localhost:4000
```

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner in interactive watch mode.

## Project Structure

- `src/App.js`: The main component that handles user data and CRUD operations using Axios to communicate with the backend.
- `src/components/DataForm.js`: A form component to add and update user information.
- `src/components/DataList.js`: A component that lists all users and allows editing or deleting entries.
