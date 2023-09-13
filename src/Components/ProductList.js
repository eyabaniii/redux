import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const ProductList = () => {
    const Products=useSelector((state)=>state.ListReducer.ListProduct)
    const [total,setTotal]=useState(0)
    const navigate=useNavigate()

    console.log(total)
  return (
    <div>
      <Link to={"/AddProduct"} ><Button>Add New Product</Button></Link>
      <Link to={"/Movielist"} ><Button>Movie List</Button></Link>
      <Link to={"/TaskList"}><Button>Task Todo</Button></Link>
      <h1>Total price:<span>{total}</span></h1>
      <div onClick={()=>navigate("/panier")} ><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
</svg></div>
        {Products.map(Prod=><Product Prod={Prod} key={Prod.id} setTotal={setTotal} total={total} />)}
        
    </div>
  )
}

export default ProductList