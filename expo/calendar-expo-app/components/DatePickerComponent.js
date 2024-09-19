import React, { useState } from 'react';
import { View, Pressable, Text, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';

// Conditionally load react-datepicker for web
let WebDatePicker;
if (Platform.OS === "web") {
  WebDatePicker = require("react-datepicker").default;
  require("react-datepicker/dist/react-datepicker.css");
}

const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  const [show, setShow] = useState(false);

  const showDatepicker = () => {
    setShow(true);
  };

  const handleNativeDateChange = (event, date) => {
    setShow(false);
    
    if (event.type === 'set' && date) {
      requestAnimationFrame(() => {
        const correctedDate = moment(date).add(date.getTimezoneOffset(), 'minutes');
        onDateChange(correctedDate.toDate());
      });
    }
  };

  const handleWebDateChange = (date) => {
    if (date) {
      const utcDate = moment(date).subtract(date.getTimezoneOffset(), 'minutes');
      onDateChange(utcDate.toDate());
    }
  };

  if (Platform.OS === "web") {
    return (
      <div style={styles.webDatePickerContainer}>
        <WebDatePicker
          selected={selectedDate ? moment.utc(selectedDate).toDate() : null}
          onChange={handleWebDateChange}
          dateFormat="MM/dd/yyyy"
          className="date-picker"
        />
      </div>
    );
  }

  return (
    <View>
      <Pressable
          style={styles.pressableButton}
          onPress={showDatepicker}
        >
          <Text style={styles.buttonText}>Pick Date</Text>
        </Pressable>
      {show && (
        <DateTimePicker
          value={selectedDate ? moment.utc(selectedDate).toDate() : new Date()}
          mode="date"
          display="default"
          timeZoneName="UTC"
          onChange={handleNativeDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  webDatePickerContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
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
});

export default DatePickerComponent;