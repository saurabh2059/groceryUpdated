import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Home from '../Pages/Home'
import CatData from '../Data/catData'
import Category from '../Pages/Category'
import Details from '../Pages/Details'


function Header() {
  return (
    <>
 
  <section className="top ">
    <div className="container">
      <div className="row py-1 text-center text-lg-start">
        <div className="col-lg-6 right">
          We are committed to provide service 24 X 7
        </div>
        <div className="col-lg-6 left">
          <ul className="social-icon d-flex gap-2 justify-content-lg-end justify-content-center">
            <li>
              <a target="_blank" href="#"><i className="fa fa-facebook" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-linkedin" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-pinterest" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-twitter" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-instagram" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-tumblr" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-youtube-play" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-stumbleupon" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-dribbble" /></a>
            </li>
            <li>
              <a target="_blank" href="#"><i className="fa fa-skype" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <header className="py-2">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <Link to="/">
            <img src="https://wpthemes.themehunk.com/grocery-lite/wp-content/uploads/sites/128/2020/07/logo.png" alt />
          </Link>
        </div>
        <div className="col-lg-6">
          <nav>
            <ul className="d-lg-flex gap-4">
              <li><Link to="/"> <p style={{color: '#7fba32'}}>Home </p></Link></li>
             { CatData.slice(0,4).map((a)=>(
                <li key={a}><Link to={`/cat/${a}`}>{a}</Link></li>
              ))}
            </ul>
          </nav>   
        </div>
        <div className="col-lg-3">
          <div className="row align-items-center">
            <div className="col-lg-1 fw-bold fs-5"><i className="fa fa-phone" aria-hidden="true" /></div>
            <div className="col-lg-11 "><span className="fw-bold "> Call To</span> +1800090098 <br />Email : Info@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section className="py-4 search">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <div className="title d-flex align-items-center gap-5 ">
            <i className="fa fa-bars" aria-hidden="true" />
            Category
          </div> 
        </div>
        <div className="col-lg-5 offset-lg-2 mx-auto ">
          <form action className="parent">
            <input className="form-control " type="text" placeholder="Search....." name id />
            <button className="btn1"><i className="fa fa-search" style={{color: 'white'}} aria-hidden="true" /></button>
          </form>
        </div>
        <div className="col-lg-2 icons ">
          <ul className="d-flex justify-content-lg-start">
            <li><i className="fa fa-heart-o" aria-hidden="true" /></li>
            <li><i className="fa fa-user" aria-hidden="true" /></li>
            <li><i className="fa fa-shopping-bag" aria-hidden="true" /></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cat/:cid/' element={<Category/>}/>
    <Route path='/detail/:id/' element={<Details/>}/>
  </Routes>

</>

  )
}

export default Header
