import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Panier = () => {
  const navigate=useNavigate()
  const [cart, setCart] = useState([]);
  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
      <h1>MY collection</h1>


      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item} 
          </li>
        ))}
      </ul>
      <button onClick={()=>navigate('/')} >back to shop</button>

    </div>
  )
}

export default Panier
