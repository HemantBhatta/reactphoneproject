import React from 'react'
import {Myconsumer,myContext} from '../context'
import {Link} from 'react-router-dom'

export default function Detail() {

    return (
        <Myconsumer>
          {(value)=>{
              const {detailProduct,addToCart} = value
              const {id,img,title,price,count,inCart,info,company} = detailProduct

                return (
                   
                    <div className="detailSection">

                         <div className="detailIn">
                            <div className="detailIMG">
                                <img src={img} alt="product"/>
                            </div>

                            <div className="detailDESC">

                                <h1>Device Name : {title}</h1>
                                <h3>MADE BY : {company}</h3>
                                <h3>Price :${price}</h3>
                                <p>Description : <br></br> {info}</p>

                                <div>
                                    <Link to = {'/'} >
                                        <button className="btnPrimary"> Back to products</button>
                                    </Link>

                                   
                <button disabled = {inCart ? true : false} className="btnPrimar" onClick={()=>addToCart(id)}>{inCart ? 'IN CART' : 'ADD TO CART'}</button>
                                   
                                </div>
                               
                            </div>
                         </div>
                        
                    </div>
                )

            
          }

         

          }
        </Myconsumer>
    )
}
