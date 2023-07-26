import * as React from 'react';
export declare type ContainerType = Element | DocumentFragment;
export declare type GetContainer = string | ContainerType | (() => ContainerType) | false;
export interface PortalProps {
    /**
     * @description       自定义容器节点
     * @default           document.body
     */
    getContainer?: GetContainer;
    /**
     * @description       展示开关
     * @default           false
     */
    open?: boolean;
    /**
     * @description       关闭时是否销毁
     * @default           false
     */
    autoDestroy?: boolean;
    /**
     * @description       是否隐藏全局滚动条
     * @default           false
     */
    autoLock?: boolean;
    children?: React.ReactNode;
    debug?: string;
}
declare const Portal: React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<any>>;
export default Portal;
