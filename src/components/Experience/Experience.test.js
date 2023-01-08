import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Experience from './Experience';
import userEvent from '@testing-library/user-event';
import {
	expData,
} from "../texts";

jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn(),
    useSelector: () => jest.fn(),
}));

test('contains about me text', () => {
    render(<Router><Experience data={expData} /></Router>);
    expect(screen.getByText(/Experience/)).toBeInTheDocument();
})