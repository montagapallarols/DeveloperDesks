import { Platform, ViewStyle } from "react-native";

// elevation in [1 ... 24]
export function shadow(elevation: number): ViewStyle {
  if (Platform.OS === "android") {
    return { elevation };
  } else {
    return {
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        width: 0,
        height: 0.6 * elevation,
      },
    };
  }
}
