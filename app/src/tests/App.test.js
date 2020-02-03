import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import App from '../App';
import { mockResponse } from "./mockdata";
import { search } from '../api';

jest.mock('../api');

afterEach(() => {
    cleanup();
});

test('renders application with empty state', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Adless Weather App/i);
    const emptyMessage = getByText(/Wow, such empty/i);
    expect(linkElement).toBeInTheDocument();
    expect(emptyMessage).toBeInTheDocument();
});

test('renders weather data', async () => {
    search.mockReturnValue(Promise.resolve(mockResponse));

    const { getByLabelText, findByTestId, getByText } = render(<App />);
    const input = getByLabelText(/Search/i);

    fireEvent.change(input, { target: { value: 'berlin' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 13 });

    const resultTable = await waitForElement(() =>
        // getByRole throws an error if it cannot find an element
        findByTestId('result-table'),
    );

    expect(resultTable).toBeInTheDocument();
    expect(getByText('Berlin')).toBeInTheDocument();
});
