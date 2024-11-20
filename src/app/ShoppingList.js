import { useState } from 'react';
export default function ShoppingList({productos}){
    const [productosArray, setProductosArray] = useState(productos);

    function eliminarItem(index){
        setProductosArray(
            productosArray.filter((producto, indexFilter) => index != indexFilter)
        );
    }

    return <ul>
        {productosArray.map((producto, index) => (
            <li key={index}>
                <h2>{producto.nombre}</h2>
                <p>{producto.precio}</p>
                <button onClick={() => eliminarItem(index)}>Eliminar</button>
            </li>
        ))}
    </ul>;
}