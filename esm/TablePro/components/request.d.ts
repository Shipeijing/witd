interface RequestProps {
    url: string;
    params?: any;
    token?: string;
    header?: any;
}
declare const _default: {
    get: (props: RequestProps) => Promise<unknown>;
    post: (props: RequestProps) => Promise<unknown>;
    put: (props: RequestProps) => Promise<unknown>;
    delete: (props: RequestProps) => Promise<unknown>;
    upload: (props: RequestProps) => Promise<unknown>;
};
export default _default;
