import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoryMealsScreen({ navigation }) {
  const catId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => navigation.navigate("MealDetail")}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()} // can also use .pop() to go back only when using StackNavigator
      />
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
