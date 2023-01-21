
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Register from '../components/Register';
import {MockItem} from './mockFetch';

jest.mock('../services.tsx', () => ({
    addItem: () =>(MockItem)
  }))

test('Form should cloe on click x', () => {
    render(<Register/>)
    fireEvent.click(screen.getByTestId('closeReg'))
    expect(screen.getByTestId('RegisterTitle')).toHaveStyle('visibility:hidden')
})

test('Form should not submit without filled fields', () => {
    render(<Register/>)
    fireEvent.click(screen.getByTestId('registersub'))
    expect(screen.getByTestId('RegisterTitle')).toHaveStyle('visibility:visible')
})