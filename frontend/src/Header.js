import React from 'react';

export default function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
    // propriedades no react sao semelhantes aos atributos no HTML
    // eles sao passados como argumentos para a função
    // quando queremos injetar javascript no JSX, usamos de chaves '{}'
}
