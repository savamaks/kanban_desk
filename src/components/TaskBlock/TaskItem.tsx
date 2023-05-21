import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
`

const Task = styled.div`
    background: #ffffff;
    border-radius: 5px;
    padding: 8px;
`;

const TaskItem = ({initFullTask, arrBlock }: any): JSX.Element => {

    const clickTask=(el:any,index:number):void=>{
        initFullTask(el,index)
    }


    const item = arrBlock.map((el: any, index: number): JSX.Element => {

        return <Task onClick={():void=>{clickTask(el,index)}} key={index}>{el.name}</Task>;
    });

    return <Box>{item}</Box>;
};

export default TaskItem;
