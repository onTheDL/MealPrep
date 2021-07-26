import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

function selectedCategory(navigation) {
  const catId = navigation.getParam("categoryId");

  return CATEGORIES.find((cat) => cat.id === catId);
}

export default function CategoryMealsScreen({ navigation }) {
  const { title } = selectedCategory(navigation);

  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Text>{title}</Text>
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

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: selectedCategory(navigation).title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
