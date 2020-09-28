import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { HomeScreen } from "app/screens/HomeScreen";
import { AddDeskScreen } from "app/screens/AddDeskScreen";
import { DeskScreen } from "app/screens/DeskScreen";

const RootStack = createStackNavigator();

export function NavigationRoot() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <MainStack.Screen
          name="AddDesk"
          component={AddDeskScreen}
          options={{
            ...TransitionPresets.ScaleFromCenterAndroid,
            headerShown: true,
            title: "Add my desk",
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen
        name="Desk"
        component={DeskScreen}
        options={TransitionPresets.ScaleFromCenterAndroid}
      />
    </MainStack.Navigator>
  );
}
