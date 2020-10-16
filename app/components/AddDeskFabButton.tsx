import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { transparentize } from "polished";
import { useAppState } from "../lib/appstate";
import { shadow, theme, PlusIcon } from "app/ui";

type Props = {
  openDrawer: () => void;
};

export function AddDeskFabButton(props: Props) {
  const navigation = useNavigation();
  const { auth } = useAppState();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        auth ? navigation.navigate("AddDesk") : props.openDrawer();
      }}
    >
      <PlusIcon width={36} height={36} color='white' />
      <View style={styles.border}></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
    backgroundColor: theme.colors.orange,
    ...shadow(8),
  },
  border: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 99,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: transparentize(0.9, "black"),
  },
});
