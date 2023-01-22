import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../components/Footer';
import { MockItem, MockUser } from './mockFetch';

test('display footer item on screen', () => {
  render(<Footer />)
  const footer = screen.getByTestId('footer');
  expect(footer).toBeInTheDocument()
})

test('renders the correct text including the current year', () => {
  render(<Footer />)
  const footer = screen.getByTestId('footer');
  const currentDate = new Date().getFullYear()
  expect(footer.textContent).toEqual(`All © copy rights are reserved to Dana Tech ${currentDate}`)
})

it('uses the correct background color', () => {
  render(<Footer />)
  const footer = screen.getByTestId('footer');
  expect(footer).toHaveStyle('background-color: #EBE6DD');
});