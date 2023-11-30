import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
const {carts} = useSelector((state)=>state.allCart);
// console.log(carts)

const history=useNavigate();

const userLogout=()=>{
    localStorage.removeItem("user_login");
    history('/')
}

    return (
        <Navbar style={{ height: "60px", background: "black", color: "white" }}>
            <Container>
                <NavLink to="/home" className="text-decoration-none text-light mx-2">
                    <h3 className='text-light'>UberEats</h3>
                </NavLink>

                <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                    </div>
                </NavLink>
                <NavLink to="/" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                    <Button style={{ background: "green" }} onClick={userLogout}>Log Out</Button>
                    </div>
                </NavLink>
            </Container>
        </Navbar>
    )
}

export default Header
