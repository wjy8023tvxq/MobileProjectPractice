
# Hello World App

A simple "Hello World" app built with Expo and React Native. This project serves as an introduction to mobile development using React Native and Expo, allowing beginners to get familiar with the development workflow.

## Overview

This project demonstrates the basic setup of a React Native mobile application using Expo. The app simply displays a "Hello World" message in the center of the screen. It's a great starting point for developers looking to learn about React Native, Expo, and mobile app development.

## Features

- **Cross-Platform**: Works on both iOS and Android devices.
- **Simple and Clean UI**: Displays a "Hello World" message in the center of the screen.
- **Easy to Customize**: Built using React Native's `StyleSheet`, making customization easy.
- **Expo Managed Workflow**: Expo simplifies setup, testing, and deployment of the app.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14.x or later)

## Getting Started

Follow these instructions to get a copy of the project running on your local machine for development and testing purposes.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wjy8023tvxq/MobileProjectPractice.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd MobileProjectPractice/expo/hello-world-app
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Project Structure

Here's an overview of the project's folder structure:

```
HelloWorldApp/
│
├── App.js              # Main entry point of the app
├── node_modules/       # Auto-generated folder containing project dependencies
├── assets/             # Directory for images or fonts (optional)
├── .gitignore          # Files to ignore in version control
├── app.json            # Expo configuration file
├── babel.config.js     # Babel configuration for React Native
├── package.json        # Contains project dependencies and scripts
└── package-lock.json   # Auto-generated file to lock dependency versions
```

- **App.js**: The main entry point of the app that renders the UI.
- **assets/**: A directory for storing static assets (images, fonts, etc.). Not used in this simple project but included as a standard structure for future expansion.
- **app.json**: Configures your app’s metadata for Expo, like name, version, icon, and more.

## Running the App

### Steps

1. **Start the development server**:
   ```bash
   npx expo start
   ```

2. **Run the app on your device or simulator**:
   - **On a Physical Device**: Download the Expo Go app from the App Store (iOS) or Google Play (Android). Scan the QR code in the Expo Developer Tools (which will open in your browser).
   - **On an Emulator/Simulator**: You can use an Android emulator or iOS simulator. Expo Developer Tools will provide buttons to open the app in the available emulators.

### Testing

Expo allows you to test your app live as you make changes. Any changes to your code will automatically reload the app on your connected device or emulator.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
