import { JSXElementConstructor, ReactElement } from 'react';
declare type hideEnum = 'sound' | 'close';
export interface NoteProps {
    /**
     * @description       主题色
     * @default           dark
     */
    theme?: 'success' | 'error' | 'warn' | 'dark' | 'light';
    /**
     * @description       宽度
     * @default           100%
     */
    width?: string | number;
    /**
     * @description       文本宽度
     * @default           100%
     */
    textWidth?: string | number;
    /**
     * @description       是否播放
     * @default           true
     */
    play?: boolean;
    /**
     * @description       选取框滑动的方向
     * @default           true
     */
    direction?: 'left' | 'right';
    /**
     * @description       渲染后延迟动画的持续时间，以秒为单位
     * @default           0
     */
    delay?: number;
    /**
     * @description       选框应该循环的次数，0相当于无限次
     * @default           0
     */
    loop?: number;
    /**
     * @description       以像素/秒计算的速度
     * @default           20
     */
    speed?: number;
    /**
     * @description       顶部距离
     * @default           0
     */
    top?: string | number;
    /**
     * @description       左侧距离
     * @default           0
     */
    left?: string | number;
    /**
     * @description       标题
     * @default           无
     */
    title?: string;
    /**
     * @description       标题后面的提示
     * @default           无
     */
    message?: string;
    /**
     * @description       定位方式
     * @default           absolute
     */
    position?: 'absolute' | 'fixed';
    /**
     * @description       指定 Modal 挂载的节点，但依旧为全局展示，false 为挂载在当前位置
     * @default           无
     */
    getContainer?: ReactElement<any, string | JSXElementConstructor<any>>[] | any;
    /**
     * @description       需要隐藏的默认功能  []
     * @default           无
     */
    hide?: hideEnum[];
    /**
     * @description       操作按钮文字
     * @default           -
     */
    buttonText?: string;
    /**
     * @description       按下操作按钮回调
     * @default           -
     */
    onPressButton: () => void;
    /**
     * @description       点击取消或关闭时回调
     * @default           无
     */
    onCancel?: Function;
}
declare const _default: (props?: NoteProps | undefined) => [(arg0: boolean) => any, (data: NoteProps) => any, string];
export default _default;
