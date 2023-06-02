import styled from "styled-components";
import FullTask from "../TaskBlock/FullTask/FullTask";
import { Routes, Route } from "react-router-dom";
import ContainerBlock from "../TaskBlock/ContainerBlock";
import { ElementArr, MainType } from "../../type/type";

const MainContainer = styled.main`
    grid-area: main;
    background: #0079bf;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px 26px;
`;

const Main = ({  dataArr }: MainType): JSX.Element => {

    
    return (
        <MainContainer data-testid="main">
            <Routes>
                <Route path="/" element={<ContainerBlock />} />
                {dataArr.map((taskBlock: any, index: number) => {
                    return dataArr[index].arrTask.map((task: ElementArr, index: number) => {
                        return <Route path={`/tasks/id${task.id}`} element={<FullTask element={task} indexElement={index} />} />;
                    });
                })}
            </Routes>
        </MainContainer>
    );
};
export default Main;
