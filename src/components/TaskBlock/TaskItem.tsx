import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "./context";
import { Link, Routes } from "react-router-dom";
import { ElementArr, TaskItemType } from "../../type/type";

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

const TaskItem = ({ numberBlock }: TaskItemType): JSX.Element => {
    const { initFullTask, dataArr } = useContext(Context);

    //выводит развернутую заметку с описанием
    const clickTask = (el: ElementArr, index: number): void => {
        initFullTask(el, index);
    };
    
    const item = dataArr[numberBlock].arrTask.map((el: any, index: number): JSX.Element => {
        return (
           
            <Link key={el.id} to={`/tasks/id${el.id}`}>
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
