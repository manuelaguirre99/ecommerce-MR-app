import React, { useState } from "react";

const ItemCount = ({stock, initial}) =>{

    const [count, setCount]= useState(initial)

    const sumar = () => {
        count < stock ?   setCount(count + 1) : alert("Superaste el limite de productos")
    }
    const restar = () => {
        count > initial ? setCount(count - 1) : alert("Sin stock")
    }

    const onAdd = () =>{
        alert(`Agregaste ${count} productos al carrito`)
    }

    return(
        <div> 
            <button onClick={sumar} className="btn Boton">+</button>
            <label>Cantidad: {count}</label>
            <button onClick={restar} className="btn Boton ">-</button> <br /> <br />
            <button className="btn  BotonAgregar" onClick={onAdd}>Agregar</button>
        </div>
    )
}

export default ItemCount