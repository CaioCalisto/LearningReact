import { fireEvent, render, screen } from '@testing-library/react';
import MyForm from './MyForm';

describe('Testing my Form behaviours with MUIq', () => {
  it('I just want to change the MUI text box value', () => {
    render(<MyForm />);
    var myValue = 'whatever the value I want'

    // the MUI element wrap others element, se we need to get the <input />
    var textBox = screen.getByTestId('myTextBox').querySelector('input')
    fireEvent.change(textBox, { target: { value: myValue}})

    expect(screen.getByDisplayValue(myValue)).toBeInTheDocument()
  });
});