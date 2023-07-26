import { FormInstance } from 'rs-antd';
export interface DescriptionsRefProps {
    /**
     * @description       表单
     * @default           -
     */
    form: FormInstance<any>;
    /**
     * @description       等于点击编辑按钮
     * @default           -
     */
    onEdit: Function;
    /**
     * @description       等于点击取消按钮
     * @default           -
     */
    onCancel: Function;
    /**
     * @description       等于点击保存按钮
     * @default           -
     */
    onFinish: Function;
}
declare const _default: (props: DescriptionsRefProps) => void;
export default _default;
