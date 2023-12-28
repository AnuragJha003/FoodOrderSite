import React from 'react'
//z-index property to be applied in the form 
//in carousel caption for the search bar to be visible
//object fit overrides everything

//cannot create an individual component as child to parent relation is not available in react js 
//that is data cannot be sent from the carousel to the main home.js parent so we have to keep the code in the home.js only for this part 
//identified when search functionality was required 

const Carousel = () => {
  return (
    <div>
        <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <form className="d-flex" style={{zIndex:"0"}}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?tacos" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
  )
}

export default Carousel