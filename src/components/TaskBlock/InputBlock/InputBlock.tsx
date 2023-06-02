import { useContext, useState } from "react";
import styled from "styled-components";
import SelectTask from "../SelectTask";
import { Context } from "../context";

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
const Button = styled.button<{colorActive:string, cursor: string, bg: string; color: string }>`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    cursor: ${(props) => props.cursor};
    color: ${(props) => props.color};
    background: ${(props) => props.bg};
    border-radius: 5px;
    &:hover {
        &:enabled {
           color: ${(props) => props.colorActive};
        }
    }
   
`;

interface InputBlock {
    numberBlock:number, blockRef:any, mainInput:boolean
}


const InputBlock = ({ numberBlock, blockRef, mainInput }: InputBlock): JSX.Element => {
    const [input, setInput] = useState("");
    const [click, setClick] = useState(false);
    const [valueOption, setValueOption] = useState("");
    const {initTask,dataArr} = useContext(Context);

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
            initTask({
                nameBlock: blockRef.current.dataset.nameblock,
                id: date,
                name: input,
                description: "",
                arrBlock: dataArr[numberBlock],
                previousArrBlock: dataArr[numberBlock - 1],
            });
            setInput("");
        } else if (valueOption !== ""&&valueOption !== "one") {
            console.log({
                nameBlock: blockRef.current.dataset.nameblock,
                name: valueOption,
                arrBlock: dataArr[numberBlock],
                previousArrBlock: dataArr[numberBlock - 1],
            });
            initTask({
                nameBlock: blockRef.current.dataset.nameblock,
                name: valueOption,
                arrBlock: dataArr[numberBlock],
                previousArrBlock: dataArr[numberBlock - 1],
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
            {mainInput && click && <Input data-testid='inputTask' type="text" value={input} onChange={changeInput} placeholder="Введите заметку..." />}

            {!mainInput && click && <SelectTask changeSelect={changeSelect} numberBlock={numberBlock} />}
            <Button
                data-testid='inputTaskButton'
                disabled={dataArr[numberBlock - 1]?.arrTask.length === 0 ? true : false}
                onClick={clickButtonAdd}
                cursor={dataArr[numberBlock - 1]?.arrTask.length === 0 ? 'auto' : 'pointer'}
                bg={!click ? "none" : "#0079BF"}
                color={!click ? "#5E6C84" : "#FFFFFF"}
                colorActive={!click ? "#0079BF" : "#FFFFFF"}
            >
                {!click ? "+Add card" : "Submit"}
            </Button>
        </Form>
    );
};
export default InputBlock;
