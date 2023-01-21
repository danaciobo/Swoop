/* eslint-disable jest/valid-expect */
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MockItem, MockUser } from './mockFetch';


// eslint-disable-next-line @typescript-eslint/no-unused-expressions
test('display first layer navbar correctly', () => {
  render(<Navbar setItems={() => { }}
    setFilteredItems={() => { }} items={[MockItem]}
    setUser={() => { }} user={MockUser}
  />)
  expect(screen.getByTestId('swooplogo')).toBeInTheDocument()
  expect(screen.getByTestId('searchbar')).toBeInTheDocument()
})

test('renders AddItem', () => {
   render(<Navbar setItems={() => { }}
   setFilteredItems={() => { }} items={[MockItem]}
   setUser={() => { }} user={MockUser} />);

  const sellNow = screen.getByText('Sell Now', {exact: false})
  expect(sellNow).toBeInTheDocument();

    const logIn = screen.getByTestId('hello')
  expect(logIn).toBeInTheDocument();
})


// describe('Navbar', () => {
//   it('renders AddItem', () => {
//     const { getByText } = render(<Navbar setItems={() => { }}
//     setFilteredItems={() => { }} items={[MockItem]}
//     setUser={() => { }} user={MockUser} />);
//     expect(getByText(/add item/i)).toBeInTheDocument();
//   });







