import React, { useState, useState as useStateMock } from 'react';
import { MyHookWithState } from '../hooks/usingState';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));
const setStateMock = jest.fn();

describe('Using State - only one', () => {
  it('props return initial value from state', () => {
    (useStateMock as jest.Mock).mockImplementation(() => [
      'caio',
      setStateMock,
    ]);
    const { value } = MyHookWithState();

    expect(value).toBe('caio');
  });

  it('props return different value after running method', () => {
    (useStateMock as jest.Mock).mockImplementation(() => [
      'caio',
      setStateMock,
    ]);
    const { value, changeValue } = MyHookWithState();
    changeValue();

    expect(setStateMock).toHaveBeenCalledWith('natalia');
  });
});
