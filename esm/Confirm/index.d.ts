import React from 'react';
export interface Props {
    /**
     * @description       宽度
     * @default           350
     */
    width?: string | number;
    /**
     * @description       标题
     * @default           无
     */
    title?: string;
    /**
     * @description       内容
     * @default           无
     */
    content?: string;
    /**
     * @description       标题后面的提示
     * @default           无
     */
    tips?: string;
    /**
     * @description       是否垂直居中
     * @default           无
     */
    center?: boolean;
    /**
     * @description       确认按钮加载中
     * @default           false
     */
    loading?: boolean;
    /**
     * @description       弹窗类型
     * @default           无
     */
    type?: 'success' | 'info' | 'warning' | 'error' | 'question' | 'none';
    /**
     * @description       点击遮罩层关闭
     * @default           无
     */
    maskClosable?: boolean;
    /**
     * @description       自定义图标
     * @default           -
     */
    icon?: JSX.Element;
    /**
     * @description       底部插槽 会直接插在按钮前面
     * @default           无
     */
    footerSlot?: React.ReactElement[] | JSX.Element;
    /**
     * @description       确认按钮文字
     * @default           确认
     */
    okText?: string;
    /**
     * @description       取消按钮文字
     * @default           取消
     */
    cancelText?: string;
    /**
     * @description       隐藏确认按钮
     * @default           false
     */
    hideOk?: boolean;
    /**
     * @description       隐藏取消按钮
     * @default           false
     */
    hideCancel?: boolean;
    /**
     * @description       点击确认按钮回调，返回true阻止弹窗关闭
     * @default           无
     */
    onOk?: () => void | boolean | Promise<void>;
    /**
     * @description       点击取消或关闭时回调
     * @default           无
     */
    onCancel?: () => any | Promise<void>;
    /**
     * @description       被销毁时调用
     * @default           无
     */
    onAfterClose?: Function;
}
declare const _default: ({ ...e }: Props) => void;
export default _default;
