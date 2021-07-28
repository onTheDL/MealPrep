import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { MEALS } from "../data/dummy-data" 
// import Meal from '../models/meal'

export default function MealDetailScreen({ navigation }) {
  const mealId = navigation.getParam("mealId")

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go to Categories"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId")
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  return {
    headerTitle: selectedMeal.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});