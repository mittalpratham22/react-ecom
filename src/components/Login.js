import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from './Sign_img';
import SigninHeader from './SigninHeader';
import { NavLink, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    // const [data, setData] = useState([]);
    // console.log(inpval)

    const getData = (e) => {
        const { value, name } = e.target;
        // console.log(value,name);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        });
    }

    const addData = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem("userpratham");
        // console.log(getUserArr);

        const { email, password } = inpval;
        if (email === "") {
            alert("email field is required")
        } else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) && !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+\.[A-Za-z]+$/.test(email))) {
            alert("enter valid email address")
        } else if (password === '') {
            alert("password field is required")
        } else if (password.length < 5) {
            alert("password length must be greater than 5")
        } else {

            if (getUserArr && getUserArr.length) {
                const userdata = JSON.parse(getUserArr);
                const userlogin = userdata.filter((ele, idx) => {
                    return ele.email === email && ele.password === password;
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login successful");
                    localStorage.setItem("user_login", JSON.stringify(userlogin));
                    history("/home");
                    
                }
            }
        }
    }

    return (
        <>
        
            <SigninHeader />
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div
                        className="left_data mt-3 p-3"
                        style={{ width: "100%" }}>
                        <h3 className='text-center col-md-6'>Sign In</h3>
                        <Form>
                            <Form.Group
                                className="mb-3 col-md-6"
                                controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    name='email'
                                    onChange={getData}
                                    placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group
                                className="mb-3 col-md-6"
                                controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    name='password'
                                    onChange={getData}
                                    placeholder="Password" />
                            </Form.Group>
                            <Button
                                variant="primary"
                                className='col-md-6'
                                style={{ background: 'green' }}
                                type="submit"
                                onClick={addData}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Don't Have an Account? <span><NavLink to="/">Sign Up</NavLink></span></p>
                    </div>
                    <Sign_img />
                </section>
            </div>
        </>
    )
}

export default Login;