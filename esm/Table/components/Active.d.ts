import React from 'react';
import { HandleProps, segmentedProps } from '../interface';
import '../styles.less';
interface Props {
    handleProps: HandleProps;
    active: any;
    addText: any;
    readOnly: any;
    slot: any;
    selectedRows: any;
    rowSelection: any;
    onSelectDelete: any;
    slotData: any;
    showDataSource: boolean;
    setShowDataSource: any;
    setSelectedRows: any;
    _onAdd: any;
    segmented?: segmentedProps;
}
declare const _default: ({ addText, active, readOnly, slot, selectedRows, rowSelection, onSelectDelete, setSelectedRows, segmented, ...e }: Props) => React.JSX.Element;
export default _default;
