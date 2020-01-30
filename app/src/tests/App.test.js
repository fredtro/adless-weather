import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders application with empty state', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Adless Weather App/i);
    const emptyMessage = getByText(/Wow, such empty/i);
    expect(linkElement).toBeInTheDocument();
    expect(emptyMessage).toBeInTheDocument();
});
