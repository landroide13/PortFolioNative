import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.textContainer }>
        <Text style={ styles.text }>Following six years of in the chemical industry, working from entry to Analyst level, I was motivated to pursue a new challenge in a field I am passionate about – software development. In 2016 I began two years of re-training, in Ireland and Vietnam, with a focus on 'React' and ‘Ruby on Rails’. Having completed this training, I am now seeking an opportunity that can utilize my developer skillset and broad experience base.</Text>
      </View>

      <View style={ styles.cardContainer }>

        <View style={ styles.card }>
          <Text style={ styles.text }>Operations Analyst</Text>
          <Text style={ styles.subTitle }>“SUN SA”</Text>
        </View>

        <View style={ styles.card }>
          <Text style={ styles.text }>Finance Consultan</Text>
          <Text style={ styles.subTitle }>“COMEX SA”</Text>
        </View>

        <View style={ styles.card }>
          <Text style={ styles.text }>Supply Analyst</Text>
          <Text style={ styles.subTitle }>”Petrobras”</Text>
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
    backgroundColor: '#f2f2f2' 
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

    shadowColor: '#4d4dff',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  textContainer:{
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
    padding: 15
  },

  text:{
    textAlign: 'center',
    fontSize: 18
  },

  subTitle:{
    fontWeight: 'bold'
  },

})  

export default Profile
