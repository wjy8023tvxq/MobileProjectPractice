import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function App() {
  const [serverTime, setServerTime] = useState(null);

  const formatServerTime = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC',
      timeZoneName: 'short',
    };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  const fetchServerTime = async () => {
    try {
      const response = await fetch('http://10.0.0.189:3000/time'); // My local IP address
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      const formattedTime = formatServerTime(data.time);
      setServerTime(formattedTime);
    } catch (error) {
      console.error('Error fetching server time:', error);
      setServerTime('Error fetching time');
    }
  };
  

  useEffect(() => {
    // Fetch server time when the component mounts
    fetchServerTime();

    // Set interval to refresh the time every 5 seconds
    const intervalId = setInterval(() => {
      fetchServerTime();
    }, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.timeLabel}>Server Time:</Text>
      <Text style={styles.timeValue}>
        {serverTime ? serverTime : 'Loading...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  timeLabel: {
    fontSize: 24,
    marginBottom: 10,
  },
  timeValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

