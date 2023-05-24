import styled from "styled-components";
import TaskBlock from "./TaskBlock/TaskBlock";
import { useEffect, useState } from "react";
import FullTask from "./FullTask";
import { Routes, Route } from "react-router-dom";
import {Context} from "./context";

const MainContainer = styled.section`
    grid-area: main;
    background: #0079bf;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 26px;
`;

const Container = styled.div`
    width: 100%;
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

const arrBacklog: Array<any> = [];
const arrReady: Array<object> = [];
const arrInProgress: Array<object> = [];
const arrFinished: Array<object> = [];

const Main = (): JSX.Element => {
    const [task, setTask] = useState(false);
    const [fullTask, setFullTask]: any = useState({});

    //добавление нвой заметки и перемещение по блокам
    const initTask = ({ nameBlock, date, name, description, arrBlock, previousArrBlock }: any) => {
        let task: any = [];

        previousArrBlock?.forEach((el: any, index: number): void => {
            if (el.name === name) {
                task = previousArrBlock.splice(index, 1);
            }
        });
        // console.log(task[0]);

        arrBlock.push({
            nameBlock: nameBlock,
            date: task[0] ? task[0].date : date,
            name: task[0] ? task[0].name : name,
            description: task[0] ? task[0].description : description,
        });
        // console.log(arrReady);

        setTask((prev) => !prev);
    };

    // инициализация развертывания описания заметки
    const initFullTask = (value: object, index: number): void => {
        setFullTask({ arr: value, index: index });
    };

    //сохраняет заметку с новым описанием
    const saveDes = (description: string): void => {
        let newEl = { nameBlock: fullTask.arr.nameBlock, date: fullTask.arr.date, name: fullTask.arr.name, description: description };

        if (fullTask.arr.nameBlock === "Backlog") {
            arrBacklog.splice(fullTask.index, 1, newEl);
        } else if (fullTask.arr.nameBlock === "Ready") {
            arrReady.splice(fullTask.index, 1, newEl);
        } else if (fullTask.arr.nameBlock === "InProgress") {
            arrInProgress.splice(fullTask.index, 1, newEl);
        } else if (fullTask.arr.nameBlock === "Finished") {
            arrFinished.splice(fullTask.index, 1, newEl);
        }
    };

    return (
        <Context.Provider value={{initTask,initFullTask}}>
            <MainContainer>
                <Container>
                    <TaskBlock
                        nameBlock={"Backlog"}
                        mainInput={true}
                        arrBlock={arrBacklog}
                        title={"Backlog"}
                    />
                    <TaskBlock
                        nameBlock={"Ready"}
                        mainInput={false}
                        previousArrBlock={arrBacklog}
                        arrBlock={arrReady}
                        title={"Ready"}
                    />
                    <TaskBlock
                        nameBlock={"InProgress"}
                        mainInput={false}
                        previousArrBlock={arrReady}
                        arrBlock={arrInProgress}
                        title={"In Progress"}
                    />
                    <TaskBlock
                        nameBlock={"Finished"}
                        mainInput={false}
                        previousArrBlock={arrInProgress}
                        arrBlock={arrFinished}
                        title={"Finished"}
                    />
                </Container>
                <FullTask  fullTask={fullTask} saveDes={saveDes} />
            </MainContainer>
        </Context.Provider>
    );
};
export default Main;

// const memory =()=>{
//     localStorage.setItem("arrBacklog", JSON.stringify(arrBacklog));
//     localStorage.setItem("arrReady", JSON.stringify(arrReady));
//     localStorage.setItem("arrInProgress", JSON.stringify(arrInProgress));
//     localStorage.setItem("arrFinished", JSON.stringify(arrFinished));

// }

// useEffect(() => {
//     let r: any = localStorage.getItem("Backlog");
//     let g = JSON.parse(r);
//     g.map((el: any) => {
//         initTaskBacklog({id:el.id, name:el.name, description:el.description })
//     });
// }, []);
