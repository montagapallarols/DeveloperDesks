import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useQuery } from "react-query";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DeskResult, fetchDesk } from "app/lib/api";
import { theme } from "app/ui";

export function DeskScreen() {
  const insets = useSafeAreaInsets();
  const { params = {} } = useRoute();

  const deskId = +(params as any).deskId;

  const { data: desk, status, error } = useQuery<DeskResult>({
    queryKey: ["desk", deskId],
    async queryFn(key: string, id: number) {
      return await fetchDesk(id);
    },
  });

  if (!desk) {
    return (
      <View style={styles.screen}>
        <View style={{ flex: 1 }} />
        <ActivityIndicator size="large" color={theme.colors.orange} />
        <View style={{ flex: 1.6 }} />
      </View>
    );
  }

  const title =
    desk.developer.name.slice(-1) === "s"
      ? `${desk.developer.name}' desk`
      : `${desk.developer.name}'s desk`;

  const { width } = Dimensions.get("window");
  const height = width * (2 / 3);

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 16 }]}>
      <Text style={styles.headerText}>{title}</Text>
      <Image
        source={{ uri: desk.uri }}
        style={{ width, height, marginHorizontal: -16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
  },
  headerText: {
    fontFamily: "RobotoSlab_800ExtraBold",
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 1.35 * 32,
    marginBottom: 16,
  },
});
