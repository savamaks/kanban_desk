import styled from "styled-components";
import InputBlock from "./InputBlock/InputBlock";
import { useRef, useState } from "react";
import TaskItem from "./TaskItem";
import { TaskBlockType } from "../../type/type";

const BlockTask = styled.div`
    display: flex;
    font-family: inherit;
    flex-direction: column;
    gap: 15px;
    background: #ebecf0;
    border-radius: 10px;
    width: 282px;
    padding: 12px;
    max-height: 85vh;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;



const TaskBlock = ({ numberBlock, nameBlock, mainInput, title }: TaskBlockType): JSX.Element => {
    const blockRef = useRef(null);

    return (
        <BlockTask data-nameblock={nameBlock} ref={blockRef}>
            <Title>{title}</Title>
            <TaskItem numberBlock={numberBlock} />
            <InputBlock numberBlock={numberBlock} blockRef={blockRef} mainInput={mainInput} />
        </BlockTask>
    );
};
export default TaskBlock;
