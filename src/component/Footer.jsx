import React from 'react'

function Footer() {
  return (
    <>
     <footer className="py-3  my-3 bg-white">
  <div className="container">
    <div className="row px-4">
      <div className="col-lg-4">
        <div className="div d-flex gap-3">
          <p>Orders</p>
          <p>Downloads</p>
          <p> Account details</p>
        </div>
        <img className="w-25" src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/logo.png" alt />
        <p className="py-4 w-75">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <img className="w-75" src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/06/download-app-footer-image.png" alt />
        {/* <div class="div d-flex">
              <img src="" alt="">
          </div> */}
      </div>
      <div className="col-lg-2">
        <h5>Products
        </h5>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img className="w-100" src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/06/organicc-cheeries.png" alt />
          </div>
          <div className="col-lg-7">
            <h5>Organic Cheeries</h5>
            <p>
              £21.00</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img className="w-100" src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/06/organicc-cheeries.png" alt />
          </div>
          <div className="col-lg-7">
            <h6>Organic Cheeries</h6>
            <p>
              £21.00</p>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <h5>Categories</h5>
        <div className>
          <p>
          </p><p>   Beverages</p>
          <p>  Dairy Products</p>
          <p> FoodGrains &amp; Oil</p>
          <p />Personal Care<p />
          <p />Pet Care<p />
          <p />Vegetables &amp; Fruits<p />
        </div>
      </div>
      <div className="col-lg-4">
        <img className="w-75" src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/payment.png" alt />
        <h5 className="py-2">Contact Details</h5>
        <p>    Address: 3548 Columbia Mine Road,</p>
        <p>   Wheeling, West Virginia,</p>
        <p>  26003</p>
        <p> Contact : 304-559-3023</p>
        <p> 304-650-2694</p>
        <p> E-mail : shopnow@open2.com</p>
        <p>contact@open.com</p>
      </div>
    </div>
    <div className="text-center">
      <p style={{color: '#918e8e'}}>© 2023 grocery-lite Designed by Themehunk</p>
    </div>
  </div>
  </footer>


    </>
  )
}

export default Footer
