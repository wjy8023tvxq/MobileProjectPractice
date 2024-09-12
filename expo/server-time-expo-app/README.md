
# Server Time Display Expo App

This React Native (Expo) application allows users to select a time zone and view the current server time in that time zone. The app interacts with a custom API (based on **node-mysql** or any user-provided API) to fetch the current time, and it formats the time to show the exact current time in the user's selected time zone. The key feature of this app is its ability to accurately reflect time zone differences using **GMT offsets**, ensuring that daylight saving time and time zone variations are handled correctly. The application dynamically updates the time when the user selects a different time zone.

**Note:** The API used to fetch the server time is from the `node-api-postman` directory located in the following repository: [MobileProjectPractice](https://github.com/wjy8023tvxq/MobileProjectPractice.git). Ensure the API server is running locally for the React application to work.

---

## Features

- **Select Time Zone**: Users can select from a list of time zones, and the app will display the current server time for the selected zone.
- **GMT Offset Display**: The time is displayed with the appropriate **GMT offset** (e.g., `GMT-4`), making it easy to understand the difference from UTC.
- **Daylight Saving Time Handling**: The app automatically accounts for Daylight Saving Time (DST) when displaying the time.
- **Automatic Updates**: The server time updates dynamically when a new time zone is selected.
- **Error Handling**: Handles API errors gracefully by falling back to UTC time if necessary.

---

### **How to Replace the API Endpoint**:

1. Open the `App.js` file in your project.
2. Find the following line in the `fetchServerTime` function:

   ```javascript
   const response = await fetch('http://10.0.0.189:3000/time'); // Local IP address
   ```

3. Replace `'http://10.0.0.189:3000/time'` with the URL of your own local or remote API.

   For example:

   ```javascript
   const response = await fetch('http://localhost:3000/time'); // Example for local setup
   ```

4. Ensure that your API returns a response in the following format:

```json
{
  "time": "2024-09-02T12:34:56Z"
}
```

---

## Installation

### Prerequisites
- **Node.js** (latest version recommended)
- **npm** (comes with Node.js)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/wjy8023tvxq/MobileProjectPractice.git
   cd MobileProjectPractice/expo/server-time-expo-app
   ```

2. **Install Dependencies**:
   Install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Run the App**:
   Start the Expo development server:
   ```bash
   npx expo start
   ```

4. Follow the prompts to run the app on a simulator, emulator, or physical device using the **Expo Go** app.

---

## Dependencies

- **React Native**: Core framework for building the app.
- **date-fns** and **date-fns-tz**: Used for handling date and time formatting with time zone awareness.

Install these dependencies with:

```bash
npm install date-fns date-fns-tz
```

---

## Project Structure

- **App.js**: Main component responsible for rendering the time and user interface.
- **State Management**: Uses `useState` and `useEffect` hooks to manage the state of the selected time zone and server time.
- **API Interaction**: Makes HTTP requests to the custom API to fetch the server time for the selected time zone.
- **Time Formatting**: Uses `formatInTimeZone` from **date-fns-tz** to display the server time with the correct GMT offset.

---

## Usage

1. **Select Time Zone**: Use the dropdown to choose a time zone from the list.
2. **View Server Time**: Once a time zone is selected, the app fetches the current time from the custom API and displays it in the following format:
   ```
   Month Day, Year at HH:MM:SS AM/PM (GMT Offset)
   ```
   Example:
   ```
   September 9, 2024 at 03:21:41 AM (GMT-4)
   ```

---

## API

By default, the app calls a custom API based on the **node-mysql** repository ([https://github.com/wjy8023tvxq/node-mysql.git](https://github.com/wjy8023tvxq/node-mysql.git)). However, users can replace this with their own API.

Example API call:
```bash
https://your-api-url.com/api/time/current/zone?timeZone=America/New_York
```

---

## License

This project is licensed under the MIT License. Feel free to modify and distribute.
