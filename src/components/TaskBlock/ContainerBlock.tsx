import TaskBlock from "./TaskBlock";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    background: none;
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: start;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;


const ContainerBlock = (): JSX.Element => (
    <Container data-testid='taskblock'>
        <TaskBlock  numberBlock={0} nameBlock={"Backlog"} mainInput={true} title={"Backlog"} />
        <TaskBlock numberBlock={1} nameBlock={"Ready"} mainInput={false} title={"Ready"} />
        <TaskBlock numberBlock={2} nameBlock={"InProgress"} mainInput={false}  title={"In Progress"} />
        <TaskBlock numberBlock={3} nameBlock={"Finished"} mainInput={false} title={"Finished"} />
    </Container>
);
export default ContainerBlock