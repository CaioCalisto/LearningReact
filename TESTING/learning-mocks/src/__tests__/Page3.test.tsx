import React from 'react';
import { render, screen } from '@testing-library/react';
import Page3  from '../pages/Page3';
import { useTeam } from '../hooks/useTeam';

jest.mock('../hooks/useTeam');

describe('Calling hook with parameter', () => {
  test('passing parameter', () => {
    (useTeam as jest.Mock).mockImplementation((id: string) => ({
      name: id === '1' ? 'First Squad' : 'Second Squad',
    }));

    render(<Page3 />);

    expect(screen.getByText('First Squad')).toBeVisible();
  });
});