import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// Smoke Test -- does the Card render?
it("renders the Card without crashing", () => {
    render(<Card />);
});

// Card snapshot test
it("card matches previous snapshot", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});

