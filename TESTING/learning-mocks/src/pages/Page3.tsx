import React from 'react';
import { useTeam } from '../hooks/useTeam';

export default function Page3() {
  const { name } = useTeam('1');

  return (
    <>
      {name}
    </>
  );
}
