import { type } from "os";
import styled from "styled-components";
const Container = styled.footer`
    grid-area: footer;
    background: #0067a3;
    display: flex;
    gap: 36px;
    padding: 0 20px;
    justify-content: space-between;
`;

const TasksCount = styled.div`
    display: flex;
    gap: 36px;
`;

const UserName = styled.div``;

const Title = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
`;

interface Footer  {
    amountActive: number;
    amountFinished: number;
};
const Footer = ({ amountActive=0, amountFinished=0 }: any): JSX.Element => {
    return (
        <Container data-testid="footer">
            <TasksCount>
                <Title>Active tasks: {amountActive} </Title>
                <Title>Finished tasks: {amountFinished}</Title>
            </TasksCount>
            <UserName>
                <Title>Kanban board by </Title>
            </UserName>
        </Container>
    );
};
export default Footer;
