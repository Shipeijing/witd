import { UploadProps as MyUploadProps } from 'rs-antd';
import React from 'react';
import './styles.less';
export interface UploadProps extends MyUploadProps {
    /**
     * @description       字段值
     * @default           []
     */
    value?: any[];
    /**
     * @description       支持的文件格式
     * @default           -
     */
    accept?: string;
    /**
     * @description       上传最大数量
     * @default           -
     */
    maxCount?: number;
    /**
     * @description       自动收起
     * @default           false
     */
    size?: number;
    /**
     * @description       文件类型
     * @default           file
     */
    fileType?: 'file' | 'image' | 'video';
    /**
     * @description       ant props
     * @default           -
     */
    antProps?: any;
    /**
     * @description       上传接口请求，返回数据后调用onChange
     * @default           file
     */
    onRequest: (file: any) => Promise<any | void>;
    /**
     * @description       文件发生改变回调
     * @default           -
     */
    onChange?: (e: any) => void;
}
declare const _default: ({ value, onChange, size, onRequest, ...e }: UploadProps) => React.JSX.Element;
export default _default;
