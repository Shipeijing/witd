import React, { ReactNode } from 'react';
export interface NavigationProps {
    /**
     * @description       是否显示
     * @default           false
     */
    open: boolean;
    /**
     * @description       值
     * @default           无
     */
    routes?: RouteProps[];
    /**
     * @description       触发跳转回调
     * @default           -
     */
    onGoPath?: (route: RouteProps) => void;
    /**
     * @description       关闭回调
     * @default           -
     */
    onCancel: () => void;
}
export interface RouteProps {
    name: string;
    path?: string;
    icon?: string | ReactNode;
    children?: RouteProps[];
}
declare const _default: (props: NavigationProps) => React.JSX.Element;
export default _default;
