type DataArrType = [
    {
        title: string;
        arrTask: Array<object>;
    },
    {
        title: string;
        arrTask: Array<object>;
    },
    {
        title: string;
        arrTask: Array<object>;
    },
    {
        title: string;
        arrTask: Array<object>;
    }
];

interface ElementArr {
    nameBlock: string;
    id: number;
    name: string;
    description: string;
}
interface TaskItemType {
    numberBlock: number;
}
interface MainType {
    dataArr: any;
}
interface SelectTaskType {
    changeSelect: any;
    numberBlock: number;
}
interface TaskBlockType {
    numberBlock: number;
    nameBlock: string;
    mainInput: boolean;
    title: string;
}

interface FullTaskType {
    element: ElementArr;
    indexElement: number;
}
export type { ElementArr, TaskItemType, MainType, SelectTaskType, TaskBlockType, FullTaskType,DataArrType };
