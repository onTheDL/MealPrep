import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreens";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const navOptions = () => {
  return {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const defaultStackNavOptions = {
  headerTitle: "A Screen",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

// the second arg of createStackNavigator sets up the default nav options that applies to every screen
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    // initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// Favourites Screen
const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "Categories",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
