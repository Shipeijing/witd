import { TooltipPlacement } from 'rs-antd/lib/tooltip';
import React, { MouseEventHandler, ReactNode } from 'react';
import '../styles.less';
interface Props {
    title?: string | ReactNode | (() => JSX.Element);
    myStyle?: any;
    action?: boolean;
    placement?: TooltipPlacement | undefined;
    icon?: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
declare const _default: ({ title, icon, myStyle, placement, onClick, action }: Props) => React.JSX.Element;
export default _default;
