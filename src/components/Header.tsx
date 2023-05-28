import styled from "styled-components";
import ava from "../icons/user-avatar.svg";
import arrowButton from "../icons/Vector.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContainerHeader = styled.header`
    position: relative;
    grid-area: header;
    background: #0067a3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    @media (max-width: 768px) {
        justify-content: flex-end;
    }
`;
const Title = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 33px;
    color: #ffffff;
    @media (max-width: 768px) {
        display: none;
    }
`;

const BoxAvatar = styled.div`
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
const Button = styled.button<{ transform: string }>`
    width: 12px;
    height: 8px;
    background-image: url(${arrowButton});
    background-position: center;
    background-size: cover;
    transform: ${(props) => props.transform};
`;

const Text = styled.p`
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    &:hover {
        text-decoration: underline;
    }
`;

const UserMenu = styled.div`
    position: absolute;
    width: 134px;
    background: #ffffff;
    border-radius: 5px;
    padding: 0 8px;
    top: 80px;
    right: 10px;
`;

const Header = (): JSX.Element => {
    const [click, setClick] = useState(false);

    const buttonClick = (): void => {
        setClick((prev): boolean => !prev);
    };

    return (
        <ContainerHeader data-testid='header'>
            <Title>Awesome Kanban Board</Title>

            <BoxAvatar>
                <Avatar src={ava} />
                <Button onClick={buttonClick} transform={click ? "rotate(0deg)" : "rotate(180deg)"}></Button>
            </BoxAvatar>
            {click && (
                <UserMenu>
                    <Text onClick={buttonClick}>Profile</Text>
                    <Text onClick={buttonClick}>Log Out</Text>
                </UserMenu>
            )}
        </ContainerHeader>
    );
};

export default Header;
