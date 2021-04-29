import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('Renders Todo List Correctly', () => {
  const { getByText } = render(<TodoList tasks={[
    {
      id: 1,
      task: "masak ikan",
    },
    {
      id: 2,
      task: "minum air",
    },
    
  ]} />);
  const linkElement = getByText(/masak ikan/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = getByText(/minum air/i);
  expect(linkElement).toBeInTheDocument();
});
