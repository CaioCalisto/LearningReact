import React from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

function Page2() {
  const [isCopied, handleCopy] = useCopyToClipboard();

  return (
    <>
      {isCopied ? 
        <h1>Copied is true</h1>
       : 
        <h1>Copied is false</h1>
      }
      <button data-testid='copy-button' onClick={() => handleCopy('caio')}></button>
    </>
  );
}

export default Page2;
