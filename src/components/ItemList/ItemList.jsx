import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({product}) =>{
    return(
        product.map(product => <ItemCard product={product} key={product.id} />)
    )}



export default ItemList