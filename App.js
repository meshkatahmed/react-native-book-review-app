import { StyleSheet, View } from 'react-native';
import Login from './src/Components/Login/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/> 
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
