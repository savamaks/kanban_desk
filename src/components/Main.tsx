import styled from "styled-components";
import TaskBlock from "./TaskBlock/TaskBlock";
import { useEffect, useState } from "react";
import { HasTypeArguments } from "typescript";

const Container = styled.section`
    @import url("https://fonts.googleapis.com/css2? family= Roboto & display=swap");

    grid-area: main;
    background: #0079bf;
    display: flex;
    align-items: start;
    justify-content: space-around;
    padding: 20px 16px;
`;

const arrBacklog: Array<object> = [];
const arrReady: Array<object> = [];
const arrInProgress: Array<object> = [];
const arrFinished: Array<object> = [];

const Main = (): JSX.Element => {
    // console.log(arrBacklog,arrReady,arrInProgress,arrFinished);

    const [one, setOne] = useState({});
    const [two, setTwo] = useState({});
    const [three, setThree] = useState({});
    const [four, setFour] = useState({});

    const initTaskBacklog = ({ id, name, description }: any) => {
        arrBacklog.push({ id: id, name: name, description: description });

        setOne({ id: id, name: name, description: description });

        localStorage.setItem("Backlog", JSON.stringify(arrBacklog));
    };

    const initTaskReady = ({ id, name, description }: any) => {
        arrReady.push({ id: id, name: name, description: description });

        arrBacklog.forEach((el: any, index: number) => {
            if (el.name === name) {
                arrBacklog.splice(index, 1);
            }
        });
        setTwo({ id: id, name: name, description: description });
    };

    const initTaskProgress = ({ id, name, description }: any) => {
        arrInProgress.push({ id: id, name: name, description: description });

        arrReady.forEach((el: any, index: number) => {
            if (el.name === name) {
                arrReady.splice(index, 1);
            }
        });
        setThree({ id: id, name: name, description: description });
    };

    const initTaskFinished = ({ id, name, description }: any) => {
        arrFinished.push({ id: id, name: name, description: description });

        arrInProgress.forEach((el: any, index: number) => {
            if (el.name === name) {
                arrInProgress.splice(index, 1);
            }
        });
        setFour({ id: id, name: name, description: description });
    };
    useEffect(() => {
        let r: any = localStorage.getItem("Backlog");
        let g = JSON.parse(r);
        g.map((el: any) => {
            initTaskBacklog({id:el.id, name:el.name, description:el.description })
        });
    }, []);

    return (
        <Container>
            <TaskBlock mainInput={true} arrBlock={arrBacklog} initTask={initTaskBacklog} title={"Backlog"} />
            <TaskBlock mainInput={false} previousArrBlock={arrBacklog} arrBlock={arrReady} initTask={initTaskReady} title={"Ready"} />
            <TaskBlock mainInput={false} previousArrBlock={arrReady} arrBlock={arrInProgress} initTask={initTaskProgress} title={"In Progress"} />
            <TaskBlock mainInput={false} previousArrBlock={arrInProgress} arrBlock={arrFinished} initTask={initTaskFinished} title={"Finished"} />
        </Container>
    );
};
export default Main;
