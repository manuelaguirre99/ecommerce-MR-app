import React from "react"
import ItemCount from "../ItemCount/ItemCount"


const ItemCard = ({productos}) => {


return(
  <div className="container">
      <div className="card w-50 mt-5" key={productos.id}>
          <div className="card-header">
              <h3>{`${productos.nombre}`}</h3>
          </div>
          <div className="card-body">
              {productos.foto}
          </div>
          <div className="card-footer">
              <ItemCount/>
          </div>
      </div>

  </div>
)}

export default ItemCard