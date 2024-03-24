import React, { useState } from 'react';
import { MyHookWithState2 } from '../hooks/usingState2';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Using multiples useState', () => {
  it('each state should have different values', () => {
    const expectedValue1 = 'ABC';
    const expectedValue2 = 'DEF';

    (useState as jest.Mock).mockImplementationOnce(() => [
      expectedValue1,
      jest.fn(),
    ]);
    (useState as jest.Mock).mockImplementationOnce(() => [
      expectedValue2,
      jest.fn(),
    ]);

    const { value1, value2 } = MyHookWithState2();

    expect(value1).toBe(expectedValue1);
    expect(value2).toBe(expectedValue2);
  });

  it('each state should have different setter', () => {
    const setStateMock1 = jest.fn();
    const setStateMock2 = jest.fn();

    (useState as jest.Mock).mockImplementationOnce(() => [
      '',
      setStateMock1,
    ]);
    (useState as jest.Mock).mockImplementationOnce(() => [
      '',
      setStateMock2,
    ]);

    const { action1, action2 } = MyHookWithState2();

    action1('ABC');
    expect(setStateMock1).toHaveBeenCalled();
    expect(setStateMock1).toHaveBeenCalledWith('ABC');

    action2('DEF');
    expect(setStateMock2).toHaveBeenCalled();
    expect(setStateMock2).toHaveBeenCalledWith('DEF');
  });
});