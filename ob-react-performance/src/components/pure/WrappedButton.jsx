import React from 'react';

const WrappedButton = (props) => {
    return (
        <button
            onClick={()=>{
                props.click()
            }}>
            {props.label}
        </button>
    );
}

export const Button=React.memo(WrappedButton);
