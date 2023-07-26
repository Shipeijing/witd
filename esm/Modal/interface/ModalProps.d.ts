import React, { ReactNode } from 'react';
declare type hideEnum = 'ok' | 'cancel' | 'mask' | 'action' | 'header' | 'footer' | 'close';
export interface SuperModalProps {
    /**
     * @description       标题后面的提示
     * @default           -
     */
    tips?: string;
    /**
     * @description       自定义提示图标
     * @default           -
     */
    tipsIcon?: ReactNode;
    /**
     * @description       禁止内容超出一定高度内部滚动
     * @default           false
     */
    disabledScroll?: boolean;
    /**
     * @description       保留页面缓存记录
     * @default           false
     */
    noDestroyClose?: boolean;
    /**
     * @description       显示功能提示
     * @default           false
     */
    showGuide?: boolean;
    /**
     * @description       需要隐藏的默认功能  []
     * @default           无
     */
    hide?: hideEnum[];
    /**
     * @description       底部插槽 会直接插在按钮前面
     * @default           无
     */
    footerSlot?: (props: any) => React.ReactElement[] | JSX.Element;
    /**
     * @description       确认按钮文字
     * @default           确认
     */
    okText?: React.ReactNode;
    /**
     * @description       取消按钮文字
     * @default           取消
     */
    cancelText?: React.ReactNode;
}
declare const _default: (props: SuperModalProps) => null;
export default _default;
