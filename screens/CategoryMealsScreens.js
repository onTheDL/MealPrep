import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

function displayedMeals(navigation) {
  const catId = navigation.getParam("categoryId");

  return MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
}

export default function CategoryMealsScreen({ navigation }) {
  const handleSelect = () => {};
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        image={itemData.item.imageUrl}
        onSelect={handleSelect}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals(navigation)}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{
          width: "100%",
        }}
      />

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
