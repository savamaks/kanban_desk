import { useState } from "react";
import styled from "styled-components";

const Task = styled.div`
    background: #ffffff;
    border-radius: 5px;
    padding: 8px;
`;
const TaskItem = ({ arrBlock }: any): JSX.Element => {

    const item = arrBlock.map((el: any, index: number): JSX.Element => {
        return <Task onClick={()=>{console.log(el.name)}} key={index}>{el.name}</Task>;
    });

    return <>{item}</>;
};

export default TaskItem;
