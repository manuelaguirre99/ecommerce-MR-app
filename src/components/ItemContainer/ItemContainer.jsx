import React from "react";
import ItemList from "../ItemList/ItemList";


const ItemContainer = () =>{


    const product = [
        {nombre: "Ki-Mono", id: 1, foto: <img className="imgItem" src="./imgs/KiMono2.jpeg" width="200px" height="350px" alt="" /> , cantidad:4, id: 1},
        {nombre: "Ki-Mono 2", id: 2, foto: <img className="imgItem" src="../imgs/KiMono1.jpeg" width="200px" height="350px" alt="" />, cantidad:6, id: 2}
    ]
    
    const getFetch = new Promise ((resolve,reject)=> {
        const condition = true
        if (condition){
            setTimeout(()=>{
                resolve(product)
            },2000)
        } else {
            setTimeout(()=>{
                reject('404 not found')
            },2000)
        }
    })

    const [productos,setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
        .then(res =>{
            setProductos(res)})
        .catch(err =>{console.log(err)})
        .finally(()=> setLoading(false))
    })

    return(
        <ItemList productos ={productos} />
    )
    }

    export default ItemContainer