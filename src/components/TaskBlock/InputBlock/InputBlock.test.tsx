import { fireEvent, render, queryByText, screen, getByTestId } from "@testing-library/react";
import InputBlock from "./InputBlock";
import userEvent from "@testing-library/user-event";

// describe("input", function () {
//     it("", function () {
//         const onSubmit = jest.fn();
//         const { getByTestId } = render(<InputBlock onSubmit={onSubmit} />);

//         //извлечение инпут
// const inputTask = getByTestId('inputTask');

//          //извлечение кнопки
//          const inputTaskButton = getByTestId("inputTaskButton")
//          expect(inputTaskButton).toBeEnabled()
//          userEvent.click(inputTaskButton)
        
//      });
//  });
test("Error element: not to be in the component by default", async () => {
    render(<InputBlock />);
    expect(screen.getByText("+Add card")).toBeInTheDocument();
    userEvent.click(screen.getByText("+Add card"));
    
});
