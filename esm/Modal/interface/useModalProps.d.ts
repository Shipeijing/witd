/// <reference types="react" />
export interface useSuperModalProps {
    /**
     * @description       id依赖值
     * @default           false
     */
    id?: string;
    /**
     * @description       需要传给弹窗的数据
     * @default           -
     */
    data?: any;
    /**
     * @description       底部插槽 会直接插在按钮前面
     * @default           -
     */
    render?: (data: any) => React.ReactElement | React.ReactNode;
    /**
     * @description       关闭前回调
     * @default           -
     */
    onBeforeClose?: () => Promise<boolean | void> | boolean | void;
    /**
     * @description       被销毁后调用
     * @default           -
     */
    onAfterClose?: () => any;
}
declare const _default: (props: useSuperModalProps) => null;
export default _default;
