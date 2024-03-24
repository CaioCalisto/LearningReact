import React from 'react';
import { MyHookWithState2 } from '../hooks/usingState2';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Using State: multiples', () => {
  it('each state should have different values', () => {
    const useStateMock = (useState) => [useState, jest.fn()];
    (React.useState as jest.Mock).mockImplementation(useStateMock);
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => ['caio', jest.fn()])
      .mockImplementationOnce(() => ['natalia', jest.fn()]);

    const { value1, value2 } = MyHookWithState2();

    expect(value1).toBe('caio');
    expect(value2).toBe('natalia');
  });

  it('each state should have different setter', () => {
    const setStateMock1 = jest.fn();
    const setStateMock2 = jest.fn();
    const useStateMock = (useState) => [useState, jest.fn()];
    (React.useState as jest.Mock).mockImplementation(useStateMock);
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => ['caio', setStateMock1])
      .mockImplementationOnce(() => ['natalia', setStateMock2]);

    const { action1, action2 } = MyHookWithState2();

    action1('ABC');
    expect(setStateMock1).toHaveBeenCalled();
    expect(setStateMock1).toHaveBeenCalledWith('ABC');

    action2('DEF');
    expect(setStateMock2).toHaveBeenCalled();
    expect(setStateMock2).toHaveBeenCalledWith('DEF');
  });
});
