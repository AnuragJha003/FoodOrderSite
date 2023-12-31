import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

//accessing props from the home.js property names which are given to the card component in the home.js file for display of data from the db 
//resuing the props for the code 
const Card = (props) => {
    let dispatch=useDispatchCart();
    let data=useCart(); //use cart is the state of the cart in here storing the data in the current state of the cart
    const priceRef=useRef();//reference hook
    let options=props.options;
    //key value pair of half and the price 
    let priceoptions=Object.keys(options);
    //keys and then from the map get the value corresponding to this key 
    //the objectfill and height given to fit the images properly in the frontend 
    //let foodItem=props.foodItems;
    //options is an aray as u can see in db of mapping of key which is size and the value of the key which is the price 
    //default value being given now 
    const [qty,setQty]=useState(1);
    const [size,setSize]=useState("");

    const handleAddtoCart=async ()=>{
        let food=[]
        for(const item of data){
            if(item.id===props.foodItem._id){
                food=item;
                break;
            }
        }
        if(food!== []){
            if(food.size===size){
                //update only when the size is same like half ka 3 shd be treated as quantities in it 
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty});
                return 
            }
            else if(food.size !== size){
                await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size })
                //console.log(data);
                return 
            }
            return 
        }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size })

    }
    
    let finalPrice=qty* parseInt(options[size]);
    //after using the reference in the price option
    //now we use the useefftect hook to set value of the price 
    useEffect(()=> {
        setSize(priceRef.current.value)
    },[]);//empty depandancy being given to this 
    return (
        <div>
            <div className="card mt-3 mb-5" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success' onChange={(e)=>setQty(e.target.value)}>
                            { //javascript 
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1} > {i + 1} </option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded mt-0' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {priceoptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Rs{finalPrice}/-
                        </div>
                    </div>
                    <hr>
                    </hr>
                    <button className={` btn btn-success justify-center ms-2 `} onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div></div>
    )
}

export default Card