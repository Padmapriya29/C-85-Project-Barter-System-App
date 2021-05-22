import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import BookDonateScreen from "../Screens/bookDonateScreen";
import ExchangerDetailsScreen from "../Screens/exchangerDetailsScreen";
import ExchangeScreen from "../Screens/exchangeScreen";
import MyExchangesScreen from "../Screens/myExchangesScreen";

export const AppStackNavigator = createStackNavigator(
  {
    ExchangeScreen: {
      screen: ExchangeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    RecieverDetails: {
      screen: ExchangerDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Exchange List",
  }
);
