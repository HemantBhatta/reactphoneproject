import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {myContext,Myconsumer} from '../context'

function Navbar() {
    
    return (
        <Myconsumer>

            {
                value =>{
                    const {totalItemInCart}  = value
                    console.log(totalItemInCart);

                    return (
                        <NavComp>
                        <div className="nav">
                            <Link to={'/'}><div className="navTitle">my store</div></Link>
                    <div className="cart"> <Link to = {'/cart'}>Cart<span className="cartinner"><i class="fa fa-cart-plus" aria-hidden="true"><span className="cartcount">{totalItemInCart}</span></i></span></Link></div>
                        </div>
                        </NavComp>
                
                    )
                }
            }



      
        </Myconsumer>
    )
}

const NavComp = styled.div`


.nav
{
            display: flex;
            justify-content: space-around;
            background-color: rgb(57, 134, 96);
            align-items: center;
            padding: 20px;
            box-shadow: 0 0 5px 0px rgba(0,0,0,0.4);
            position: fixed;
            right: 0;
            left: 0;
            top:0;
            z-index: 10;
            
}

.nav a{
    list-style:none;
    text-decoration:none;
}

.navTitle{

    font-family: 'Fredericka the Great', cursive;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 20px;
    color: white;
    transition: 1s all;

    &:hover{
        color: orange;
    }
   
}

.cart{
    font-size: 2rem;
    text-transform: uppercase;
    font-family: sans-serif;
    transition: 1s all;
}

.cart a:hover
{
    background-color: #ffffff;
    color: black;
    transition: 1s all;
}

.cart a
{
    text-decoration: none;
    color: white;
    font-weight: 500;
    border: 1px solid rgba(122, 122, 122, 0.4);
    padding: 10px 15px;
    box-shadow: 0 0 5px 1px rgba(0,0,0,0.4);
    letter-spacing: 5px;
    border-radius: 5px;
    font-family: 'Fredericka the Great', cursive;
}

.cartinner
{
    position:relative;
    color: rgb(85, 183, 221);
   
}

.cartcount
{
  
    position:absolute;
    top:-10px;
    right:-10px;
    color:rgb(222, 216, 241);
    background:rgb(34, 103, 131);
    padding:5px 4px;
    border-radius:20px;
    letter-spacing:-1px;
    font-size:1.5rem;
}


`

export default Navbar
