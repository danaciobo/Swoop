import AddItem from '../components/AddItem';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import {MockItem} from './mockFetch';

// beforeEach(() => {
//    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
// })

// afterEach(() => {
//    jest.restoreAllMocks()
// });


jest.mock('../services.tsx', () => ({
  addItem: () =>(MockItem)
}))

test('should render addItem Component', () => {
  render(<AddItem items={[]}/>)
  const button = screen.getByText('Sell Now')
  expect(button.textContent).toEqual('Sell Now')
})

test('renders the form', () => {
  render(<AddItem items={[]} />);

  fireEvent.click(screen.getByText('Sell Now'));
  expect(screen.getByTestId('Title-1')).toHaveStyle('visibility: visible');
  expect(screen.getByTestId('Description-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Category-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Price-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Quantity-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Location-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Image-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Add Item-1')).toHaveStyle('visibility:visible');

});

test('x closes form', () => {
  render(<AddItem items={[]} />);

  fireEvent.click(screen.getByText('Sell Now'));
  fireEvent.click(screen.getByTestId('closebutton'))
  expect(screen.queryByTestId('Title-1')).not.toHaveStyle('display:none');
  expect(screen.queryByTestId('Description-1')).not.toHaveStyle('display:none');
  expect(screen.queryByTestId('Category-1')).not.toHaveStyle('display:none');
  expect(screen.queryByTestId('Price-1')).not.toHaveStyle('display:none');
  expect(screen.queryByTestId('Quantity-1')).not.toHaveStyle('display:none');
  expect(screen.queryByTestId('Location-1')).not.toHaveStyle('display:none');
  expect(screen.queryByTestId('Image-1')).not.toHaveStyle('display:none');
  expect(screen.queryByTestId('Add Item-1')).not.toHaveStyle('display:none');

});

test('form does not close on submit if no forms filled', () => {
  render(<AddItem items={[]} />);

  fireEvent.click(screen.getByText('Sell Now'));
  fireEvent.click(screen.getByTestId('Add Item-1'))
  expect(screen.getByTestId('Title-1')).toHaveStyle('visibility: visible');
  expect(screen.getByTestId('Description-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Category-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Price-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Quantity-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Location-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Image-1')).toHaveStyle('visibility:visible');
  expect(screen.getByTestId('Add Item-1')).toHaveStyle('visibility:visible');

});

test('Form closes on submission of data', () => {
  render(<AddItem items={[]} />);

  fireEvent.click(screen.getByText('Sell Now'));

  fireEvent.change(screen.getByTestId('title-input'), {target: {value: 'aaaaaaaaaaa'}});
  fireEvent.change(screen.getByTestId('desc-input'), {target: {value: 'aaaaaaaaaaa'}})
  fireEvent.change(screen.getByTestId('cat-input'),{target: {value: 'Clothes'}})
  fireEvent.change(screen.getByTestId('price-input'), {target: {value: '10'}})
  fireEvent.change(screen.getByTestId('quant-input'), {target: {value: '5'}})
  fireEvent.change(screen.getByTestId('location-input'), {target: {value: 'AAAAAAAAAAAA'}})
  fireEvent.change(screen.getByTestId('Image-1'), {target: {value: ''}})

  fireEvent.click(screen.getByTestId('closebutton'))
  expect(screen.queryByTestId('Title-1')).toHaveStyle('display:none');
  expect(screen.queryByTestId('Description-1')).toHaveStyle('display:none');
  expect(screen.queryByTestId('Category-1')).toHaveStyle('display:none');
  expect(screen.queryByTestId('Price-1')).toHaveStyle('display:none');
  expect(screen.queryByTestId('Quantity-1')).toHaveStyle('display:none');
  expect(screen.queryByTestId('Location-1')).toHaveStyle('display:none');
  expect(screen.queryByTestId('Image-1')).toHaveStyle('display:none');
  expect(screen.queryByTestId('Add Item-1')).toHaveStyle('display:none');

});


export {}


