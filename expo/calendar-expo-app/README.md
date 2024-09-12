
# **Calendar App**

A **cross-platform calendar application** built using **React Native** and **Expo**, with support for **web**, **iOS**, and **Android** platforms. This app allows users to select and mark dates on a calendar and uses platform-specific date pickers for enhanced date selection. All date operations are managed in **UTC** using **moment.js** to ensure consistent behavior across different time zones.

---

## **Features**

- **Cross-Platform Support**: Runs on **web**, **iOS**, and **Android** platforms.
- **Calendar View**: Displays a monthly calendar with selectable dates.
- **Platform-Specific Date Pickers**:
  - **Web**: Uses `react-datepicker` for date selection.
  - **iOS/Android**: Uses `@react-native-community/datetimepicker`.
- **UTC Timezone Support**: All dates are managed in **UTC** using **moment.js** for consistency across time zones.
- **Highlight Selected Date**: The selected date is visually marked on the calendar.
- **Responsive Design**: Works seamlessly across different devices and screen sizes.

---

## **Project Structure**

```
/src
  ├── App.js               # Main application file with date picker and calendar logic
  ├── assets               # Project assets (e.g., images, fonts)
  ├── utils                # Utility functions for date conversion and formatting
  └── ...
```

---

## **Installation**

### Prerequisites

We'll need the following tools and steps to get started:

1. **Install Expo Go** on a physical device:
   - Download **Expo Go** from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) or [Apple App Store](https://apps.apple.com/us/app/expo-go/id982107779). This will allow you to run the Expo app on a real device by scanning the QR code generated when running the app.

2. **Prepare for development by installing the required tools** listed under **system requirements**:
   - Ensure that you have **Node.js** installed. You can download it from [Node.js official site](https://nodejs.org/).

3. **Familiarity with JavaScript and React**:
   - This tutorial assumes that you have a basic knowledge of **JavaScript** and **React**.
   - If you're new to **React**, consider going through the official [React tutorial](https://reactjs.org/tutorial/tutorial.html).

---

## **How to Run the Project**

1. Clone the repository:
   ```bash
   git clone https://github.com/wjy8023tvxq/MobileProjectPractice.git
   ```

2. Navigate into the project directory:
   ```bash
   cd MobileProjectPractice/expo/calendar-expo-app
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

---

## **Usage**

Once the project is running, you can interact with the calendar and date pickers:

- **Web**: Access the app through the web browser. The web version uses **`react-datepicker`** to allow users to select dates.
- **iOS/Android**: Use **Expo Go** or an emulator to preview the app on mobile devices. The native version uses **`@react-native-community/datetimepicker`** for date selection.

---

## **Date Handling**

### **1. Date Management in UTC**
- All date manipulations and storage are handled in **UTC** using **moment.js**. This ensures consistency across different time zones, reducing the chances of incorrect date display when users select dates.

### **2. Platform-Specific Date Pickers**
- **Web**: The web date picker operates in the user’s **local timezone**, but dates are immediately converted to **UTC** using **moment.js** before further processing.
- **iOS/Android**: The native date picker operates in **UTC** using the `timeZoneName="UTC"` prop to ensure consistency across platforms.

---

## **Known Issues**

### **1. Web Date Picker One-Day Shift**
There is currently an unresolved issue with the **web date picker** where a **one-day shift** can occur in certain time zones. This happens because the **web date picker** operates in the user’s local timezone, while the app processes dates in **UTC**.

- **Impact**: Users may see a mismatch between the date they select and the date displayed or processed.
- **Next Steps**: We are exploring potential solutions to handle this better, such as using alternative libraries or tweaking the `react-datepicker` component’s timezone behavior.

---

## **Contributing**

We welcome contributions to this project! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your branch to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on the main repository.

---

## **License**

This project is licensed under the MIT License.
