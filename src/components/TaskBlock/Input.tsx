import { useEffect, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    background: none;
    width: max-content;
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
`;

const Button = styled.button<{ bg: string; color: string }>`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => props.color};
    background: ${(props) => props.bg};
    border-radius: 5px;
`;

const Select = styled.select`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;
const Option = styled.option``;

const InputBlock = ({ mainInput, previousArrBlock, arrBlock, initTask }: any): JSX.Element => {
    const [input, setInput] = useState("");
    const [click, setClick] = useState(false);
    const [valueOption, setValueOption] = useState("");

    const changeInput = (e: any): void => {
        e.preventDefault();
        setInput(e.target.value);
    };

    const clickButtonAdd = (e: any): void => {
        e.preventDefault();

        setClick((prev): boolean => !prev);
        const date = Date.parse(new Date().toUTCString()) / 1000;

        if (input !== "") {
            initTask({
                id: date,
                name: input,
                description: "",
            });

            setInput("");
        } else if (valueOption !== "") {

            initTask({
                id: date,
                name: valueOption,
                description: "",
            });
            setValueOption("");
        }
    };

    const changeSelect = (e: any): void => {
        setValueOption(e.target.value);
    };

    return (
        <Form>
            {mainInput && click && <Input type="text" value={input} onChange={changeInput} placeholder="Введите заметку..." />}

            {!mainInput && click && (
                <Select onChange={changeSelect} name="">

                    <Option defaultValue="csdfsf"></Option>

                    {previousArrBlock.map((el: any, index: number): JSX.Element => {

                        return <Option key={index}>{el.name}</Option>;
                    })}
                </Select>
            )}

            <Button onClick={clickButtonAdd} bg={!click ? "none" : "#0079BF"} color={!click ? "#5E6C84" : "#FFFFFF"}>
                {!click ? "+Add card" : "Submit"}
            </Button>
        </Form>
    );
};
export default InputBlock;
