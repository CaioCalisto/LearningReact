import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Page1 from '../pages/Page1';
import {useUser} from '../hooks/useUser';

const useUserMock = jest.fn()
jest.spyOn(global, useUser).mockImplementation(useUserMock)

describe('Hook 1 - mock for all tests', () => {
  it('Mock constant 1', () => {
    const response = {
      anotherAction(id: string, timestamp: string): boolean {
        return false;
      }, asyncAction(): Promise<boolean> {
        return Promise.resolve(false);
      }, email: '', someAction(): void {
      },
      username: 'calicc',
    };

    (useUserMock as jest.Mock).mockReturnValue(response);

    render(<Page1 />);
    expect(screen.getByText(/calicc/)).toBeVisible();
  });
});