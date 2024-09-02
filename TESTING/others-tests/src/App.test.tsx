import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('renders learn react link', async () => {
  render(<App />);

  expect(screen.getByText('0')).toBeVisible()

  const button = screen.getByRole('button');

  //fireEvent.click(button);
  //fireEvent.click(button);
  //fireEvent.click(button);
  //fireEvent.click(button);
  await userEvent.click(button);
  await userEvent.click(button);
  await userEvent.click(button);
  await userEvent.click(button);

  expect(screen.getByText('4')).toBeVisible()
});
