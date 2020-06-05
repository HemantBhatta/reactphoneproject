import React, { Component } from 'react'
import {Myconsumer,myContext} from '../context'
import Product from './Product'


class Home extends Component {
    render() {
        return (
            <Myconsumer>
                {
                    value=>{
                       const {products} = value


                       return (

                        <>
                      
                            <header className="productsContainer">
                            

                                  {
                                    products.map(product=>{
                                    return <Product key ={product.id} product = {product} />

                                    })
                                }
                            </header>


                            </>

                           
                           
                       )
                      
                    }

                    
                }
            </Myconsumer>
        )
    }
}

export default  Home
