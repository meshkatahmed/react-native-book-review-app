import { StyleSheet, View, ImageBackground } from 'react-native';
import Login from './src/Components/Login/login';

const image = {uri: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Login/> 
      </ImageBackground>
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
  image : {
    flex: 1,
    justifyContent: 'center',
  },
});
