import styled from "styled-components";
import { useEffect, useState } from "react";
import FullTask from "../TaskBlock/FullTask";
import { Routes, Route } from "react-router-dom";
import { Context } from "../TaskBlock/context";
import ContainerBlock from "../TaskBlock/ContainerBlock";

const MainContainer = styled.main`
    grid-area: main;
    background: #0079bf;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 26px;
`;



const Main = ({ amoutTask,dataArr }: any): JSX.Element => {
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

        setTask((prev):boolean => !prev);
        amoutTask(dataArr[0].arrTask.length + dataArr[1].arrTask.length + dataArr[2].arrTask.length, dataArr[3].arrTask.length);
        memory();
    };

    // инициализация развертывания описания заметки
    const initFullTask = (value: object, index: number): void => {
        setFullTask({ arr: value, index: index });
        console.log(value,index);
    };
    const memory = () => {
        localStorage.setItem("dataArr", JSON.stringify(dataArr));
    };

    //сохраняет заметку с новым описанием
    const saveNewTask = (description: string,element:any,indexElement:number): void => {

        let newElement = { nameBlock: element.nameBlock, id: element.id, name: element.name, description: description };

        dataArr.map((el: any, index: number):void => {
            if (el.title == element.nameBlock) {
                el.arrTask.splice(indexElement, 1, newElement);
            }
        });
        memory();
    };

    

    return (
        <Context.Provider value={{ initTask, initFullTask, saveNewTask, fullTask, dataArr }}>
            <MainContainer data-testid='main'>
                <Routes>
                    <Route path="/" element={<ContainerBlock/>} />
                    {dataArr.map((taskBlock:any,index:number)=>{

                        return dataArr[index].arrTask.map((task:any,index:number)=>{

                            return <Route path={`/tasks/id${task.id}`} element={<FullTask element={task} indexElement={index}/>} />
                        })
                    })}
                    
                </Routes>
            </MainContainer>
        </Context.Provider>
    );
};
export default Main;
