
# **Calculator App - React Native (Expo)**

## **Project Overview**

This is a **Calculator App** built using **React Native** and **Expo**. It is designed to simulate the functionality of a basic calculator, allowing users to perform standard arithmetic operations such as addition, subtraction, multiplication, and division. The app features custom input validation, operator precedence handling, and a clean user interface. The calculations are handled without relying on the `eval()` function, ensuring a secure and efficient solution.

## **Features**

- **Basic Arithmetic Operations**: Supports addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- **Custom Input Validation**: Prevents invalid inputs such as consecutive operators or multiple decimal points in a single operand.
- **Operator Precedence**: Properly handles operator precedence where multiplication and division are prioritized over addition and subtraction.
- **Decimal Point Handling**: Ensures that only one decimal point can be added per operand.
- **Backspace (`←`) and Clear (`C`) Buttons**: Allows users to delete the last character or clear the input and start a new calculation.
- **Result Reset**: Automatically clears the input and starts a new calculation if a number is pressed after a result is shown.

## **Dependencies**

This project uses the following dependencies:

- **expo** (`~51.0.28`): A framework and platform for universal React applications.
- **expo-status-bar** (`~1.12.1`): Manages the status bar on iOS and Android for Expo apps.
- **react** (`18.2.0`): Core React library for building user interfaces.
- **react-native** (`0.74.5`): Framework for building native mobile apps using React.
- **react-dom** (`18.2.0`): React library for working with the DOM in web environments.
- **react-native-web** (`~0.19.10`): Allows React Native components and APIs to work on web platforms.
- **@expo/metro-runtime** (`~3.2.3`): Metro bundler runtime integration for Expo.
- **mathjs** (`^13.1.1`): Library for complex mathematical calculations, used for accurate expression evaluation.

### **Dev Dependencies:**

- **@babel/core** (`^7.20.0`): Babel compiler core for transforming modern JavaScript to be compatible with older environments.

## **How to Run the Project**

1. Clone the repository:
   ```bash
   git clone https://github.com/wjy8023tvxq/MobileProjectPractice.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MobileProjectPractice/expo/calculator-expo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the Expo development server:
   ```bash
   npx expo start
   ```

5. Follow the prompts to run the app on a simulator, emulator, or physical device using the Expo Go app.

## **Project Structure**

```bash
calculator-expo-app/
├── assets/                   # Static assets like images, fonts, etc.
├── components/                # Reusable components
│   └── CalculatorButton.js    # Custom component for calculator buttons
├── node_modules/              # Dependencies installed via npm or yarn
├── .expo/                     # Expo-related project configuration files
├── .expo-shared/              # Shared Expo configurations
├── App.js                     # Main entry point of the React Native app
├── app.json                   # App configuration file (Expo-specific)
├── babel.config.js            # Babel configuration for the project
├── package.json               # Project metadata, scripts, and dependencies
├── package-lock.json          # Lockfile for consistent installs
└── README.md                  # Documentation for the project
```

### **Key Components**

1. **App.js**:
   - Contains the main logic for the calculator, handling user input, result display, and expression evaluation.
   - Manages the calculator's state with hooks (`useState`) to track the current input and result.

2. **components/CalculatorButton.js**:
   - A reusable button component for the calculator.
   - Dynamically renders buttons with different labels (`0-9`, operators) and handles button clicks.

3. **Inline Styles**:
   - Inline styles are used for the layout, making the design responsive and ensuring consistent button sizes across devices.

## **License**

This project is open-source and available under the [MIT License].

---

This README provides an overview of the project, its features, dependencies, structure, and instructions on how to set it up. If you have any further questions or suggestions for improvements, feel free to contribute or reach out!
