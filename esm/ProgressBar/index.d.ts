export interface ProgressBarProps {
    /**
     * @description       进度条颜色
     * @default           主题色
     */
    color?: string;
    /**
     * @description       进度条状态
     * @default           default
     */
    status?: 'success' | 'error' | 'warn' | 'default';
    /**
     * @description       进度0-100
     * @default           0
     */
    percent?: number;
    /**
     * @description       隐藏icon
     * @default           false
     */
    hideIcon?: boolean;
}
declare const _default: (props?: ProgressBarProps | undefined) => [(data: ProgressBarProps) => any, (data?: boolean | undefined) => any, string];
export default _default;
