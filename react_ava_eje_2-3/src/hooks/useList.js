import { useState, useForceUpdate } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };

    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // List is Empty ? true / false
    const isEmpty = () => value.length === 0;

    // Clear remove all tasks
    const clear = () => setValue([]);

    // Sort order all tasks
    const sortable = () =>  {
        setValue([].concat(...value).sort());    
    };

    // Reverse all tasks
    const invert = () => setValue([].concat(...value).reverse());

    // TODO: Develop more functions for lists

    return {
        value, setValue, push, remove, isEmpty, clear, sortable, invert
    };
};

export default useList;
