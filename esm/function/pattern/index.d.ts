export declare type name = 'name' | 'tel' | 'email' | 'pwd' | 'IP' | 'IDCard';
declare const pattern: (name: name, para?: string) => {
    pattern: RegExp;
    message: any;
};
export default pattern;
