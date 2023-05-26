import  {createContext}  from "react";

type booleanContext = {
    initTask:({}:any)=>void;
    initFullTask:(value: object, index: number)=>void;
    saveDes:(description:string)=>void;
    fullTask:any;
    dataMock:any
};
const defaultValue: booleanContext = {
    initTask: ():void => {},
    initFullTask: ():void => {},
    saveDes:():void => {},
    fullTask:{},
    dataMock:{}

};
export const Context = createContext<booleanContext>(defaultValue);
