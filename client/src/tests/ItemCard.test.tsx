import ItemCard from "../components/ItemCard";
import { render, screen, fireEvent } from '@testing-library/react';
import { MockItem } from "./mockFetch";
import moment from "moment";
test('Accepts and displays Item properties', () => {
    render(<ItemCard item = {MockItem}/>)
    expect(screen.getByTestId('CardTitle')).toHaveTextContent('item3');

    fireEvent.click(screen.getByTestId('ExpandButton'))

    expect(screen.getByText('Description', {exact: false})).toHaveTextContent('Description: description3');
    expect(screen.getByText('Seller', {exact: false})).toHaveTextContent('Seller: John D');
    expect(screen.getByText('Category', {exact: false})).toHaveTextContent('Category: category3');
    expect(screen.getByText('£', {exact: false})).toHaveTextContent('£10');
    expect(screen.getByText('Location', {exact: false})).toHaveTextContent('Location: location3');
    expect(screen.getByText('Added', {exact: false})).toHaveTextContent(`Added:${' ' + moment(MockItem.date_added).format('MMMM Do YYYY')}`);

})