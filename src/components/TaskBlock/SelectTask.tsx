import styled from "styled-components";
import { Context } from "./context";
import { useContext } from "react";
import { SelectTaskType } from "../../type/type";

const Select = styled.select`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;
const Option = styled.option``;



const SelectTask = ({ changeSelect, numberBlock }: SelectTaskType): JSX.Element => {
    const {dataArr} = useContext(Context);

    return (
        <Select onChange={changeSelect} name="">
            <Option value="one">-Select a Task-</Option>

            {dataArr[numberBlock - 1]?.arrTask.map((el: any, index: number): JSX.Element => {
                return <Option key={index}>{el.name}</Option>;
            })}
        </Select>
    );
};

export default SelectTask;
