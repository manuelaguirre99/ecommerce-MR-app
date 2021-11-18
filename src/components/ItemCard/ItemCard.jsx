import React from "react"
import ItemCount from "../ItemCount/ItemCount"


const ItemCard = ({productos}) => {


return(
  <div className="container">
      <div className="itemBox" key={productos.id}>
          <div className="itemTitle">
              <h3>{`${productos.nombre}`}</h3>
          </div>
          <div className="imgItem">
              {productos.foto}
          </div>
          <div className="card-footer">
              <ItemCount/>
          </div>
      </div>

  </div>
)}

export default ItemCard