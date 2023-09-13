import React from 'react'
import { useParams , Link } from 'react-router-dom'
import ProductList from '../component/ProductList'
import ProductData from '../Data/ProductData'
import Details from '../Pages/Details'

function Category() {
  let{cid}=useParams()
  
  var qq=ProductData.filter((a)=>a.category==cid)
  return (
    <>
   

     <section className="banner py-3">
  <div className="container">
    <div className="row">
      <ProductList tt="groceries"/>
      <div className="col-lg-9">
        <div className="big-featured-slider py-4">
          <div>
            <h5> {cid}</h5> 
            <p>
              Showing 1–16 of 33 results</p>
          </div>
          <div className=" text-center">
            <div className="row">
            {qq.map((a)=>(
              <div className="col-lg-3 border bg-white">
               <Link to={`/detail/${a.id}`} >
                <img className="w-100" src={a.thumbnail} alt />
                 <p>{a.title}</p>
                  <div className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">£</span>22.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">£</span>20.00</bdi></span></ins></div>
                  </Link> 
                 </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Category
