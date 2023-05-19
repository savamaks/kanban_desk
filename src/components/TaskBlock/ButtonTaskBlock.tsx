import styled from "styled-components";

const Button = styled.button<{ bg: boolean }>`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #5e6c84;
    background: ${(props) => (props.bg ? "none" : "white")};
`;

const ButtonTaskBlock = ({ stateButton }: any): JSX.Element => {
    if (stateButton) {
        return <Button bg={true}>+Add card</Button>;
    } else {
        return <></>;
    }
};
export default ButtonTaskBlock;
