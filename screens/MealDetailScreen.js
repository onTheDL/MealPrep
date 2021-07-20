import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function MealDetailScreen() {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
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