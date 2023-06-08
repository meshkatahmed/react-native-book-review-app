import { Button, TextInput, View, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View>
      <Button title="Switch to Login"/>
      <TextInput placeholder='Username or E-mail' style={styles.input}/>
      <TextInput placeholder='Password' style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 500,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
  },
});