import React from "react";
import { render } from "@testing-library/react";
import { ArrowBackwards, ArrowForwards } from "./Arrows";

const goBackward = () => 1 - 1;
const goForward = () => 1 + 1;

// Smoke Test -- does ArrowBackwards without props render?
it("renders the backwards arrow without crashing", () => {
    render(<ArrowBackwards />);
});

// Smoke Test -- does ArrowBackwards with fx render?
it("renders the backwards arrow with onClick fx without crashing", () => {
    render(<ArrowBackwards fx={goBackward} />);
});

// ArrowBackwards disabled snapshot test
it("Disabled ArrowBackwards matches snapshot", () => {
    const { asFragment } = render(<ArrowBackwards fx="" disable="Arrows-disabled" />);
    expect(asFragment()).toMatchSnapshot();
});

it("Enabled ArrowBackwards with onClick fx matches snapshot", () => {
    const { asFragment } = render(<ArrowBackwards fx={goBackward} disable="" />);
    expect(asFragment()).toMatchSnapshot();
});

// Smoke Test -- does ArrowForwards without props render?
it("renders the forwards arrow without crashing", () => {
    render(<ArrowForwards />);
});

// Smoke Test -- does ArrowBackwards with fx render?
it("renders the forwards arrow with onClick fx without crashing", () => {
    render(<ArrowForwards fx={goForward} />);
});

// ArrowForwards disabled snapshot test
it("Disabled ArrowForwards matches snapshot", () => {
    const { asFragment } = render(<ArrowForwards fx="" disable="Arrows-disabled" />);
    expect(asFragment()).toMatchSnapshot();
});

it("Enabled ArrowForwards with onClick fx matches snapshot", () => {
    const { asFragment } = render(<ArrowForwards fx={goForward} disable="" />);
    expect(asFragment()).toMatchSnapshot();
});