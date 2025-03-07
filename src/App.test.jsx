import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links and buttons', () => {
	render(<App />); // ✅ Eliminamos el BrowserRouter duplicado

	// Verificar los enlaces
	expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
	expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();

	// Verificar los botones
	expect(screen.getByRole('button', { name: /one/i })).toBeInTheDocument();
	expect(screen.getByRole('button', { name: /two/i })).toBeInTheDocument();
	expect(screen.getByRole('button', { name: /three/i })).toBeInTheDocument();
});
