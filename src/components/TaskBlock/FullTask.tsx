import { useContext, useState } from "react";
import styled from "styled-components";
import cross from "../icons/closeFullTask.svg";
import { Link } from "react-router-dom";
import { Context } from "./context";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 22px 28px;
`;
const Button = styled.button`
    position: absolute;
    font-size: 25px;
    width: max-content;
    right: 20px;
    top: 20px;
`;

const InputTextArea = styled.textarea`
    margin-top: 35px;
    border: none;
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    resize: none;
`;

const Title = styled.h1`
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
`;

const FullTask = ({element,indexElement}:any): JSX.Element => {
    const init = useContext(Context);

    const [description, setDescription] = useState("");

    const changeDescription = (e: any): void => {
        setDescription(e.target.value);
    };
    //при закрытии развернутой заметки текс сохраняется
    const closeFullTask = (e: any): void => {
        console.log(element);
        e.preventDefault();

        if (description === "") {
        } else {
            init.saveNewTask(description,element,indexElement);
            setDescription("");
        }
    };
        return (
            <Container>
                <Title>{element.name}</Title>
                <InputTextArea
                    onChange={changeDescription}
                    placeholder="Введите текст заметки...."
                    defaultValue={element.description}
                ></InputTextArea>
                <Button onClick={closeFullTask}>
                    <Link style={{ textDecoration: "none" }} to="/">
                        {"\u2716"}
                    </Link>
                </Button>
            </Container>
        );
    } 


export default FullTask;
