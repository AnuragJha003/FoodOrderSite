import React from 'react'

//accessing props from the home.js property names which are given to the card component in the home.js file for display of data from the db 
//resuing the props for the code 
const Card = (props) => {
    let options=props.options;
    //key value pair of half and the price 
    let priceoptions=Object.keys(options);
    //keys and then from the map get the value corresponding to this key 
    //the objectfill and height given to fit the images properly in the frontend 
    return (
        <div>
            <div className="card mt-3 mb-5" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success'>
                            { //javascript 
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1} > {i + 1} </option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded mt-0'>
                            {priceoptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Card