import  {createContext}  from "react";

type ContextType = {
    initTask:({}:any)=>void;
    initFullTask:(value: object, index: number)=>void;
    saveNewTask:(description:string,el:any,indexElement:number)=>void;
    fullTask:any;
    dataArr:any
};
export const defaultValue: ContextType = {
    initTask: ():void => {},
    initFullTask: ():void => {},
    saveNewTask:():void => {},
    fullTask:{},
    dataArr:{}

};
export const Context = createContext<ContextType>(defaultValue);
