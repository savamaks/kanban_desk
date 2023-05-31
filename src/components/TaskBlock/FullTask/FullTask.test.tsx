import { getByRole, render, screen } from "@testing-library/react";
import FullTask from "./FullTask";
import { ElementArr } from "../../../type/type";
import { Context, defaultValue } from "../context";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("FullTask", () => {
    it("render element ", () => {
        const taskElement: ElementArr = { nameBlock: "Backlog", id: 1685361963, name: "task", description: "task item" };
        const { getByText } = render(<FullTask element={taskElement} indexElement={0} />);

        expect(getByText("task")).toBeInTheDocument()

    });
});
