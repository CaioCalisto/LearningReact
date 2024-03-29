import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import React from 'react';
import Page2 from '../pages/Page2';

jest.mock('../hooks/useCopyToClipboard');

describe('Hook with Tupple', () => {
  it('show isCopied or not in the screen', async () => {
    (useCopyToClipboard as jest.Mock).mockReturnValueOnce([true, jest.fn()]);
    render(<Page2 />);

    await waitFor(() => {
      expect(screen.getByText(/Copied is true/)).toBeVisible();
    });

    (useCopyToClipboard as jest.Mock).mockReturnValueOnce([false, jest.fn()]);
    render(<Page2 />);

    await waitFor(() => {
      expect(screen.getByText(/Copied is false/)).toBeVisible();
    });
  });

  it('call handleCopy when button is clicked', () => {
    const handleCopyMock = jest.fn();
    (useCopyToClipboard as jest.Mock).mockReturnValueOnce([
      true,
      handleCopyMock,
    ]);
    render(<Page2 />);

    fireEvent.click(screen.getByTestId('copy-button'));

    expect(handleCopyMock).toHaveBeenCalledWith('caio');
  });
});
