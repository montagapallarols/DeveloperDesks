import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { darken, mix } from "polished";

import { theme, shadow } from "app/ui";

type Props = {
  onRequestOpenDrawer: () => void;
};

export function DrawerMenuButton({ onRequestOpenDrawer }: Props) {
  return (
    <Pressable onPress={onRequestOpenDrawer}>
      <View style={styles.container}>
        <View style={[styles.line, { top: 10 - 1 }]} />
        <View style={[styles.line, { top: 22 - 1 - 2 }]} />
        <View style={[styles.line, { top: 44 - 1 - 10 - 4 }]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: -2,
    width: 44,
    height: 44,
    backgroundColor: theme.colors.yellowishBrown,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: mix(0.5, theme.colors.yellowishBrown, theme.colors.brown1),
    position: "relative",
    ...shadow(2),
  },
  line: {
    position: "absolute",
    left: 8,
    right: 8,
    height: 4,
    backgroundColor: theme.colors.brown2,
  },
});
