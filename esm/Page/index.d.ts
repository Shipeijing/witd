import React from 'react';
import './styles.less';
interface RouteProps {
    title: string;
    url: string;
}
interface Props {
    /**
     * @description       loading动画开关
     * @default           false
     */
    loading?: boolean;
    /**
     * @description       内容为空
     * @default           false
     */
    empty?: boolean;
    /**
     * @description       过渡动画开关
     * @default           无
     */
    animation?: '' | '';
    /**
     * @description       操作区插槽
     * @default           无
     */
    extra?: React.ReactNode;
    /**
     * @description       路由面包屑数组
     * @default           无
     */
    routes?: RouteProps[];
    /**
     * @description       内容
     * @default           无
     */
    children: React.ReactNode;
    /**
     * @description       自定义容器样式类名
     * @default           无
     */
    className?: string;
    /**
     * @description       自定义容器样式
     * @default           无
     */
    style?: React.CSSProperties;
    /**
     * @description       自定义容器内容样式
     * @default           无
     */
    bodyStyle?: React.CSSProperties;
}
declare const _default: ({ children, routes, ...e }: Props) => React.JSX.Element;
export default _default;
