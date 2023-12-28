import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
//we paste a card code into the body kyuki woh waisa hi aana chahiye according to requirments
//whenever code reuse put into components jaise card section 

const Home = () => {
  //object m loop using map function 
  const [foodCat,setFoodCat]=useState([]);
  const [foodItem,setFoodItem]=useState([]);
  //for searching in the carousel data 
  const [search,setSearch]=useState("");
  //EMPTY STRING 
  const loadData=async()=>{
    let response=await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    //fetch data from this 
    response=await response.json();
    //console.log(response[0],response[1]);
    //accessing fooditems and foodcategory in the form of array of objects in here 
    setFoodItem(response[0]);
    setFoodCat(response[1]);//setting the state of the two item and category 

  }
  useEffect(()=>{
    loadData()
  },[])
  //function called and depemdecmy of a particular state given  to it whenever a particular element related context is changed 
//no dependecny of states given so called on the very first time the page is reloaded 




//rendering of elemnts always done before and then the above functions and the hooks usestate and all is brought into light 
  return (
    <div>
        <div> <Navbar/> </div>
        <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
    </div>
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
        <div className="container">
{
  foodCat !==[] ?foodCat.map((data)=>{
    return (
      <div className="row mb-3">
    <div key={data._id} className="fs-3 m-3">
      {data.CategoryName}
      </div>
      <hr />
      {foodItem !==[]? 
      foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
      .map(filterItems=>{
        return(
          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
            <Card foodName={filterItems.name}
            options={filterItems.options[0]}//accesssing the array as data is in this form na 
            imgSrc={filterItems.img}></Card>
          </div>
        )
      }
      ):<div>No such data found </div>}
      </div>
    )
  }) : <div>"""""""""</div>
}
          </div>

        <div> <Footer /> </div>
    </div>
  )
}

export default Home