import styled from "styled-components";
import { useEffect, useState } from "react";
import FullTask from "./FullTask";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context";
import ContainerBlock from "./ContainerBlock";

const MainContainer = styled.section`
    grid-area: main;
    background: #0079bf;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 26px;
`;


let dataMock: any = [
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
    let arrBacklogNew: any = localStorage.getItem("dataMock");
    dataMock = JSON.parse(arrBacklogNew);
    
};
arrMemory();

const Main = ({ amoutTask }: any): JSX.Element => {
    const [task, setTask] = useState(false);
    const [fullTask, setFullTask]: any = useState({});
// console.log('render main');

    //добавление нвой заметки и перемещение по блокам
    const initTask = ({ nameBlock, date, name, description, arrBlock, previousArrBlock }: any): void => {
        let task: any = [];

        previousArrBlock?.arrTask?.forEach((el: any, index: number): void => {
            if (el.name === name) {
                task = previousArrBlock.arrTask.splice(index, 1);
            }
        });
        // console.log(task[0]);

        arrBlock.arrTask.push({
            nameBlock: nameBlock,
            date: task[0] ? task[0].date : date,
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
        localStorage.setItem("dataMock", JSON.stringify(dataMock));
    };

    //сохраняет заметку с новым описанием
    const saveDes = (description: string): void => {
        let newElement = { nameBlock: fullTask.arr.nameBlock, date: fullTask.arr.date, name: fullTask.arr.name, description: description };
        dataMock.map((el: any, index: number) => {
            if (el.title == fullTask.arr.nameBlock) {
                el.arrTask.splice(fullTask.index, 1, newElement);
            }
        });
        memory();
    };

    useEffect((): void => {
        amoutTask(dataMock[0].arrTask.length+dataMock[1].arrTask.length+dataMock[2].arrTask.length, dataMock[3].arrTask.length);
    }, [task]);

    

    return (
        <Context.Provider value={{ initTask, initFullTask, saveDes, fullTask,dataMock }}>
            <MainContainer>
                <Routes>
                    <Route path="/" Component={ContainerBlock} />
                    <Route path={`/tasks/${fullTask.arr?.date}`} Component={FullTask} />
                </Routes>
            </MainContainer>
        </Context.Provider>
    );
};
export default Main;

