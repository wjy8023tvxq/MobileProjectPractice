import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment-timezone';

// Conditionally load react-datepicker for web
let DatePicker;
if (Platform.OS === "web") {
  DatePicker = require("react-datepicker").default;
  require("react-datepicker/dist/react-datepicker.css");
}

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return "";

    return moment.utc(dateString).format("MM/DD/YYYY, dddd"); // Format using moment in UTC
  };

  const formatDateString = (date) => {
    return moment.utc(date).format("YYYY-MM-DD"); // Force UTC format using moment
  };

  // Reusable function to handle date selection (both web and native)
  const handleDateSelection = (date) => {
    const utcDate = moment.utc(date); // Force UTC using moment
    const dateString = formatDateString(utcDate); // Format to YYYY-MM-DD
    setSelectedDate(dateString);
    setCurrentMonth(dateString.slice(0, 7)); // Update the current month (YYYY-MM)
  };
  
  const onDayPress = (day) => {
    const selectedDate = moment.utc(day.timestamp).toDate(); // Convert timestamp to UTC date using moment
    handleDateSelection(selectedDate);
  };

  // Handle date change for web and adjust for timezone shift
  const onWebDateChange = (date) => {
    if (date) {
      const utcDate = moment(date).subtract(date.getTimezoneOffset(), 'minutes');;
      handleDateSelection(utcDate);
    }
  };

  // Handle native DateTimePicker changes and ensure it closes after selection
  const handleNativeDateChange = (event, date) => {
    if (date) {
      const correctedDate = moment(date).add(date.getTimezoneOffset(), 'minutes'); // Adjust to UTC manually
      handleDateSelection(correctedDate);
    }
    setShowDatePicker(false); // Close the date picker after selecting a date
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectedDate}>
        Selected Date: {formatDate(selectedDate)}
      </Text>

      <Calendar
        key={currentMonth}
        onDayPress={onDayPress} // Handle day press
        current={currentMonth} // Set current month for calendar scroll
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "blue",
          },
        }}
        theme={{
          selectedDayBackgroundColor: "#00adf5",
          todayTextColor: "#00adf5",
          arrowColor: "#00adf5",
        }}
      />

      {/* Button to open date picker for native platforms */}
      {Platform.OS !== "web" && (
        <Pressable
          style={styles.pressableButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.buttonText}>Pick Date</Text>
        </Pressable>
      )}

      {/* Web DatePicker */}
      {Platform.OS === "web" ? (
        <div style={styles.webDatePickerContainer}>
          <DatePicker
            selected={selectedDate ? moment.utc(selectedDate).toDate() : null}
            onChange={(date) => onWebDateChange(date)}
            dateFormat="MM/dd/yyyy"
            className="date-picker"
          />
        </div>
      ) : (
        showDatePicker && (
          <DateTimePicker
            value={selectedDate ? moment.utc(selectedDate).toDate() : new Date()}
            mode="date"
            display="default"
            timeZoneName="UTC" // Ensuring the picker uses UTC
            onChange={handleNativeDateChange} // Handle native date change
          />
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  selectedDate: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 8,
  },
  pressableButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  webDatePickerContainer: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
});