import React, { Component } from 'react'
import {App} from '../App.css';
import {Link} from 'react-router-dom'
import {Myconsumer,myContext} from '../context'


export default class Product extends Component {
    static contextType = myContext
    render() {
        const {handleDetail,addToCart,openModal,showOpenModal} = this.context

      // console.log(showOpenModal);
       
        const {product} = this.props
        const {id,img,title,price,count,inCart} = product

        console.log(img);

       
        
        
        return (
            <div className="singleContainer">
              <div className="single">
              <div className="img-container">
                   <Link to={'/details'} onClick = {()=>handleDetail(id)}>
                        <img src={img} alt="" className="imgFluid"/>
                   </Link>
                    <button   disabled = {inCart ? true : false} 
                        className="btn-Primary"  
                        onClick={ ()=>{addToCart(id); showOpenModal();}} >

                        {inCart ? 'IN CART' : <i class="fa fa-cart-plus" aria-hidden="true"></i>}
                    </button>

               </div>

               <div className="titlePrice">
               
                <h2>{title}</h2>
                <h3>Price: ${price}</h3>
               </div>
              </div>
            
              
            </div>
        )
    }
}
