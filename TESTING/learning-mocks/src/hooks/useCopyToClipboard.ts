import React from 'react';

type CopyToClipboardTuple = [boolean, (text: string) => void];

export function useCopyToClipboard(): CopyToClipboardTuple {
  const [isCopied, setCopied] = React.useState(false);

  function handleCopy(text: string) {}

  return [isCopied, handleCopy];
}
