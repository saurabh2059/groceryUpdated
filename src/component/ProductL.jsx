import React from 'react'
import ProductData from '../Data/ProductData'

function ProductL(props) {
    var cat=ProductData.filter((a)=>a.category==props.yy)
  return (
   
    <>
      <div className="big-featured-slider py-4">
        <div className="d-flex justify-content-between">
            <h5>{props.yy}</h5>
        </div>
        <div className="text-center">
            <div className="row">
            {cat.slice(0,4).map((a)=>(
                <div className="col-lg-3 border bg-white my-1">
                    <img className="w-100" src={a.thumbnail}  />
                    <p><b>{a.title}</b></p>
                    <div classname="price"><del aria-hidden="true"><span classname="woocommerce-Price-amount amount"><bdi><span classname="woocommerce-Price-currencySymbol">£</span>22.00</bdi></span></del> <ins><span classname="woocommerce-Price-amount amount"><bdi><span classname="woocommerce-Price-currencySymbol">£</span>20.00</bdi></span></ins></div>
                   
                </div>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductL





// {cat.slice(0,8).map((a)=>(
//     <div classname="col-lg-3 border bg-white">
//     <img classname="w-100" src={a.thumbnail} alt="" />
//     <p>{a.title}</p>
    

// ))}
