import '@testing-library/jest-dom';
import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { server } from '../mocks/node';

expect.extend(matchers);

beforeAll(() => {
	server.listen();
});
afterAll(() => {
	server.close();
});

afterEach(() => {
	server.resetHandlers();
	cleanup();
});
