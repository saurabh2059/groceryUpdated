import React from 'react'
import ProductData from '../Data/ProductData'
import ProductList from '../component/ProductList'
import ProductL from '../component/ProductL'


function Home() {

  return (
   
   <>

  <section className="banner py-3">
    <div className="container">
      <div className="row">
      <ProductList tt="smartphones"/>
        <div className="col-lg-9">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="size" src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/slider2n-1.jpg" alt="..." />
              </div>
              <div className="carousel-item">
                <img className="size" src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/slider-n1-1.jpg" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home">
    <div className="container">
      <div className="row">
       <ProductList tt="laptops"/>
        <div className="col-lg-9">
          <div className="bg-white p-4 rounded">
            <div className="row g-5">
              <div className="col-lg-3">
                <div className="row align-items-center border-end g-2">
                  <div className="col-lg-3">
                    <i className="fa fa-plane featured " />
                  </div>
                  <div className="col-lg-9">
                    <h6 style={{color: '#7fba32'}}>Free Shipping</h6>
                    <p>On all order over</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row align-items-center border-end g-2">
                  <div className="col-lg-3">
                    <i className="fa fa-diamond featured " />
                  </div>
                  <div className="col-lg-9">
                    <h6 style={{color: '#7fba32'}}>Join Risk Free</h6>
                    <p>
                      30 days refund</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row align-items-center border-end g-2">
                  <div className="col-lg-3">
                    <i className="fa fa-coffee featured " />
                  </div>
                  <div className="col-lg-9">
                    <h6 style={{color: '#7fba32'}}>Support 24/7</h6>
                    <p>
                      Online 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row align-items-center g-2 ">
                  <div className="col-lg-3">
                    <i className="fa fa-anchor featured " />
                  </div>
                  <div className="col-lg-9">
                    <h6 style={{color: '#7fba32'}}>100% Safe</h6>
                    <p>
                      Secure shopping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductL yy="groceries"/>
          <ProductL yy="fragrances"/>
          
          
         
          <div className=" py-3 rounded my-3 d-flex justify-content-around align-items-center  " style={{backgroundColor: '#7fba32'}}>
            <div className=" fs-5" style={{color: 'white'}}>Excepteur qui officia deserunt mollit anim id est laborum.</div>
            <button type="button" className="btn btn-outline-success bg-white mb-0" style={{color: 'green'}}>Call to Action</button>
          </div>
          {/* <div class="row  justify-content-center">
              <div class="col-lg-9">
                  <img class="w-100 h-25 object-fit-cover" src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/06/post1.jpg" alt="">
              </div>
            </div> */}
        </div>
      </div>
    </div>
  </section>


</>

    
  )
}

export default Home


// npm install react-router-dom@6   