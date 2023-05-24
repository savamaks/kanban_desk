import  {createContext}  from "react";

type booleanContext = {
    initTask:({}:any)=>void;
    initFullTask:(value: object, index: number)=>void;
};
const defaultValue: booleanContext = {
    initTask: ():void => {},
    initFullTask: ():void => {}

};
export const Context = createContext<booleanContext>(defaultValue);
