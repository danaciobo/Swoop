import { render, screen, fireEvent, getByPlaceholderText, getByLabelText } from '@testing-library/react';
import Login from '../components/Login';
import App from '../App';
import { MockItem, MockUser } from './mockFetch';

jest.mock('../services.tsx', () => ({
    addItem: () =>(MockItem),
    registerUser: ()=>(MockUser)
  }))

test('should appear from clicking LOGINREG', async () => {
  render(<App />)
  expect(screen.queryByText(`Don't have an account yet? Register here`)).not.toBeInTheDocument()
  const logRegBtn = screen.getByTestId('Loginbutton');
  fireEvent.click(logRegBtn);
  const LoginButton = screen.getByTestId(`Loginbutton`)
  expect(LoginButton).toBeInTheDocument()
})


// test('Login screen should dissapear when logged in', async () => {
//   render(<Login setUser={() => { }} />)
//   const LoginPortal = screen.getByText(`Don't have an account yet? Register here`)
//   expect(LoginPortal).toBeInTheDocument()

//   expect(screen.queryByText('Already have an account? sign in')).not.toBeVisible()
//   // const logRegBtn = screen.getByTestId('Loginbutton');
//   // fireEvent.click(logRegBtn);
//   // expect(LoginPortal).toBeInTheDocument()
//   // fireEvent.click(screen.getByTestId('closeForm'))
//   // // const LoginButton = screen.getByTestId(`LoginbuttonAccess`)
//   // // fireEvent.click(LoginButton)
//   // expect(LoginPortal).not.toBeInTheDocument()
// })

// test('Form should close on click x', () => {
//   render(<Login setUser={() => { }} />)
//   const closeButton = screen.getByTestId('closeForm')
//   fireEvent.click(closeButton)
//   const LoginPortal = screen.queryByText(`Don't have an account yet? Register here`)
//   expect(LoginPortal).not.toBeInTheDocument()
// })

// test('Email and password fields update state on change', () => {
//   render(<Login setUser={() => {}} />);
//   fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
//   fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });

//   expect(getByLabelText('Email').value).toBe('test@example.com');
//   expect(getByLabelText('Password').value).toBe('password');
// });

// test('Email and password fields update state on change', () => {
//   render(<Login setUser={() => {}} />);
//   fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
//   fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });

//   expect(screen.getByLabelText('Email')).toBe('test@example.com');
//   expect(screen.getByLabelText('Password')).toBe('password');
// });