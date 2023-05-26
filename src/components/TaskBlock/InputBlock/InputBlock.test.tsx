import { fireEvent, render } from "@testing-library/react";
import InputBlock from "./InputBlock";

describe("input", function () {
    it("", function () {
        const onSubmit = jest.fn();
        const { getByTestId } = render(<InputBlock onSubmit={onSubmit} />);

        //извлечение инпут
        const inputTask = getByTestId("inputTask");
        //извлечение кнопки
        const inputTaskButton = getByTestId("inputTaskButton");

        expect(inputTaskButton).toBeEnabled();
        
        fireEvent.click(inputTaskButton);

        fireEvent.change(inputTask,{target:{value:'Иван'}})
        const expec:any = 'Иван'
        expect(onSubmit).toHaveBeenCalledWith('Иван')
    });
});
