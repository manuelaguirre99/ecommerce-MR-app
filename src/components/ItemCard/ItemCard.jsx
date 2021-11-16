import React from "react"
import ItemCount from "../ItemCount/ItemCount"


const ItemCard = ({product}) => {


return(
  <div className="container">
      <div className="card w-50 mt-5" key={product.id}>
          <div className="card-header">
              <h3>{`${product.nombre}`}</h3>
          </div>
          <div className="card-body">
              {product.foto}
          </div>
          <div className="card-footer">
              <ItemCount/>
          </div>
      </div>

  </div>
)}

export default ItemCard