import { columnsProps } from '../../Table/interface';
export interface DownloadExcelProps {
    title?: string;
    columns: columnsProps[];
    dataSource: any;
}
declare const _default: ({ title, columns, dataSource }: DownloadExcelProps) => boolean;
export default _default;
