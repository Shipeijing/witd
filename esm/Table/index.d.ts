import React from 'react';
import './styles.less';
import { SuperTableProps } from './interface';
import { tableRefProps } from './interface/tableRefProps';
import 'dayjs/locale/zh-cn';
declare const _default: React.ForwardRefExoticComponent<SuperTableProps & React.RefAttributes<tableRefProps | undefined>>;
export default _default;
export { default as Slot } from '../Slot';
