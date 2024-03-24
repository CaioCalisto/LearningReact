import React, { useState } from 'react';
import { MyHookWithState3 } from '../hooks/usingState3';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Using states: array', () => {
  it('get the array being passed via mock', () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, jest.fn()];
    React.useState.mockImplementation(useStateMock);
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [[''], setStateMock])

    const { action } = MyHookWithState3();
    action()

    const parameters = setStateMock.mock.calls[0];
    const updateFunction = parameters[0];
    const arrayValues: [] = updateFunction([]);

    expect(arrayValues).toContain('A')
    expect(arrayValues).toContain('B')
    expect(arrayValues).toContain('C')
    expect(arrayValues).toContain('D')
    expect(arrayValues).toContain('Z')
  });
});
