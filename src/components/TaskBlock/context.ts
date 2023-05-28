import  {createContext}  from "react";

type booleanContext = {
    initTask:({}:any)=>void;
    initFullTask:(value: object, index: number)=>void;
    saveNewTask:(description:string,el:any,indexElement:number)=>void;
    fullTask:any;
    dataArr:any
};
const defaultValue: booleanContext = {
    initTask: ():void => {},
    initFullTask: ():void => {},
    saveNewTask:():void => {},
    fullTask:{},
    dataArr:{}

};
export const Context = createContext<booleanContext>(defaultValue);
