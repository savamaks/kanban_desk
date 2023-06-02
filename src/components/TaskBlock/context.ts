import { createContext } from "react";
import { ElementArr, DataArrType } from "../../type/type";





type ContextType = {
    initTask: ({}: any) => void;
    initFullTask: (value: object, index: number) => void;
    saveNewTask: (description: string, el: any, indexElement: number) => void;
    fullTask: ElementArr;
    dataArr: DataArrType;
};
export const defaultValue: ContextType = {
    initTask: (): void => {},
    initFullTask: (): void => {},
    saveNewTask: (): void => {},
    fullTask: { nameBlock: "", id: 0, name: "", description: "" },
    dataArr: [
        {
            title: "Backlog",
            arrTask: [],
        },
        {
            title: "Ready",
            arrTask: [],
        },
        {
            title: "InProgress",
            arrTask: [],
        },
        {
            title: "Finished",
            arrTask: [],
        },
    ],
};
export const Context = createContext<ContextType>(defaultValue);
