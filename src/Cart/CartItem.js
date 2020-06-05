import React from 'react'
import {Myconsumer,myContext} from '../context'


function CartItem({item,Increment,Decrement,removeItem}) {

    const {id,img,company,title,price,count,inCart,total} = item

    return (
        <div>
             <div className="cartColumnsdata">
                    <div>
                        <p>{company}</p>
                    </div>

                    <div>
                        <p>{title}</p>
                    </div>

                    <div>
                        <p>${price}</p>
                    </div>

                    <div className="quantityComp">
                        <p onClick={()=>Decrement(id)}><span><i class="fa fa-minus" aria-hidden="true"></i></span></p>
                        <p><span>{count}</span></p>
                        <p onClick={()=>Increment(id)}><span><i class="fa fa-plus" aria-hidden="true"></i></span></p>
                       
                    </div>

                    <div>
                        <p onClick = {()=>removeItem(id)}><i className="fa fa-trash"></i></p>
                    </div>

                    <div>
                        <p>Item Total: ${total}</p>
                    </div>
               </div>

               
        </div>
    )
}

export default CartItem
