import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ContactScreen = () => {




  return (

    <View style={ styles.container }>
      
      <Text style={ styles.subTitle }>Get In Touch</Text>

      <View>

        <View style={ styles.card }>
          <Text>Email</Text>
          <Text style={ styles.text } 
            onPress={() => Linking.openURL('mailto:landrade1313@gmail.com').catch(err => console.error('An error occurred', err))}>landrade1313@gmail.com</Text>
        </View>

        <View style={ styles.card }>
          <Text>Phone</Text>
          <Text style={ styles.text }>+64 27 594 0891</Text>
        </View>

        <View style={ styles.card }>
          <Text>Whatsapp</Text>
          <Text style={ styles.text }> +64 27 594 0891</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#eef2f3' 
  },

  background:{
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardContainer:{
    flex: 2,
  },

  card:{
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "white",
    width: 280,
    height: 100,
    margin: 4,
    borderRadius: 5,
    borderColor: '#4d4dff',
    borderWidth: 1,
  },

  text:{
    textAlign: 'center',
    fontSize: 22
  },

  subTitle:{
    fontWeight: 'bold',
    color: '#4d4dff',
    fontSize: 28
  },


})  

export default ContactScreen
