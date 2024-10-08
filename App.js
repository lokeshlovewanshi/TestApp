import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useEffect, useCallback } from 'react';
import axios from 'axios'; // Import axios

export default function App() {
  const fetchData = useCallback(() => {
    axios.get("https://freetestapi.com/api/v1/authors")
      .then((res) => {
        // Extract the response data
        const data = res.data;
        
        // Map through the data and create a readable string to display
        const result = data.map((item) => `ID: ${item.id}, Name: ${item.name}`).join('\n');

        // Display the result using Alert
        Alert.alert("Fetched Data", result);
        console.log(result);
      })
      .catch((err) => {
        Alert.alert("Error", JSON.stringify(err));
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
