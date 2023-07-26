/**
 * @fn : 要执行的函数
 * @delay : 每次函数的时间间隔
 */
export default function throttle(fn: Function, delay: number): (this: any, ...args: any) => void;
