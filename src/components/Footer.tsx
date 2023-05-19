import styled from "styled-components";
const Container = styled.section`
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
const Footer = (): JSX.Element => {
    return (
        <Container>
            <TasksCount>
                <Title>Active tasks: </Title>
                <Title>Finished tasks: </Title>
            </TasksCount>
            <UserName>
                <Title>Kanban board by </Title>
            </UserName>
        </Container>
    );
};
export default Footer;
