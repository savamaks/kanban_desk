import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Router, MemoryRouter } from "react-router-dom";

describe("app", () => {
    it("components render ", () => {
        const { getByText, getByTestId } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText(/Awesome Kanban Board/i)).toBeInTheDocument();
        expect(screen.getByTestId("main")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toBeInTheDocument();
    });
});
