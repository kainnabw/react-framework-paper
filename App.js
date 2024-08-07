import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo</Text>
      <TextInput
        label="Email"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="senha"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" style={styles.button}>
        clique aqui
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});

export default MyComponent;
