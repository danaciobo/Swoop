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
  render(<AddItem setItems={() => {}} setFilteredItems={() => {}} items={[]}/>)
  const button = screen.getByText('Sell Now')
  expect(button.textContent).toEqual('Sell Now')
})

test('renders the form', () => {
  render(<AddItem setItems={() => {}} setFilteredItems={() => {}} items={[]} />);

  fireEvent.click(screen.getByText('Sell Now'));
  expect(screen.getByTestId('Title-1')).toBeInTheDocument();
  expect(screen.getByTestId('Description-1')).toBeInTheDocument();
  expect(screen.getByTestId('Category-1')).toBeInTheDocument();
  expect(screen.getByTestId('Price-1')).toBeInTheDocument();
  expect(screen.getByTestId('Quantity-1')).toBeInTheDocument();
  expect(screen.getByTestId('Location-1')).toBeInTheDocument();
  expect(screen.getByTestId('Image-1')).toBeInTheDocument();
  expect(screen.getByTestId('Add Item-1')).toBeInTheDocument();

});

test('closes form', () => {
  render(<AddItem setItems={() => {}} setFilteredItems={() => {}} items={[]} />);

  fireEvent.click(screen.getByText('Sell Now'));
  fireEvent.click(screen.getByTestId('Add Item-1'))
  expect(screen.queryByTestId('Title-1')).not.toBeInTheDocument();
  expect(screen.queryByTestId('Description-1')).not.toBeInTheDocument();
  expect(screen.queryByTestId('Category-1')).not.toBeInTheDocument();
  expect(screen.queryByTestId('Price-1')).not.toBeInTheDocument();
  expect(screen.queryByTestId('Quantity-1')).not.toBeInTheDocument();
  expect(screen.queryByTestId('Location-1')).not.toBeInTheDocument();
  expect(screen.queryByTestId('Image-1')).not.toBeInTheDocument();
  expect(screen.queryByTestId('Add Item-1')).not.toBeInTheDocument();

});


test('should call addItem and add the item input', async () => {

  render(<App />)
  const sellButton = screen.getByText('Sell Now')
  fireEvent.click(sellButton);
  const AddButton = screen.getByTestId('Add Item-1')
  fireEvent.click(AddButton);


  const grid = screen.getByTestId('itemCardGrid')
  expect(grid).toHaveTextContent('Seller: Dana C');
  // expect(screen.getByTestId('Description-1')).toHaveTextContent('description3');

})




// it('adds an item', async () => {
//   render(<App />)
//   fireEvent.click(screen.getByText('Sell Now'));

//   fireEvent.click(screen.getByTestId('Add Item-1'));

//  fireEvent.change(titleInput, { target: { value: 'item3' } });
//   fireEvent.change(descriptionInput, { target: { value: 'description3' } });
//   fireEvent.change(categoryInput, { target: { value: 'category3' } });
//   fireEvent.change(priceInput, { target: { value: '10' } });
//   fireEvent.change(quantityInput, { target: { value: '5' } });
//   fireEvent.change(locationInput, { target: { value: 'location3' } });
//   fireEvent.change(imageInput, { target: { files: [new File([], 'file.jpg', { type: 'image/jpeg' })] } });

//   fireEvent.submit(getByText('Add Item'));


//   expect(screen.getByText('category3'))
//   // mockFetch();

// });

export {}


