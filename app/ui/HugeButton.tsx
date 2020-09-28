import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import { Icon } from "./icons";
import { shadow } from "./shadow";
import { theme } from "./theme";

type Props = {
  text: string;
  Icon: Icon;
  onPress?: () => void;
};

export function HugeButton({ text, Icon, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.container_pressed,
      ]}
      onPress={onPress}
    >
      <Icon color={theme.colors.orange} />
      <Text style={styles.label}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.muted,
    ...shadow(5),
    padding: 16,
  },
  container_pressed: {
    backgroundColor: "#eee",
  },
  label: {
    marginTop: 4,
    fontWeight: "bold",
  },
});
