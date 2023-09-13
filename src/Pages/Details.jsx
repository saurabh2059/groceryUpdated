import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../component/ProductList'
import ProductData from '../Data/ProductData'

function Details() {
  let {id}=useParams()
  let nn=ProductData.find((a)=>a.id==id)
  return (
    

    <>
  <section className="banner py-3">
  <div className="container">
    <div className="row">
      <ProductList tt="groceries"/>
      <div className="col-lg-9">
        
        <div className="big-featured-slider py-4">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1"><img src={nn.thumbnail} /></div>
                    <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                    <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                    <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                    <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                    <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                    <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                    <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                    <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  </ul>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{nn.title}</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>
                  <p className="product-description">{nn.description}</p>
                  <h4 className="price">current price: <span>${nn.price}</span></h4>
                
                  
                  <h5 className="colors">colors:
                    <span className="color orange not-available" data-toggle="tooltip" title="Not In store" />
                    <span className="color green" />
                    <span className="color blue" />
                  </h5>
                  <div className="action">
                    <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                    <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
                  </div>
                </div>
              </div>
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

export default Details
