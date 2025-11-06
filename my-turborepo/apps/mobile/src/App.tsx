import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

function App() {
  const [message, setMessage] = React.useState('App loaded successfully!');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Civic Voice Mobile</Text>
        <Text style={styles.subtitle}>{message}</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Report an Issue"
            onPress={() => setMessage('Report feature - Coming soon!')}
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Ask a Question"
            onPress={() => setMessage('AI Agent - Coming soon!')}
            color="#6200EE"
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Check Status"
            onPress={() => setMessage('Status check - Coming soon!')}
            color="#03DAC6"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default App;
