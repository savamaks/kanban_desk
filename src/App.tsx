import { useEffect, useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import { ElementArr, DataArrType, FullTaskType } from "./type/type";
import { Context } from "./components/TaskBlock/context";

const ContainerApp = styled.div`
    @import url("https://fonts.googleapis.com/css2? семья= Roboto:ital,wght@0,400;0,500;1,400 & display=swap");
    max-width: 1235px;
    height: 100vh;
    display: grid;
    justify-content: center;
    margin: 0 auto;
    grid-template: minmax(55px, auto) 1fr minmax(70px, auto) / 1fr;
    grid-template-areas: "header" "main" "footer";
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            color: inherit;
        }
    }
`;

const App = (): JSX.Element => {
    const [task, setTask] = useState<boolean>(false);
    const [fullTask, setFullTask]: any = useState({});
    const [dataArr, setDataArr] = useState<DataArrType>([
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
    ]);
    const [amountActive, setAmountActive] = useState<[number, number]>([
        dataArr[0].arrTask.length + dataArr[1].arrTask.length + dataArr[2].arrTask.length,
        dataArr[3].arrTask.length,
    ]);
    //проверка есть ли в local storage сохраненные задачи
    const arrMemory = (): void => {
        if (localStorage.length === 0) return;
        let dataArrLocalMemory: any = localStorage.getItem("dataArr");
        if (dataArrLocalMemory === null) return;
        setDataArr(JSON.parse(dataArrLocalMemory));
    };
    //добавление нвой заметки и перемещение по блокам
    const initTask = ({ nameBlock, id, name, description, arrBlock, previousArrBlock }: any): void => {
        let task: any = [];

        previousArrBlock?.arrTask?.forEach((el: ElementArr, index: number): void => {
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

        setTask((prev): boolean => !prev);
        setAmountActive([dataArr[0].arrTask.length + dataArr[1].arrTask.length + dataArr[2].arrTask.length, dataArr[3].arrTask.length]);
        memory();
    };
    //сохраняет заметку с новым описанием
    const saveNewTask = (description: string, element: ElementArr, indexElement: number): void => {
        let newElement = { nameBlock: element.nameBlock, id: element.id, name: element.name, description: description };

        dataArr.map((el: any, index: number): void => {
            if (el.title == element.nameBlock) {
                el.arrTask.splice(indexElement, 1, newElement);
            }
        });
        memory();
    };
    // сохраняет данные в local storage
    const memory = (): void => {
        localStorage.setItem("dataArr", JSON.stringify(dataArr));
    };
    // инициализация развертывания описания заметки
    const initFullTask = (value: object, index: number): void => {
        setFullTask({ arr: value, index: index });
    };

    //запуск проверки local storage
    useEffect((): void => {
        arrMemory();
    }, []);

    useEffect((): void => {
        setAmountActive([dataArr[0].arrTask.length + dataArr[1].arrTask.length + dataArr[2].arrTask.length, dataArr[3].arrTask.length]);
    }, [dataArr]);

    return (
        
                <ContainerApp>
                    <Context.Provider value={{ initTask, initFullTask, saveNewTask, fullTask, dataArr }}>
                        <Header />
                        <Main dataArr={dataArr} />
                        <Footer amountActive={amountActive[0]} amountFinished={amountActive[1]} />
                    </Context.Provider>
                </ContainerApp>
        
    );
};

export default App;
