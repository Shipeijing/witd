export interface containerStyleProps {
    /**
     * @description       表头是否有背景色
     * @default           false
     */
    headerBackground?: boolean;
    /**
     * @description       奇偶行不同色
     * @default           false
     */
    multistory?: boolean;
    /**
     * @description       容器背景色
     * @default           #ffffff
     */
    background?: string | 'none';
    /**
     * @description       是否有阴影
     * @default           true
     */
    boxShadow?: boolean;
}
declare const _default: (props: containerStyleProps) => void;
export default _default;
