import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({productos}) =>{
    return(
        productos.map(productos => <ItemCard productos={productos} key={productos.id} />)
    )}



export default ItemList