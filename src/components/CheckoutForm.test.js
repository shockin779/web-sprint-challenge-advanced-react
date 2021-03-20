import React, { useReducer } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeaderEl = screen.getByText('Checkout Form');

    expect(formHeaderEl).toBeDefined();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const fNameInput = screen.getByLabelText(/First Name/i);
    const lNameInput = screen.getByLabelText(/Last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitButtonEl = screen.getByRole('button', {name: 'Checkout'});

    userEvent.type(fNameInput, 'Sean');
    userEvent.type(lNameInput, 'Hockin')
    userEvent.type(addressInput, '864 E 350 N')
    userEvent.type(cityInput, 'Layton')
    userEvent.type(stateInput, 'UT')
    userEvent.type(zipInput, '84041')

    userEvent.click(submitButtonEl)

    const successDivEl = screen.getByTestId('successMessage');

    expect(successDivEl).toBeDefined();

});
