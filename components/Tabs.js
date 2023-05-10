import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/Profile';
import ContactScreen from '../screens/ContactScreen';
import Porfolio from '../screens/Porfolio';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home'
                      : 'home-outline';
                  } else if (route.name === 'Contact') {
                    iconName = focused ? 'mail' : 'mail-outline';
                  }else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                  }else if (route.name === 'Porfolio') {
                    iconName = focused ? 'albums' : 'albums-outline';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
            >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Porfolio" component={Porfolio}/>
            <Tab.Screen name="Contact" component={ContactScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs
