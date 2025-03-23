import React from 'react';
import Button from '../src/components/Button';

describe('Button component', () => {
  it('renders with provided text', () => {
    const { getByText } = render(
      <Button text="Clique aqui" color="blue" onPress={() => {}} />
    );
    expect(getByText("Clique aqui")).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Button text="Enviar" color="green" onPress={mockFn} />
    );
    fireEvent.press(getByText("Enviar"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
