import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Page1 from '../pages/Page1';
import { useUser } from '../hooks/useUser';

jest.mock('../hooks/useUser');

describe('Testing a page that call a hook', () => {
  it('Mock constant', () => {
    (useUser as jest.Mock).mockReturnValue({
      username: 'calicc',
    });

    render(<Page1 />);
    expect(screen.getByText(/calicc/)).toBeVisible();
  });

  it('Mock function call', () => {
    const myFunction = jest.fn();
    (useUser as jest.Mock).mockReturnValue({
      someAction: myFunction,
    });
    render(<Page1 />);

    fireEvent.click(screen.getByTestId('button1'));

    expect(myFunction).toHaveBeenCalledTimes(1);
  });

  it('Mock function with parameters', () => {
    const myFunction = jest.fn();
    const now = '2020-05-10T10:13:08.000Z';
    const usernameId = 'calicc';
    jest.useFakeTimers().setSystemTime(new Date(now));
    (useUser as jest.Mock).mockReturnValue({
      username: usernameId,
      anotherAction: myFunction,
    });
    render(<Page1 />);

    fireEvent.click(screen.getByTestId('button2'));
    expect(myFunction).toHaveBeenCalledTimes(1);
    expect(myFunction).toHaveBeenCalledWith(usernameId, now);
  });

  it('Mock async Action', async () => {
    const myAsyncFunction = jest.fn(() => Promise.resolve(true));
    (useUser as jest.Mock).mockReturnValue({
      asyncAction: myAsyncFunction,
    });
    render(<Page1 />);

    fireEvent.click(screen.getByTestId('button3'));

    expect(myAsyncFunction).toHaveBeenCalledTimes(1);
  });
});
