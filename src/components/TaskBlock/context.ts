import  {createContext}  from "react";

type booleanContext = {
    initTask:({}:any)=>void;
    initFullTask:(value: object, index: number)=>void;
    saveDes:(description:string)=>void;
    fullTask:any;
    dataArr:any
};
const defaultValue: booleanContext = {
    initTask: ():void => {},
    initFullTask: ():void => {},
    saveDes:():void => {},
    fullTask:{},
    dataArr:{}

};
export const Context = createContext<booleanContext>(defaultValue);
