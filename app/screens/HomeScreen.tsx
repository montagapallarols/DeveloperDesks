import React, { useRef, useCallback } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DrawerLayout from "react-native-gesture-handler/DrawerLayout";

import { theme } from "app/ui";

import { SearchBar } from "app/components/SearchBar";
import { DrawerMenuButton } from "app/components/DrawerMenuButton";
import { NavDrawerContents } from "app/components/NavDrawerContents";
import { AddDeskFabButton } from "app/components/AddDeskFabButton";
import { DesksList } from "app/components/DesksList";

export function HomeScreen() {
  const insets = useSafeAreaInsets();

  const drawer = useRef<DrawerLayout>(null);
  const openDrawer = useCallback(() => {
    drawer.current?.openDrawer();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <DrawerLayout
        ref={drawer}
        drawerWidth={Dimensions.get("window").width - 100}
        drawerPosition="left"
        drawerType="slide"
        renderNavigationView={() => <NavDrawerContents />}
      >
        <View
          style={{
            position: "relative",
            flex: 1,
            paddingTop: insets.top + 16,
          }}
        >
          <View style={styles.toolbar}>
            <DrawerMenuButton onRequestOpenDrawer={openDrawer} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <SearchBar />
            </View>
          </View>
          <DesksList />
          <View style={styles.placeFabButton}>
            <AddDeskFabButton />
          </View>
        </View>
      </DrawerLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    marginHorizontal: 16,
    flexDirection: "row",
    marginBottom: 16,
  },
  placeFabButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
