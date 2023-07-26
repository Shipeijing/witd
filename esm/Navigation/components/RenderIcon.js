import React from 'react';
import Icon from "../../Icon";
import { jsx as _jsx } from "react/jsx-runtime";
export default function RenderIcon(item) {
  if (typeof item.icon === 'string' && item.icon.length > 0) {
    return /*#__PURE__*/_jsx(Icon, {
      name: item.icon
    });
  } else {
    return item.icon;
  }
}