import React from "react";
import Comp1 from "../Comp1";

const Counter = ({ value }) => {
    return (
        <div>
            <Comp1 {...{ value }} />
        </div>
    );
};

export default Counter;
