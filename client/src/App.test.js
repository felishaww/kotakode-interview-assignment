import React from 'react';
import { render, queryByAttribute, userEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const getById = queryByAttribute.bind(null, 'id');

test('render task input', () => {
  const dom = render(<App />);
  const inputEl = getById(dom.container, "taskInput");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});


