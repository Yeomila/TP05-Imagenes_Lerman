import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card
 from './card';
export default function App() {
  return (
    <View style={styles.container}>

      <Image style={{ width: 350, height: 150, margin: 15 }}
          source={require("./imgs/central_perk_logo.jpeg")}/>
          
      <Text>Try some of our most popular flavors!</Text>

      <Card/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

