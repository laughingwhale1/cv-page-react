import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Box from './Box';
import userEvent from '@testing-library/user-event';

jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn(),
    useSelector: () => jest.fn(),
}));

test('contains about me text', () => {
    render(<Router><Box title={'About me'} /></Router>);
    expect(screen.getByText(/About me/)).toBeInTheDocument();
})