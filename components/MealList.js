import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {mealId: itemData.item.id}
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
