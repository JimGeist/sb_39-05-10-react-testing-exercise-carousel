import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// Smoke Test -- does the Carousel render?
it("renders the carousel without crashing", () => {
  render(<Carousel />);
});

// Carousel snapshot test
it("matches previous snapshot", () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { queryByTestId, queryByAltText, getByText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // expect the image counter to show 'Image 2 of 3.'
  expect(getByText("Image 2 of 3.")).toBeInTheDocument();

  // move back to the first image in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show again
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();

  // expect the image counter to show 'Image 1 of 3.' 
  expect(getByText("Image 1 of 3.")).toBeInTheDocument();

});

it("should not have a backwards button / left arrow when on the first image", function () {
  const { queryByTestId, getByText } = render(<Carousel />);

  // expect the image counter to show 'Image 1 of 3.' 
  expect(getByText("Image 1 of 3.")).toBeInTheDocument();

  // expect a disabled left arrow / cannot move backwards
  expect(queryByTestId("left-arrow")).toBeInTheDocument();
  expect(queryByTestId("left-arrow")).toHaveClass("Arrows-disabled");

  // expect a right arrow / ability to move forwards
  expect(queryByTestId("right-arrow")).toBeInTheDocument();
  expect(queryByTestId("right-arrow")).not.toHaveClass("Arrows-disabled");

});

it("should have a disabled forward button / right arrow when on the last image", function () {
  const { queryByTestId, getByText } = render(<Carousel />);

  // expect the image counter to show 'Image 1 of 3.' 
  expect(getByText("Image 1 of 3.")).toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the image counter to show 'Image 2 of 3.' 
  expect(getByText("Image 2 of 3.")).toBeInTheDocument();

  // expect an enabled left and right arrow
  expect(queryByTestId("left-arrow")).toBeInTheDocument();
  expect(queryByTestId("left-arrow")).not.toHaveClass("Arrows-disabled");
  expect(queryByTestId("right-arrow")).toBeInTheDocument();
  expect(queryByTestId("right-arrow")).not.toHaveClass("Arrows-disabled");

  // move forward in the carousel
  fireEvent.click(rightArrow);

  // expect the image counter to show 'Image 3 of 3.' 
  expect(getByText("Image 3 of 3.")).toBeInTheDocument();

  // expect a left arrow and right arrow, right arrow disabled.
  expect(queryByTestId("left-arrow")).toBeInTheDocument();
  expect(queryByTestId("left-arrow")).not.toHaveClass("Arrows-disabled");
  expect(queryByTestId("right-arrow")).toBeInTheDocument();
  expect(queryByTestId("right-arrow")).toHaveClass("Arrows-disabled");

});
