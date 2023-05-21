import styled from "styled-components";

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


const SelectTask = ({changeSelect,previousArrBlock}:any) => {
    return (
        <Select onChange={changeSelect} name="">
            <Option>-Select a Task-</Option>

            {previousArrBlock.map((el: any, index: number): JSX.Element => {
                return <Option key={index}>{el.name}</Option>;
            })}
        </Select>
    );
};

export default SelectTask;
