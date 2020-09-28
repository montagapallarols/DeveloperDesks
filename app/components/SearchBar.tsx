import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { shadow, theme } from "app/ui";
import { mix } from "polished";

export function SearchBar() {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("");
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
