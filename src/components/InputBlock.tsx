import { useContext, useState } from "react";
import styled from "styled-components";
import SelectTask from "./SelectTask";
import { Context } from "./context";


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


const InputBlock = ({numberBlock,blockRef, mainInput }: any): JSX.Element => {
    const [input, setInput] = useState("");
    const [click, setClick] = useState(false);
    const [valueOption, setValueOption] = useState("");
    const init = useContext(Context)
    // console.log(init.dataMock[numberBlock]);

    //отслеживания изменения в поле ввода
    const changeInput = (e: any): void => {
        e.preventDefault();
        setInput(e.target.value);
    };

    //кнопка добавления заметки в блок
    const clickButtonAdd = (e: any): void => {
        e.preventDefault();

        setClick((prev): boolean => !prev);
        const date = Date.parse(new Date().toUTCString()) / 1000;

        if (input !== "") {
            init.initTask({
                nameBlock:blockRef.current.dataset.nameblock,
                date: date,
                name: input,
                description: "",
                arrBlock: init.dataMock[numberBlock],
                previousArrBlock: init.dataMock[numberBlock-1],
            });
            setInput("");
        } else if (valueOption !== "") {

            init.initTask({
                nameBlock:blockRef.current.dataset.nameblock,
                name: valueOption,
                arrBlock: init.dataMock[numberBlock],
                previousArrBlock: init.dataMock[numberBlock-1],

            });
            setValueOption("");
        }
    };

    //выбор из списка достурных задач в предыдущем блоке 
    const changeSelect = (e: any): void => {
        setValueOption(e.target.value);
    };

    return (
        <Form>
    
            {mainInput && click && <Input type="text" value={input} onChange={changeInput} placeholder="Введите заметку..." />}

            {!mainInput && click && <SelectTask changeSelect={changeSelect} numberBlock={numberBlock} />}
            <Button onClick={clickButtonAdd} bg={!click ? "none" : "#0079BF"} color={!click ? "#5E6C84" : "#FFFFFF"}>
                {!click ? "+Add card" : "Submit"}
            </Button>
        </Form>
    );
};
export default InputBlock;
