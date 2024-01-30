import React, { ReactElement } from "react";

import { IconsType } from "./types";
import Logo from "./icons/Logo";
import ArrowUp from "./icons/ArrowUp";
import Plus from "./icons/Plus";
import Empty from "./icons/EmptyIcon";
import Delete from "./icons/Delete";

export interface IconProps {
  className?: string;
}

const iconsMap = new Map<keyof typeof IconsType, ReactElement<IconProps>>([
  [IconsType.logo, <Logo />],
  [IconsType.arrowUp, <ArrowUp />],
  [IconsType.plus, <Plus />],
  [IconsType.empty, <Empty />],
  [IconsType.delete, <Delete />],
]);

export const getIcons = (
  icons: IconsType,
  iconsProp: IconProps = {}
): ReactElement<IconProps> => {
  const icon = iconsMap.get(icons);

  if (icon) {
    return React.cloneElement(icon, iconsProp);
  }

  return <React.Fragment />;
};
