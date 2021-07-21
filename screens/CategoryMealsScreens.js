import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CategoryMealsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => navigation.navigate("MealDetail")}
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
