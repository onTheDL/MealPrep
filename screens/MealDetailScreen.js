import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function MealDetailScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Button
        title="Go to Categories"
        onPress={() => navigation.popToTop()}
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