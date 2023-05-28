import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";

const Container = styled.div`
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
    const [amountActive, setAmountActive] = useState(0);
    const [amountFinished, setAmountFinished] = useState(0);
    const [dataArr, setDataArr] = useState<DataArr>([
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

    const arrMemory = () => {
        if (localStorage.length === 0) return;
        let dataArrLocalMemory: any = localStorage.getItem("dataArr");
        if (dataArrLocalMemory === null) return;
        setDataArr(JSON.parse(dataArrLocalMemory));
    };

    useEffect(() => {
        arrMemory();
    }, []);


    useEffect((): void => {
        amoutTask(dataArr[0].arrTask.length + dataArr[1].arrTask.length + dataArr[2].arrTask.length, dataArr[3].arrTask.length);
    }, [dataArr]);

    const amoutTask = (active: number, finished: number): void => {
        setAmountActive(active);
        setAmountFinished(finished);
    };

    return (
        <BrowserRouter>
            <Container>
                <Header />

                <Main amoutTask={amoutTask} dataArr={dataArr} />
                <Footer amountActive={amountActive} amountFinished={amountFinished} />
            </Container>
        </BrowserRouter>
    );
};

export default App;
