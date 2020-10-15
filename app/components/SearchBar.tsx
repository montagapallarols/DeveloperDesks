import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

import { shadow, theme } from "app/ui";
import { mix } from "polished";

export function SearchBar() {
  return (
    <Pressable
      onPress={() => {
        console.log("search not implemented :)");
      }}
    >
      <View style={styles.container} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
    borderColor: mix(0.5, theme.colors.yellowishBrown, theme.colors.brown1),
    borderRadius: 4,
    backgroundColor: mix(0.5, theme.colors.yellowishBrown, "white"),
    ...shadow(2),
  },
});
