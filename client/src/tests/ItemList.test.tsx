/* eslint-disable jest/valid-expect */
import { render, screen, fireEvent } from '@testing-library/react';
import ItemList from '../components/ItemsList';
import { MockItem } from './mockFetch';


// eslint-disable-next-line @typescript-eslint/no-unused-expressions
test('display itemList Container', () => {
  render(<ItemList items={[MockItem]}/>)
  expect(screen.getByTestId('item3')).toBeInTheDocument()
})