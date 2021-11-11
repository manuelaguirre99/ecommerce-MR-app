import React from "react"
import ItemCount from "../ItemCount/ItemCount"


const ItemCard = () => {
const product = [
    {nombre: "Ki-Mono", foto: <img className="imgItem" src="./imgs/KiMono2.jpeg" width="200px" height="350px" alt="" /> , cantidad:4, id: 1},
    {nombre: "Ki-Mono 2", foto: <img className="imgItem" src="../imgs/KiMono1.jpeg" width="200px" height="350px" alt="" />, cantidad:6, id: 2}
]

return(
    <div className="itemList">
        <div className="itemList">
        {product.map(product => <div className="itemBox" key={product.id}><h3 className="ItemTitle">{product.nombre}</h3>{product.foto} {<ItemCount initial={1} stock={product.cantidad}/>}</div>)}
        </div>
    </div>
)}

export default ItemCard