import React, { Component } from 'react'
import storeProducts from './data'
import Modal from './components/Modal'

const myContext = React.createContext()

class ContextProvider extends Component {
    state = {
        products:[],
        detailProduct:[],
        inCart:false,
        cart:[],
        modalProduct:[],
        openModal:false,
        totals:0,
        TotalWithtax:0,
        totalItemInCart:0
        
    }


        componentDidMount(){
            this.setProducts()

        }

    setProducts = () =>{
            let tempProducts = []
            storeProducts.forEach(item=>{
                const singleItem = {...item}
                tempProducts = [...tempProducts, singleItem]
            })
          this.setState(()=>{
              return {products:tempProducts}
          })         
    }

    filterById= (id) =>{
        
        const product = this.state.products.find(item => item.id === id);
        return (product)
    }

    addToCart = (id) =>{
        let  tempCart = [...this.state.cart]
        const cartItem = this.filterById(id)
        const tempItems = [...this.state.products]
        let index = tempItems.indexOf(cartItem)
       
        const product = tempItems[index]
        product.count = 1;
        product.inCart = true;
        product.total = product.price;

        tempCart = [...tempCart, product]

        this.setState(()=>{
            return {cart:tempCart}
        },
       
        ()=>{this.calculateTotals(); this.ItemInCart();}
        ,
       
        this.showModal(id)
        ) 
        
    }


   

    handleDetail=(id) => {
       
        let detailProduct =  this.filterById(id)
         this.setState(()=> {
             return {detailProduct:detailProduct}
         })
        
       
    }

    showModal=(id)=>{
        let Modalitem = this.filterById(id)

        this.setState(()=>{
            return {modalProduct:Modalitem}
        })
       
    }

    showOpenModal = () => {
        this.setState(()=>{
            return {openModal:true}
        })
    }

    closeModal = () => {
        this.setState(()=>{
            return {openModal:false}
        })
    }


    calculateTotals = () => {
        const total  = this.state.cart.reduce(function(acc,item){
                acc = acc+ item.total;
                return acc
        },0)

        let totalwithtax = total*0.1 + total

       this.setState(()=>{
        return {totals:total,TotalWithtax:totalwithtax}
       })
    }

    ItemInCart  = () => {
        const totalitems  = this.state.cart.reduce(function(acc,item){
            acc = acc + item.count;
            return acc
    },0)

    this.setState(()=>{
        return {totalItemInCart:totalitems}
       })


    }



    Increment = (id) => {
        // let tempCarts = []
        let  products = [...this.state.cart]
        let increitem = this.filterById(id)
        let index =  products.indexOf(increitem)
        let product = products[index]
        product.count =  product.count + 1
        product.total =  product.price * product.count

       

        this.setState(()=>{
            return {cart:products}
        },  this.calculateTotals(),this.ItemInCart())
    }

    Decrement = (id) => {
      
        let  products = [...this.state.cart]
        let increitem = this.filterById(id)
        let index =  products.indexOf(increitem)
        let product = products[index]
        product.count =  product.count - 1
     
            if(product.count === 0){
                this.removeItem(id)
            }else{
                product.total =  product.price * product.count
            
                this.setState(()=>{
                    return {cart:products}
                },  this.calculateTotals(),this.ItemInCart())
            }
        
       

       
    }



    clearItem = (id) => {
       this.setState(()=>{
         return { cart:[] }
       }, ()=>this.calculateTotals(),this.setProducts())
    }


    removeItem = (id) => {
        let filteredItem = this.state.cart.filter(item => item.id !== id)

        let  products = [...this.state.products]
        let item = this.filterById(id)
        let index =  products.indexOf(item)
        let product = products[index]

        product.count = 0
        product.total = 0
        product.inCart = false

       this.setState(()=>{
           return {cart:filteredItem, products:products}
       },()=>{this.calculateTotals();this.ItemInCart();})

    }


    render() {
      
        return (
            <myContext.Provider value = {{...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
            showModal:this.showModal,
            showOpenModal:this.showOpenModal,
            closeModal:this.closeModal,
            Increment:this.Increment,
            Decrement:this.Decrement,
            clearItem:this.clearItem,
            removeItem:this.removeItem

            }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}


const Myconsumer = myContext.Consumer
export  {ContextProvider,Myconsumer,myContext}
