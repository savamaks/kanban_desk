import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2? семья= Roboto:ital,wght@0,400;0,500;1,400 & display=swap");
    max-width: 1235px;
    height: 100vh;
    display: grid;
    justify-content: center;
    margin: 0 auto;
    grid-template: minmax(55px, auto) 1fr minmax(70px, auto) / 1fr;
    grid-template-areas: "header" "main" "footer";
`;

const App = (): JSX.Element => {
    return (
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    );
};

export default App;
