import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "./context";
import { Link } from "react-router-dom";

const BoxTask = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
`;

const TaskDiv = styled.div`
    background: #ffffff;
    border-radius: 5px;
    padding: 8px;
`;

const TaskItem = ({numberBlock }: any): JSX.Element => {

    const init = useContext(Context);

    //выводит развернутую заметку с описанием
    const clickTask = (el: any, index: number): void => {
        init.initFullTask(el, index);
    };

    const item = init.dataMock[numberBlock].arrTask.map((el: any, index: number): JSX.Element => {
        return (
            <Link key={el.date} to={`/tasks/${el.date}`}>
                <TaskDiv
                    onClick={(): void => {
                        clickTask(el, index);
                    }}
                    key={index}
                >
                    {el.name}
                </TaskDiv>
            </Link>
        );
    });

    return <BoxTask>{item}</BoxTask>;
};

export default TaskItem;
