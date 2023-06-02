import { getByRole, render, screen } from "@testing-library/react";
import FullTask from "./FullTask";
import { ElementArr } from "../../../type/type";
import { Context, defaultValue } from "../context";
import React from "react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("FullTask", () => {
    it("render element ", () => {
        const taskElement: ElementArr = { nameBlock: "Backlog", id: 1685361963, name: "task", description: "task item" };

        const { getByText, getByTestId } = render(
            <MemoryRouter>
                <FullTask element={taskElement} indexElement={0} />
            </MemoryRouter>
        );

        expect(getByText(`${taskElement.name}`)).toBeInTheDocument();
        
        expect(getByText(`${taskElement.description}`)).toBeInTheDocument();
        expect(getByTestId("closeFullTask")).toBeInTheDocument();

    });
});
