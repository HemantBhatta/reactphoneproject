import React, { Component } from 'react'
import {Myconsumer,myContext} from '../context'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
import ButtonContainer from '../components/Button'



class Cart extends Component {
    static contextType = myContext
    render() {
        const {cart,Increment,Decrement,totals,TotalWithtax,clearItem,removeItem} = this.context
       


       
        return (
            <div className="mainCart">
               <div className="cartColumns">
                    <div>
                        <p>company</p>
                    </div>

                    <div>
                        <p>name of product</p>
                    </div>

                    <div>
                        <p>price</p>
                    </div>

                    <div>
                        <p>quantity</p>
                    </div>

                    <div>
                        <p>remove</p>
                    </div>

                    <div>
                        <p>total</p>
                    </div>
               </div>


               <div>
                   <div>
                    {
                        cart.map(item=>{
                            return <CartItem key = {item.id} item = {item} Increment = {Increment} Decrement = {Decrement} removeItem={removeItem}/>
                        })
                    }
                    </div>
               </div>

               <div>
                   <Link to={'/'}>
                       <ButtonContainer onClick={()=>clearItem()}>
                                    Clear All Items
                        </ButtonContainer>
                   </Link>

                   <Link to={'/'}>

                   <ButtonContainer cart>
                       back to products
                   </ButtonContainer>
                   </Link>
               </div>


               <div className="totalPart">
                   <h1>SubTotal : ${totals}</h1>
                    <h1>Total : ${TotalWithtax}</h1>
               </div>
            </div>

          
        )
    }
}


export default  Cart
