import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { transparentize } from "polished";

type Props = {
  text: string;
  selected?: boolean;
  onPress?: () => void;
};

export function Pill({ text, selected = false, onPress }: Props) {
  return (
    <Pressable
      style={[styles.container, selected && styles.container_selected]}
      onPress={onPress}
    >
      <Text style={[styles.label, selected && styles.label_selected]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 99,
    borderWidth: 1.5,
    borderColor: transparentize(0.75, "black"),
    paddingTop: 4,
    paddingBottom: 6,
    paddingHorizontal: 8,
  },
  container_selected: {
    borderColor: "black",
  },
  label: {
    fontSize: 13,
    lineHeight: 1.35 * 13,
    fontWeight: "bold",
    color: transparentize(0.5, "black"),
  },
  label_selected: {
    color: "black",
  },
});
