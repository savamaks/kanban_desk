import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
`;
const Button = styled.button`
    font-size: 25px;
    background: blue;
    width: max-content;
    align-self: center;
`;
const InputTextArea = styled.textarea`
    border: none;
    width: max-content;
    max-width: 100%;
`;



const FullTask = ({ fullTask, saveDes }: any): JSX.Element => {
    console.log(fullTask);

    const [description, setDescription] = useState(fullTask.description ? fullTask.description : "");

    const changeDescription = (e: any) => {
        // console.log(e.target.value);
        setDescription(e.target.value);
    };

    const saveDescription = (e:any) => {

        e.preventDefault()

        saveDes(description,fullTask.index)

    };

    if (fullTask.arr?.name) {
        // console.log(fullTask);

        return (
            <Container>
                <h1>{fullTask.arr.name}</h1>
                {/* <p>{fullTask.arr.nameBlock}</p>
                <p>{fullTask.arr.date}</p>
                <p>{fullTask.arr.description}</p> */}
                <InputTextArea onChange={changeDescription} name="" id="" defaultValue={description}></InputTextArea>
                <Button onClick={saveDescription}>ok</Button>
                <Button>X</Button>
            </Container>
        );
    } else {
        return <></>;
    }
};

export default FullTask;
