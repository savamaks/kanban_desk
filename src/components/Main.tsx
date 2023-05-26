import styled from "styled-components";
import { useEffect, useState } from "react";
import FullTask from "./TaskBlock/FullTask";
import { Routes, Route } from "react-router-dom";
import { Context } from "./TaskBlock/context";
import ContainerBlock from "./TaskBlock/ContainerBlock";

const MainContainer = styled.section`
    grid-area: main;
    background: #0079bf;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 26px;
`;

type DataArr = [
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
let dataArr: DataArr = [
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
];
const arrMemory = () => {
    if (localStorage.length === 0) return;
    let dataArrLocalMemory: any = localStorage.getItem("dataArr");
    if(dataArrLocalMemory===null) return
    dataArr = JSON.parse(dataArrLocalMemory);
};
arrMemory();

const Main = ({ amoutTask }: any): JSX.Element => {
    const [task, setTask] = useState(false);
    const [fullTask, setFullTask]: any = useState({});

    //добавление нвой заметки и перемещение по блокам
    const initTask = ({ nameBlock, id, name, description, arrBlock, previousArrBlock }: any): void => {
        let task: any = [];

        previousArrBlock?.arrTask?.forEach((el: any, index: number): void => {
            if (el.name === name) {
                task = previousArrBlock.arrTask.splice(index, 1);
            }
        });

        arrBlock.arrTask.push({
            nameBlock: nameBlock,
            id: task[0] ? task[0].id : id,
            name: task[0] ? task[0].name : name,
            description: task[0] ? task[0].description : description,
        });

        setTask((prev) => !prev);
        memory();
    };

    // инициализация развертывания описания заметки
    const initFullTask = (value: object, index: number): void => {
        setFullTask({ arr: value, index: index });
    };
    const memory = () => {
        localStorage.setItem("dataArr", JSON.stringify(dataArr));
    };

    //сохраняет заметку с новым описанием
    const saveDes = (description: string): void => {
        let newElement = { nameBlock: fullTask.arr.nameBlock, id: fullTask.arr.id, name: fullTask.arr.name, description: description };
        dataArr.map((el: any, index: number) => {
            if (el.title == fullTask.arr.nameBlock) {
                el.arrTask.splice(fullTask.index, 1, newElement);
            }
        });
        memory();
    };

    useEffect((): void => {
        amoutTask(dataArr[0].arrTask.length + dataArr[1].arrTask.length + dataArr[2].arrTask.length, dataArr[3].arrTask.length);
    }, [task]);

    return (
        <Context.Provider value={{ initTask, initFullTask, saveDes, fullTask, dataArr }}>
            <MainContainer>
                <Routes>
                    <Route path="/" element={<ContainerBlock/>} />
                    <Route path={`/tasks/id${fullTask.arr?.id}`} element={<FullTask/>} />
                </Routes>
            </MainContainer>
        </Context.Provider>
    );
};
export default Main;
