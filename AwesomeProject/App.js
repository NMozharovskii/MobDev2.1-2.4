import React from 'react';
import { Linking, StyleSheet, TouchableWithoutFeedback, Text, View, Image, Button } from 'react-native';

class App extends React.Component
{
  open_1()
  {
    let url='http://vk.com';
    Linking.openURL(url);
  }
  open_2()
  {
    let url='http://brightmagazine.ru/perfume/';
    Linking.openURL(url);
  }
  render()
  {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>
            Hello World
          </Text>
        </View>

        
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d7db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20
  },
  block: {
    backgroundColor: '#fff',
    width: 400,
    paddingLeft: 20,
    paddingTop: 20,
  },
  news: {
    color: 'blue',
    paddingBottom: 20,
  },
  pic: {
    height: 200,
    width: 300,
  },
  topic: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    paddingBottom: 20,
    paddingTop: 20
  },
  btn1: {
    paddingBottom: 20,
    width: 200,
  },
});