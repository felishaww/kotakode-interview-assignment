import React from 'react';
import { render, queryByAttribute, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pekerjaan Rumah Yang Perlu Dilakukan/i);
  expect(linkElement).toBeInTheDocument();
});

const getById = queryByAttribute.bind(null, 'id');

test('render task input', () => {
  const dom = render(<App />);
  const inputEl = getById(dom.container, "taskInput");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});

test("pass valid task to test input value", () => {
  const dom = render(<App />);
  const inputEl = getById(dom.container, "taskInput");
  fireEvent.change(inputEl, {target: {value: 'Tidur'}});
  expect(inputEl.value).toBe('Tidur');
})


