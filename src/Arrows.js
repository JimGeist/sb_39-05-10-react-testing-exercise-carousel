import React from "react";
import "./Arrows.css";

function ArrowBackwards({ fx = "", disable = "" }) {

    if (typeof (fx) === "function") {
        // return enabled left arrow component with onClick function
        return (
            <i
                className={`fas fa-chevron-circle-left fa-2x`}
                onClick={fx}
                data-testid="left-arrow"
            />
        );
    } else {
        // return disabled left arrow component without onClick function
        return (
            <i
                className={`fas fa-chevron-circle-left fa-2x ${disable}`}
                data-testid="left-arrow"
            />
        );
    }

}

function ArrowForwards({ fx = "", disable = "" }) {

    if (typeof (fx) === "function") {
        // return enabled right arrow component with onClick function
        return (
            <i
                className={`fas fa-chevron-circle-right fa-2x`}
                onClick={fx}
                data-testid="right-arrow"
            />
        );
    } else {
        // return disabled right arrow component without onClick function
        return (
            <i
                className={`fas fa-chevron-circle-right fa-2x ${disable}`}
                data-testid="right-arrow"
            />
        );
    }


}

export { ArrowBackwards, ArrowForwards };
