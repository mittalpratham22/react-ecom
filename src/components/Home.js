import React, { useState } from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardData";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import Header from './Header';


const Home = () => {
    const [cartData, setCartData] = useState(CardsData);
    const dispatch = useDispatch();

    const { carts } = useSelector((state) => state.allCart);
    // console.log(carts);
    

    const send=(e)=>{
        dispatch(addToCart(e))
        toast.success("Item added in your cart")
    }

    return (
        <>
            <Header />
            <section className='item_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Hyderabad Open Now</h2>
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {
                        cartData.map((ele, idx) => {
                            
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                        <Card.Img variant='top' className='cd' src={ele.imgdata} />

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{ele.dish}</h4>
                                                <span>{ele.rating}</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5 className='mt-2'>{ele.address}</h5>
                                                <span>{ele.price}</span>
                                            </div>

                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={ele.arrimg} className='limg' alt="" />
                                                <Button style={{ width: "150px", backgroundColor: "green", border: "none" }} variant='outline-light' className='mt-2 mb-2' onClick={()=>send(ele)} >Add to Cart</Button>
                                                {
                                                    carts.map((elem,indx)=>{
                                                        // console.log(elem.id)
                                                        // console.log(elem.qnty)
                                                        // console.log("--")
                                                        if(elem.id===ele.id)
                                                        {
                                                            const quant=elem.qnty;
                                                                return(
                                                                    <>
                                                                    <h6>Qty: <span>{quant}</span></h6>
                                                                </>
                                                            )
                                                        }
                                                    })
                                                }
                                               
                                                <img src={ele.delimg} className='laimg' alt="" />
                                                
                                            </div>

                                        </div>

                                    </Card>
                                </>
                            )
                        })
                    }


                </div>
            </section>
        </>
    )
}

export default Home
