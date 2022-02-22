import { StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealNavigator from "./navigation/MealNavigator.js";
import mealsReducer from "./store/reducers/meals.js";
import { NavigationContainer } from "@react-navigation/native";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
    "caesar-dressing": require("./assets/fonts/CaesarDressing-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontloaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontloaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealNavigator />
      </NavigationContainer>
    </Provider>
  );
}
