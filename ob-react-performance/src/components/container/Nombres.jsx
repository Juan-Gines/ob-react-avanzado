import React from 'react';
import GeneradorNombres from '../pure/GeneradorNombres';

const Nombres = () => {
    const names = ['Martín', 'Eric', 'Juan Ginés'];
    return (
        <div>
            <GeneradorNombres names={names}/>
        </div>
    );
}

export default Nombres;
