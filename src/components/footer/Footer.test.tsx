import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("footer test", () => {
    
        const { getByText } = render(<Footer amountActive={0} amountFinished={0} />);
        expect(screen.getByText(/Active tasks:/i)).toBeInTheDocument();
        expect(screen.getByText(/Finished tasks:/i)).toBeInTheDocument();
    
   
});
