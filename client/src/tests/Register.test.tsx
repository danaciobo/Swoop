
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../components/Register';
import {MockItem, MockUser} from './mockFetch';


jest.mock('../services.tsx', () => ({
    addItem: () =>(MockItem),
    registerUser: ()=>(MockUser)
  }))



test('Renders correctly', () => {
    render(<Register/>)
    expect(screen.getByText('Already have an account? Sign in')).toBeInTheDocument()
})

test('closes when x is clicked', ()=> {
    render(<Register/>)
    const closeBtn = screen.getByTestId('closeReg');
    fireEvent.click(closeBtn)
    expect(screen.queryByText('Already have an account? Sign in')).not.toBeVisible()
})

test('Form should not submit without filled fields', () => {
    render(<Register/>)
    fireEvent.click(screen.getByTestId('registersub'))
    expect(screen.getByText('Already have an account? Sign in')).toBeVisible()
})

test('form should close when submitted with data', () => {
    render(<Register />);
    const emailInput = screen.getByTestId("email-input");
    const firstNameInput = screen.getByTestId("first-input");
    const lastNameInput = screen.getByTestId("last-input");
    const phoneNumberInput = screen.getByTestId("phone-input");
    const passwordInput = screen.getByTestId("pass-input");
    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(firstNameInput, { target: { value: "Test" } });
    fireEvent.change(lastNameInput, { target: { value: "User" } });
    fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    const form = screen.getByTestId("registerForm");
    fireEvent.submit(form);
    expect(screen.queryByTestId('RegisterTitle')).not.toBeVisible();
});
