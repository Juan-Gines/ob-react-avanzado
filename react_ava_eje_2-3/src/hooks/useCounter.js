import { useState } from "react";

const useCounter = (value = 0) => {

    const [count, setCount] = useState(value);

    // Increment count +1
    const increment = () => {
        setCount(count +1);
    };

    // Decrement count -1
    const decrement = () => {
        setCount(count -1);
    };

    // Reset count = 0
    const reset = () => {
        setCount(0);
    };

    return {
        count, increment, decrement, reset,
    };
}

export default useCounter;