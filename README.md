# sb_39-05-10-react-testing-exercise-carousel

Develop further tests for a React application that includes an image carousel component. The carousel component also contains bugs that require fixes.

**NOTES**: `@fortawesome` was missing and had to get installed via `npm install @fortawesome/fontawesome-free` (and yes, fort NOT font). By the way, [**N**uclear **P**owered **M**arshmallows](https://www.npmjs.com/package/@fortawesome/fontawesome-free) instead of **N**ode **P**ackage **M**anager is quite funny! The spelled out version of **NPM** changes each time you visit the page!


## Technology Stack
- **Front-end**: ReactJS
- **Back-end**: n/a

## Assignment Details

**Part 1: Demo the App & Read the Code** involved reading and running the code to gain familiarity.

**Part 2: Smoke and Snapshot tests** involved writing **smoke** and **snapshot** tests for the **_Card_** and **_Carousel_** components.

**Part 3: Bug! Left arrow** involved writing event tests to ensure the left arrow works correctly. The left arrow was broken and the test will fail until the **Carousel** component was fixed.

**Part 4: Bug! Exhausting the image array** involved fixing the hard crashes that occurred because the left and right arrow buttons were still enabled when at the beginning or end, respectively, of the photo list.


**Enhancements**
- WHEN WILL I LEARN TO BE LEARY OF THE LAST PART OF THE ASSIGNMENT?? Ugh. These are always the ones where I get trapped or encounter things I hate and have an unexplainable compulsion to fix -- like a display shift as an element disappears and reappears -- even in an 'exercise'!! ANYWAY, the left and right buttons were fixed and the initial attempt had the left and right arrow buttons disappearing when there were no images to the left (beginning of images) or to the right (end of images). I did not like it because of the way the carousel shifted whenever the left button appeared or disapeared. The fix meant changing the arrow buttons to components and passing in values to enable and disable them. This also meant additional tests for the new `Arrows` component and changing tests that assumed the left or right button would is not on the page when at the beginning or end of images. The solution worked, but warnings were generated when the code ran because a "" was getting assigned as the onClick function -- it did not matter because the button was disabled, but I did not like the warning messages for the component. More logic was added only ensure a function, fx, was passed but it resulted in returning either the `<i>` component with an onClick or returning the `<i>` component without the onClick and with the `Arrows-disabled` class. I had no luck getting a ternary to work.

**Difficulties**
- I had no luck getting a ternary to work to use onClick=fx when fx is a function or use nothing when fx is not a function. This stumble meant that 2 versions of each arrow are possible -- one with a onClick because a function was passed and one without onClick. And this occurred for both left and right buttons as well, and I feel an unnecessary conplexity was introduced to fix something asthetic. I am pleased with the result, but I wonder whether a better, simpler approach is possible. I also thought about passing in 'left' and 'right' as props in addition to the disable class and function but felt that a distinct `ArrowForwards` and `ArrowBackwards` components were clearer.


