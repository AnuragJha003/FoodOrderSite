import React, { createContext ,useContext,useReducer} from 'react'
//usereducer to be used in here 
const CartStateContext=createContext();
const CartDispatchContext=createContext();
//action add to cart or delete the cart
//and this action goes to dispatch and change the state mentioned in there
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        default:
            console.log("Error in Reducer");
    }
}

export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}

export const useCart=()=> useContext(CartStateContext);
export const useDispatchCart=()=> useContext(CartDispatchContext);
//now this can be imported anywhere 
//we r exporting usecart as a statecontext whose provider value is state  
//and value of the state will be returned 