import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ColorButton from "./ColorButton"

beforeEach(() => render(<ColorButton></ColorButton>));

test('initial button color', () => {
    const button = screen.getByRole('button', {
        name: /Change to blue/i
    });

    expect(button).toHaveStyle({ backgroundColor: "red" });
    expect(button).toHaveClass("ui button");
});

test("click button change to from red to blue", () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveStyle({ backgroundColor: "blue" });
    expect(button).toHaveTextContent("Change to red");

});