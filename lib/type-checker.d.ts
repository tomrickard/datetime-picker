export interface Check {
    args?: Function;
    type?: Function;
    number?: Function;
    string?: Function;
    boolean?: Function;
    array?: Function;
    object?: Function;
    function?: Function;
    date?: Function;
    regexp?: Function;
    undefined?: Function;
    null?: Function;
}
declare var check: Check;
export { check };
