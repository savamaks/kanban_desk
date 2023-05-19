import styled from "styled-components";
import InputBlock from "./Input";
import { useState } from "react";
import TaskItem from "./TaskItem";

const Block = styled.div`
    display: flex;
    font-family: inherit;
    flex-direction: column;
    gap: 15px;
    background: #ebecf0;
    border-radius: 10px;
    width: 282px;
    padding: 12px;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;



const TaskBlock = ({mainInput,previousArrBlock,arrBlock, initTask, title }: any): JSX.Element => {
   
    return (
        <Block>
            <Title>{title}</Title>
            <TaskItem arrBlock={arrBlock}/>
            <InputBlock mainInput={mainInput} previousArrBlock={previousArrBlock} arrBlock={arrBlock} initTask={initTask}/>
        </Block>
    );
};
export default TaskBlock;
