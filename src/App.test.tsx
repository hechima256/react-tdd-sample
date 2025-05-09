import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
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

	it('APIレスポンスが表示されること', async () => {
		render(<App />);
		const apiResponse = await screen.findByText('Hello World');
		expect(apiResponse).toBeInTheDocument();
	});
});
