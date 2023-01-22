/* eslint-disable jest/valid-expect */
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { MockItem, MockUser } from './mockFetch';


test('display first layer navbar correctly', () => {
  render(<Navbar setItems={() => { }}
    setFilteredItems={() => { }} items={[MockItem]}
    setUser={() => { }} user={MockUser}
  />)
  expect(screen.getByTestId('swooplogo')).toBeInTheDocument()
  expect(screen.getByTestId('searchbar')).toBeInTheDocument()
})

test('renders sell now button', () => {
   render(<Navbar setItems={() => { }}
   setFilteredItems={() => { }} items={[MockItem]}
   setUser={() => { }} user={MockUser} />);

  const sellNow = screen.getByText('Sell Now', {exact: false})
  expect(sellNow).toBeInTheDocument();

})

test('renders login button', () => {
   render(<Navbar setItems={() => { }}
   setFilteredItems={() => { }} items={[MockItem]}
   setUser={() => { }} user={MockUser} />);
//we need to have another look at this
  const login = screen.getAllByText('Log In/ Register', {exact: false})
  expect(login[0]).toBeInTheDocument()

})









