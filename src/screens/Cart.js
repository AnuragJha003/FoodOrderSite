import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../components/ContextReducer';
export default function Cart() {
  let data = useCart();//data from the current state context of the cart is being fetched in here
  let dispatch = useDispatchCart();//dispatch data being fetched into this from usdispatchcart conext which has states passed onto it
  if (data.length === 0) { //data is type of array and no items are present in the current state/cart
    return (
      <div>
<div className='m-5 w-100 text-center fs-3' style={{ color: 'white' }}>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }
//handlechecout function 
  const handleCheckOut = async (e) => {
    e.preventDefault();
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    //fetch the user from the response 
    let response = await fetch("http://localhost:5000/api/orderData", {
      //credentials: 'include',  
      //Origin:"http://localhost:3000",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },//json type data being posted from the header 
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      }) //body of the json being sent to the api being given 
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" }) //checkout krte hi cart shd be empty so extra dispatch type drop that is emptying the cart  
    }
  }
//creating the table in the div lower by using map function through the data function food and index
  let totalPrice = data.reduce((total, food) => total + food.price, 0)//total price reduce function on the array 
  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
  {data.map((food, index) => (
    <tr key={index}>
      <th scope='row' style={{ color: 'white' }}>{index + 1}</th>
      <td style={{ color: 'white' }}>{food.name}</td>
      <td style={{ color: 'white' }}>{food.qty}</td>
      <td style={{ color: 'white' }}>{food.size}</td>
      <td style={{ color: 'white' }}>{food.price}</td>
      <td style={{ color: 'white' }}>
        <button type="button" className="btn p-0">
          <DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
        </button>
      </td>
    </tr>
  ))}
</tbody>
</table>
<div><h1 className='fs-2' style={{ color: 'white' }}>Total Price: {totalPrice}/-</h1></div>
<div>
  <button className='btn bg-success mt-5' style={{ color: 'white' }} onClick={handleCheckOut}>Check Out</button>
</div>

      </div>



    </div>
  )
}