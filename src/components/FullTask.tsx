import { useContext, useState } from "react";
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

const arr = [
    {
        title: "backlog",
        issues: [
            {
                id: "12345",
                name: "Sprint bugfix",
                description: "",
            },
        ],
    },
    {
        title: "ready",
        issues: [
            {
                id: "1",
                name: "S",
                description: "",
            },
        ],
    }
];






const FullTask = ({ fullTask, saveDes }: any): JSX.Element => {
    // console.log(fullTask);
    const init = useContext(Context);

    const [description, setDescription] = useState("");

    const changeDescription = (e: any) => {
        setDescription(e.target.value);
    };

    const close = (e: any): void => {
        e.preventDefault();

        if (description === "") {
            init.initFullTask({}, 0);
        } else {
            saveDes(description, fullTask);
            setDescription("");
            init.initFullTask({}, 0);
        }
    };
    if (fullTask.arr?.name) {
        return (
            <Container>
                <Link to="/tasks/"></Link>
                <h1>{fullTask.arr.name}</h1>
                <p>{fullTask.arr.nameBlock}</p>
                <InputTextArea
                    onChange={changeDescription}
                    placeholder="Введите текст заметки...."
                    defaultValue={fullTask.arr.description}
                ></InputTextArea>

                <Button onClick={close} title="Закрыть">
                    X
                </Button>
            </Container>
        );
    } else {
        return <></>;
    }
};

export default FullTask;
