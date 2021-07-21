import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          navigation.navigate({ routeName: "CategoryMeals" });
        }}
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
