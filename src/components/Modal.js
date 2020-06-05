import React from 'react'
import {Myconsumer,myContext} from '../context'
import {Link} from 'react-router-dom'
import ButtonContainer from '../components/Button'

function Modal() {
    return (
        <Myconsumer>
            {
                value=> {
                    const {modalProduct,openModal,closeModal} = value

                 
                   const {id, title, img,company,inCart, price} = modalProduct

                


                   return (

                    <div className={openModal ? "overlay openModal" : 'overlay closeModal'}>
                              
                           <div className="overlaycontent">
                            <p> Item added to cart</p>
                            <img src={img} alt="" width="200"/>
                            <h2>{title}</h2>
                            <h4>{inCart}</h4>
                            <h3>price: ${price}</h3>

                           <div>
                           <Link to = {'/'}>
                            <ButtonContainer onClick={()=>closeModal()}>
                            Go to store
                            </ButtonContainer>
                            </Link>
                           </div>

                            <Link to = {'/cart'}>
                            <ButtonContainer cart onClick={()=>closeModal()}>
                                    go to cart
                            </ButtonContainer>
                            </Link>

                    </div>
                        
                    </div>

                   )
                }
            }
          
        </Myconsumer>
    )
}

export default Modal
