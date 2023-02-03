import React from 'react'
import ItemListContainer from './ItemListContainer'


const CartWidget = () => {
  return (
    <div>
    
    <span className="material-symbols-outlined">shopping_cart </span>
    <ItemListContainer cantidad={5}/>
    
    </div>
  )
}

export default CartWidget


