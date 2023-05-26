import {   useContext, useState } from "react";
import styled from "styled-components";
import cross from "../icons/close.svg";
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

const FullTask = (): JSX.Element => {
    // console.log('ren full');
    const init = useContext(Context);

    const [description, setDescription] = useState("");

    const changeDescription = (e: any):void => {
        setDescription(e.target.value);
    };

    const close = (e: any): void => {
        e.preventDefault();

        if (description === "") {
        } else {
            init.saveDes(description);
            setDescription("");
        }
    };
    if (init.fullTask.arr?.name) {
        return (
            <Container>
                <Title>{init.fullTask.arr.name}</Title>
                <InputTextArea
                    onChange={changeDescription}
                    placeholder="Введите текст заметки...."
                    defaultValue={init.fullTask.arr.description}
                ></InputTextArea>
                <Button onClick={close}>
                    <Link style={{ textDecoration: "none" }} to="/">
                    {"\u2716"}
                    </Link>
                </Button>
            </Container>
        );
    } else {
        return <></>;
    }
};

export default FullTask;
