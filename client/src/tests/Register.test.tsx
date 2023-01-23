
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../components/Login';
import Register from '../components/Register';
import { registerUser } from '../services';
import {MockItem, MockUser} from './mockFetch';
import App from '../App'

jest.mock('../services.tsx', () => ({
    addItem: () =>(MockItem),
    registerUser: ()=>(MockUser)
  }))

  test('should appear from login', async () => {
    render(<App />)
    expect(screen.queryByText(`Don't have an account yet? Register here`)).not.toBeInTheDocument()
    const logBtn = screen.getByTestId('Loginbutton');
    fireEvent.click(logBtn);
    // expect(screen.queryByTestId('RegisterTitle')).not.toBeInTheDocument()
    const registerBtn = screen.getByText(`Don't have an account yet? Register here`)
    expect(registerBtn).toBeInTheDocument()
    fireEvent.click(registerBtn)
    const registerTitle = screen.getByText('have an account?', {exact: false})
    expect(registerTitle).toBeInTheDocument()

    
})

test('Form should cloe on click x', () => {
    render(<Register/>)
    fireEvent.click(screen.getByTestId('closeReg'))
    expect(screen.queryByTestId('RegisterTitle')).not.toBeInTheDocument()
})

test('Form should not submit without filled fields', () => {
    render(<Register/>)
    fireEvent.click(screen.getByTestId('registersub'))
    expect(screen.getByTestId('RegisterTitle')).toHaveStyle('visibility:visible')
})