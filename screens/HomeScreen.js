import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    
    <View style={styles.container}>
      <LinearGradient
        colors={["#8e9eab", "#eef2f3"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.background}
      >
      <Text style={ styles.font }>Luis Andrade</Text>
      <Text style={ styles.font }>Portfolio</Text>
      </LinearGradient>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  background:{
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  font:{
    color: '#4d4dff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})  

export default HomeScreen
