import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Button from './index';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with or without a text', () => {
    act(() => {
        render(<Button />, container);
    });

    expect(container.textContent).toBe('');

    act(() => {
        render(<Button text="Jenny" />, container);
    });
    expect(container.textContent).toBe('Jenny');

    act(() => {
        render(<Button text="Margaret" />, container);
    });
    expect(container.textContent).toBe('Margaret');
});
