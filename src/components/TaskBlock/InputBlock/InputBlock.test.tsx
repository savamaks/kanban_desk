import { getByRole, render, screen } from "@testing-library/react";
import InputBlock from "./InputBlock";
import userEvent from "@testing-library/user-event";

describe("InputBlock", () => {
    it("проверка кнопки и появления поля ввода", () => {
        const { getByText } = render(<InputBlock numberBlock={0} blockRef={null} mainInput={true} />);

        //нашли кнопку +Add card и нажали
        const buttonAddCard = getByText("+Add card");
        expect(buttonAddCard).toBeInTheDocument();
        userEvent.click(buttonAddCard);

        //нашли поле ввода после того как кнопка нажата
        const inputTask = screen.getByPlaceholderText("Введите заметку...");

        expect(inputTask).toBeEnabled();

        userEvent.type(inputTask, "");

        //нашли кнопку Submit и нажали
        const buttonSubmit = getByText("Submit");
        expect(buttonSubmit).toBeInTheDocument();

        userEvent.click(buttonSubmit);
    });

    it("проверка кнопки и появления меню опций", () => {
        const { getByText, getByRole } = render(<InputBlock numberBlock={0} blockRef={null} mainInput={false} />);

        //нашли кнопку +Add card и нажали
        const buttonAddCard = getByText("+Add card");
        expect(buttonAddCard).toBeInTheDocument();
        userEvent.click(buttonAddCard);

        //в списке выбрали элемент
        userEvent.selectOptions(getByRole("combobox"), "one");
        const selectElement: any = getByText("-Select a Task-");
        expect(selectElement.selected).toBeTruthy();

        //нашли кнопку Submit и нажали
        const buttonSubmit = getByText("Submit");
        expect(buttonSubmit).toBeInTheDocument();

        userEvent.click(buttonSubmit);
    });
});
