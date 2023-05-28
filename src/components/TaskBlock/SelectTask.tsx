import styled from "styled-components";
import { Context } from "./context";
import { useContext,useState } from "react";

const Select = styled.select`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;
const Option = styled.option`

`;


const SelectTask = ({changeSelect,numberBlock}:any):JSX.Element => {

    const init = useContext(Context)
    const [stateButton,setStateButton]=useState(false)


    return (
        <Select onChange={changeSelect} name="" >
            <Option></Option>

            {init.dataArr[numberBlock-1]?.arrTask.map((el: any, index: number): JSX.Element => {
                return <Option key={index}>{el.name}</Option>;
            })}
        </Select>
    );
};

export default SelectTask;
