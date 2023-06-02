import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { DataArrType } from "../../type/type";
import { Routes,MemoryRouter } from "react-router";

const amoutTask = (): void => {};

const dataArr: DataArrType = [
    {
        title: "Backlog",
        arrTask: [
            {
                nameBlock: "Backlog",
                id: 1685386424,
                name: "апр",
                description: "123",
            },
        ],
    },
    {
        title: "Ready",
        arrTask: [],
    },
    {
        title: "InProgress",
        arrTask: [],
    },
    {
        title: "Finished",
        arrTask: [],
    },
];
describe("Main render", () => {
    it("task block", () => {
        render(
            <MemoryRouter>
                <Main dataArr={dataArr} />
            </MemoryRouter>
        );

        expect(screen.getByText(/Backlog/i)).toBeInTheDocument();
        expect(screen.getByText(/Ready/i)).toBeInTheDocument();
        expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
        expect(screen.getByText(/Finished/i)).toBeInTheDocument();
    });
});
