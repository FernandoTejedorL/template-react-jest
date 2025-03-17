import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('is in the document', () => {
	render(<Button data-testid='styled-button' />);

	const button = screen.getByTestId('styled-button');

	expect(button).toBeInTheDocument();
});
