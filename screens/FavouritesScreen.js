import React from "react";
import { View, Text } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

function FavouritesScreen({ navigation }) {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return <MealList listData={favMeals} navigation={navigation} />;
}

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites",
};

export default FavouritesScreen;
