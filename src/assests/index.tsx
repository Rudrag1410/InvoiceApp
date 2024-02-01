import React, { ReactElement, FunctionComponent } from "react";

import { IconsType } from "./types";
import Logo from "./icons/Logo";
import ArrowUp from "./icons/ArrowUp";
import Plus from "./icons/Plus";
import EmptyIcon from "./icons/EmptyIcon";
import Delete from "./icons/Delete";
const iconsMap = new Map<IconsType, FunctionComponent<IconProps>>([
  [IconsType.logo, Logo],
  [IconsType.arrowUp, ArrowUp],
  [IconsType.plus, Plus],
  [IconsType.empty, EmptyIcon],
  [IconsType.delete, Delete],
]);

export const getIcons = (
  icons: IconsType,
  iconsProp?: IconProps
): ReactElement<IconProps> | null => {
  const IconComponent = iconsMap.get(icons);
  if (IconComponent) {
    return <IconComponent {...iconsProp} />;
  } else {
    console.error("Icon not found");
    return null;
  }
};

export interface IconProps {
  className?: string;
  pathClassName?: string;
}
