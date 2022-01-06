import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

it('f1', () => {
  const {getByText} = render(<MyComponent arr={products} category="פירות"/>);
  expect(getByText('בקטגוריה זו מוצרים רבים')).toBeInTheDocument();
});

it('f2', () => {
  const {getByText} = render(<MyComponent arr={products} category="פירות"/>);
  expect(getByText('בקטגוריה זו מוצרים רבים')).toBeNull();
});

test('f3', () => {
  const { container } = render(<MyComponent arr={products} category="פירות"/>)
  expect(container.querySelectorAll('li').length===6)
})