import React from "react";
import { useUser } from "../hooks/useUser";

function Page1() {
  const { username, email, someAction, anotherAction, asyncAction } = useUser();

  return (
    <>
      <p>{username}</p>
      <p>{email}</p>
      <button data-testid="button1" onClick={someAction}>
        Button 1
      </button>
      <button
        data-testid="button2"
        onClick={() => anotherAction(username, new Date().toISOString())}
      >
        Button 2
      </button>
    </>
  );
}

export default Page1;
