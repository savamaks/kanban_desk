import styled from "styled-components";
import ava from "../icons/user-avatar.svg";
import arrowButton from "../icons/Vector.svg";

const Container = styled.section`
    grid-area: header;
    background: #0067a3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;
const Title = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 33px;
    color: #ffffff;
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;
const Avatar = styled.img`
    background: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
`;
const Button = styled.button`
    width: 12px;
    height: 8px;
    background-image: url(${arrowButton});
    background-position: center;
    background-size: cover;
`;
const Header = (): JSX.Element => {
    return (
        <Container>
            <Title>Awesome Kanban Board</Title>
            <Box>
                <Avatar src={ava} />
                <Button />
            </Box>
        </Container>
    );
};

export default Header;
