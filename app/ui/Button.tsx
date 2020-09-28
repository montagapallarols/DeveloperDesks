import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import { darken } from "polished";

import { theme } from "./theme";
import { shadow } from "./shadow";

type Props = {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Button({ text, disabled, style, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.container_pressed,
        disabled && styles.container_disabled,
        style,
      ]}
      onPress={disabled ? undefined : onPress}
    >
      <Text style={styles.label}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 12,
    backgroundColor: theme.colors.orange,
    borderRadius: 4,
    ...shadow(2),
  },
  container_pressed: {
    backgroundColor: darken(0.1, theme.colors.orange),
  },
  container_disabled: {
    ...shadow(0),
    backgroundColor: theme.colors.muted,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    height: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
