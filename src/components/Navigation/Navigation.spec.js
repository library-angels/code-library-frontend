import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

function MyButton() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <button type="button" onClick={decrement}>
                -
            </button>
            <p>{count}</p>
            <button type="button" onClick={increment}>
                +
            </button>
        </div>
    );
}

test('renders a message', () => {
    const { getByText } = render(<MyButton initial={0} />);

    const incrementButton = getByText('+');
    const decrementButton = getByText('-');
    const clickCount = getByText('0');

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(clickCount).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(clickCount.textContent).toEqual('1');

    fireEvent.click(decrementButton);
    expect(clickCount.textContent).toEqual('0');
});
