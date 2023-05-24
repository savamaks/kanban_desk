import styled from "styled-components";
import InputBlock from "./Input";
import { useRef, useState } from "react";
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
    max-height: 85vh;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;



const TaskBlock = ({nameBlock, mainInput,previousArrBlock,arrBlock, title }: any): JSX.Element => {
   


    const blockRef = useRef(null)

    return (
        <Block data-nameblock={nameBlock} ref={blockRef}  >
            <Title >{title}</Title>
            <TaskItem  arrBlock={arrBlock}/>
            <InputBlock blockRef={blockRef} mainInput={mainInput} previousArrBlock={previousArrBlock} arrBlock={arrBlock} />
        </Block>
    );
};
export default TaskBlock;
