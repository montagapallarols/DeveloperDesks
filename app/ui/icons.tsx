import React from "react";
import Svg, {
  Path,
  SvgProps,
  Circle,
  Mask,
  Rect,
  G,
  Defs,
} from "react-native-svg";

import { theme } from "./theme";

const defaultStyles = {
  width: 20,
  height: 20,
};

export type Icon = React.FC<SvgProps>;

export const PlusIcon: Icon = ({
  style,
  color = theme.colors.text,
  ...rest
}) => (
  <Svg
    viewBox="0 0 512 512"
    style={[defaultStyles, style]}
    color={color}
    {...rest}
  >
    <Path
      fill="currentColor"
      stroke="none"
      d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
    />
  </Svg>
);

export const CameraIcon: Icon = ({
  style,
  color = theme.colors.text,
  ...rest
}) => (
  <Svg
    viewBox="0 0 512 512"
    style={[defaultStyles, style]}
    color={color}
    {...rest}
  >
    <Circle fill="currentColor" stroke="none" cx="256" cy="280" r="63" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z"
    />
  </Svg>
);

export const GalleryIcon: Icon = ({
  style,
  color = theme.colors.text,
  ...rest
}) => (
  <Svg
    viewBox="0 0 512 512"
    style={[defaultStyles, style]}
    color={color}
    {...rest}
  >
    <Path
      fill="currentColor"
      stroke="none"
      d="M400 421.3V154.7c0-23.5-19.2-42.7-42.7-42.7H90.7C67.2 112 48 131.2 48 154.7v266.7c0 23.5 19.2 42.7 42.7 42.7h266.7c23.4-.1 42.6-19.3 42.6-42.8zM157.3 304l45.3 64 66.7-96 88 128H90.7l66.6-96z"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M421.3 48H154.7C131.2 48 112 67.2 112 90.7V96h261.3c23.5 0 42.7 19.2 42.7 42.7V400h5.3c23.5 0 42.7-19.2 42.7-42.7V90.7c0-23.5-19.2-42.7-42.7-42.7z"
    />
  </Svg>
);
