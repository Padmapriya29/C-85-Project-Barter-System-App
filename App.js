import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';


import WelcomeScreen from './Screens/welcomeScreen';
import { AppDrawerNavigator } from './Components/appDrawerNavigator';
import { AppTabNavigator } from './Components/appTabNavigator';


export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);


// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react";
// import WelcomeScreen from "./Screens/welcomeScreen";
// import { AppDrawerNavigator } from "./Components/appDrawerNavigator";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";

// export default function App() {
//   return <AppContainer />;
// }

// const switchNavigator = createSwitchNavigator({
//   WelcomeScreen: { screen: WelcomeScreen },
//   Drawer: { screen: AppDrawerNavigator },
// });

// const AppContainer = createAppContainer(switchNavigator);

