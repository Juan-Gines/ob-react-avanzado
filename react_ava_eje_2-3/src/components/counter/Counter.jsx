import React from 'react';
import useCounter from '../../hooks/useCounter';

const Counter = () => {

    const counter = useCounter();

    const handleIncrement = () => {
        counter.increment();
    }
    const handleDecrement = () => {
        counter.decrement();
    }
    const handleReset = () => {
        counter.reset();
    }
    return (
        <div>
            <h1> Ejemplo useCounter </h1>
            <p> Contador: {counter.count}</p>
            <button onClick={handleIncrement}>Aumentar</button>
            <button onClick={handleDecrement}>Disminuir</button>
            <button onClick={handleReset}>Resetear</button>
        </div>
    );
}

export default Counter;
