import styled from "styled-components";
import TaskBlock from "./TaskBlock/TaskBlock";
import { useEffect, useState } from "react";
import FullTask from "./FullTask";

const MainContainer= styled.section`
    grid-area: main;
    background: #0079bf;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 26px;
`

const Container = styled.div`
width: 100%;
    background: none;
    display: flex;
    justify-content: space-between;
`;


const arrBacklog: Array<any> = [];
const arrReady: Array<object> = [];
const arrInProgress: Array<object> = [];
const arrFinished: Array<object> = [];

const Main = (): JSX.Element => {

    const [task, setTask] = useState(false);    
    const[fullTask,setFullTask] = useState({})

    const initTask = ({nameBlock, date, name, description, arrBlock, previousArrBlock }: any) => {

        arrBlock.push({nameBlock:nameBlock, date: date, name: name, description: description });

        previousArrBlock?.forEach((el: any, index: number):void => {
            if (el.name === name) {
                previousArrBlock.splice(index, 1);
            }
        });
        setTask((prev)=>!prev);
        // memory()
    };


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

    const initFullTask =(value:object,index:number):void=>{
        setFullTask({arr:value,index:index})
    }

    const saveDes=(value:string,index:number)=>{
        console.log(value,index);
        let newEl = {nameBlock:'Backlog', date: arrBacklog[index].date, name: arrBacklog[index].name, description: value }
        arrBacklog.splice(index,1,newEl)
        console.log(arrBacklog);
    }

    return (
        <MainContainer>
            <Container >
                <TaskBlock initFullTask={initFullTask} nameBlock={'Backlog'}  mainInput={true} arrBlock={arrBacklog} initTask={initTask} title={"Backlog"} />
                <TaskBlock initFullTask={initFullTask} nameBlock={'Ready'} mainInput={false} previousArrBlock={arrBacklog} arrBlock={arrReady} initTask={initTask} title={"Ready"} />
                <TaskBlock initFullTask={initFullTask} nameBlock={'InProgress'} mainInput={false} previousArrBlock={arrReady} arrBlock={arrInProgress} initTask={initTask} title={"In Progress"} />
                <TaskBlock initFullTask={initFullTask} nameBlock={'Finished'} mainInput={false} previousArrBlock={arrInProgress} arrBlock={arrFinished} initTask={initTask} title={"Finished"} />
            </Container>
            <FullTask fullTask={fullTask} saveDes={saveDes}/>
        </MainContainer>
        
    );
};
export default Main;
