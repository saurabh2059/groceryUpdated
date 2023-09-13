import React from 'react'
import { useParams , Link } from 'react-router-dom'
import ProductData from '../Data/ProductData'

function ProductList(props) {
    var smartphones=ProductData.filter((a)=>a.category==props.tt)
  return (
    <>
        <div className="col-lg-3">
          <div className="bg-white p-3 rounded ">
            <h5>{props.tt}</h5>
            {smartphones.slice(0,4).map((a)=>(
 <div className="row align-items-center my-3" key={a.id}>
 <div className="col-lg-5">
 <Link to={`/detail/${a.id}`} >
   <img className="w-100" src={a.thumbnail} alt />
   </Link>
 </div>
 <div className="col-lg-7">
   <h6>{a.title}</h6>
   <p>£{a.price}</p>
 </div>
</div>

            ))}
           
          </div>
        </div>
    </>
  )
}

export default ProductList
