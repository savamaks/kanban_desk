import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { DataArrType } from "../../type/type";

const amoutTask = (): void => {};

const dataArr: DataArrType = [
    {
        title: "Backlog",
        arrTask: [
            {
                numberBlock: 1,
                nameBlock: "string",
                mainInput: true,
                title: "string",
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
        render(<Main  dataArr={dataArr} />);
       
        expect(screen.getByText(/Backlog/i)).toBeInTheDocument();
        expect(screen.getByText(/Ready/i)).toBeInTheDocument();
        expect(screen.getByText(/InProgress/i)).toBeInTheDocument();
        expect(screen.getByText(/Finished/i)).toBeInTheDocument();
    });
});
