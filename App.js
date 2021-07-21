import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator"

// import CategoriesScreen from "./screens/CategoriesScreen";
// import CategoryMealsScreen from "./screens/CategoryMealScreens";
// import FavouritesScreen from "./screens/FavouritesScreen";
// import FiltersScreen from "./screens/FiltersScreen";
// import MealDetailScreen from "./screens/MealDetailScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
