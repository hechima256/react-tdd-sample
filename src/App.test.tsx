import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('トップ画面', () => {
	it('Vite + Reactのタイトルが表示されること', () => {
		render(<App />);
		const heading = screen.getByText('Vite + React');
		expect(heading).toBeInTheDocument();
	});

	it('カウンターの最初の値が0であること', () => {
		render(<App />);
		const countButton = screen.getByText('count is 0');
		expect(countButton).toBeInTheDocument();
	});

	it('カウンターをクリックすると値が1増えること', async () => {
		render(<App />);
		const countButton = screen.getByText('count is 0');
		await userEvent.click(countButton);

		expect(screen.getByText('count is 1')).toBeInTheDocument();
	});
});
