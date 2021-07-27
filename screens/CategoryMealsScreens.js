import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function displayedMeals(navigation) {
  const catId = navigation.getParam("categoryId");

  return MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
}

export default function CategoryMealsScreen({ navigation }) {
  const renderMealItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.screen}>

      <FlatList data={displayedMeals(navigation)} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} />

      {/* <Text>CategoryMealsScreen</Text>
      <Text>{title}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => navigation.navigate("MealDetail")}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()} // can also use .pop() to go back only when using StackNavigator
      /> */}


    </View>
  );
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: displayedMeals(navigation).title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
