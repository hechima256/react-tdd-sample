import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
	it('renders Vite + React heading', () => {
		render(<App />);
		const heading = screen.getByText('Vite + React');
		expect(heading).toBeInTheDocument();
	});

	it('renders count button with initial value of 0', () => {
		render(<App />);
		const countButton = screen.getByText('count is 0');
		expect(countButton).toBeInTheDocument();
	});

	it('increments count when button is clicked', async () => {
		render(<App />);
		const countButton = screen.getByText('count is 0');
		// await userEvent.click(countButton);
		fireEvent.click(countButton);
		expect(screen.getByText('count is 1')).toBeInTheDocument();
	});

	it('renders Vite and React logos', () => {
		render(<App />);
		const viteLogo = screen.getByAltText('Vite logo');
		const reactLogo = screen.getByAltText('React logo');
		expect(viteLogo).toBeInTheDocument();
		expect(reactLogo).toBeInTheDocument();
	});
});
