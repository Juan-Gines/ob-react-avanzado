import React, { PureComponent } from 'react'


function MiComponente(props){
    return(
        <h1>Componente memoizado</h1>
    )
}

function propsComparaison(prevProps, nextProps){
    //se comparan los props y si cambiaron mucho se renderiza de nuevo
    //Si no se usa el cache del componente
}

export const EjemploComponent = React.memo(MiComponente,propsComparaison)
