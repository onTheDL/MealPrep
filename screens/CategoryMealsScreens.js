import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../components/MealList"


export default function CategoryMealsScreen({ navigation }) {
  const catId = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  return <MealList listData={displayedMeals} navigation={navigation} />
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

