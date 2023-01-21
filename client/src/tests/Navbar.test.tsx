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

  // const logIn = screen.getByTestId('hello')
  // expect(logIn).toBeInTheDocument();
})

// test('search bar content change when it is given text input', () => {
//   render(<Navbar setItems={() => { }}
//   setFilteredItems={() => { }} items={[MockItem]}
//     setUser={() => { }} user={MockUser} />);

//   const searchBar = screen.getByTestId('searcher')
//   const testValue = 'test';

//   console.log("can i see this", searchBar)
//   fireEvent.change(searchBar, { target: { value: testValue } })
//   expect(searchBar.textContent).toBeEqual(testValue)

// })









