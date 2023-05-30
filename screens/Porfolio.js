import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Porfolio = () => {
  return (
    <View style={ styles.container }>

       <View style={ styles.textContainer }>
        <Text style={ styles.subTitle }>Some of my Work</Text>
      </View>

      <View style={ styles.cardContainer }>

        <View style={ styles.card }>
          <Text style={ styles.text }>React App</Text>
         
            <Image source={require('../assets/react.png')} style={ styles.image } />
          
        </View>

        <View style={ styles.card }>
          <Text style={ styles.text }>Materialize App</Text>
            <Image source={require('../assets/frontMat.png')} style={ styles.image } />
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

  cardContainer:{
    flex: 2,
    marginTop: 25,
  },

  card:{
    justifyContent: 'center',
    alignItems:'center',
    width: 280,
    height: 180,
    margin: 20,
  },

  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  text:{
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 2,
    color: '#4d4dff',
    fontWeight: 'bold'
  },

  subTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4d4dff'
  },

  })  

export default Porfolio
