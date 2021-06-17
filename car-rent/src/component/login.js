import React, {useState} from 'react'
import {FaUser,FaLock} from 'react-icons/fa'
import styled from 'styled-components'
import image1 from '../images/car4.jpg'

import {useHistory} from 'react-router-dom'



const style = { backgroundImage: `url(${image1})`};
const Body = styled.div`
    font-family: sans-serif;
    ${style}	
	background-repeat: no-repeat;
	overflow: hidden;
	background-size:cover;
`;
const Container = styled.div`
    width: 380px;
	margin:7% auto;
	border-radius: 25px;
	background-color: rgba(23,233,4,0.1);
	box-shadow: 0 0 17px #333;
    height: 70vh;

     @media screen and (max-width: 768px){
        margin: 17%  auto;
    }
`;
const Header = styled.div`
    text-align: center;
	padding-top: 75px;
`;

const Main = styled.div`
    width: 300px;
	height: 40px;
	border:none;
	outline: none;
	padding-left: 40px;
	box-sizing: border-box;
	font-size: 15px;
	color: #333;
	margin-bottom: 40px;
`;

const Form = styled.form`
    button{
        width: 300px;
	    height: 40px;
	    border:none;
	    outline: none;
	    padding-left: 40px;
	    box-sizing: border-box;
	    font-size: 15px;
	    color: #333;
	    margin-bottom: 40px;
        padding-left: 0;
	    background-color: #83acf1;
	    letter-spacing: 1px;
	    font-weight: bold;
	    margin-bottom: 70px;
        
        &:hover{
            box-shadow: 2px 2px 5px #555;
	        background-color: #7799d4; 
        }
        
    }

    p{
        color:white;
    }
    a{
        text-decoration:none;
    }

`;
const Name = styled.span`
    position: relative;
    input{
        width: 300px;
	    height: 40px;
	    border:none;
	    outline: none;
	    padding-left: 40px;
	    box-sizing: border-box;
	    font-size: 15px;
	    color: #333;
	    margin-bottom: 40px;
    }
`;
const Password = styled.span`
    position: relative;
    input{
        width: 300px;
	    height: 40px;
	    border:none;
	    outline: none;
	    padding-left: 40px;
	    box-sizing: border-box;
	    font-size: 15px;
	    color: #333;
	    margin-bottom: 40px;
    }
`;

export const Login = () => {
    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const [error,setError] = useState(false)
    
    const history = useHistory();
    
    const submitHandler = e => {
        e.preventDefault();
        const opts = {

            method:'POST',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type':'application/json', 
            },
            body:JSON.stringify({
                CustomerName:username,
                CustomerPassword:password 
            })
        };

        fetch('/api/customer',opts)
        .then(resp => {
            if (resp.status === 500){
              history.push('/error')
            }
            if(resp.status === 404){
                setError(true);
            }else{
              return resp.json()
            }
        })
        .then(data => {
            console.log(data)
            if (data.msg === 'successful'){
                sessionStorage.setItem("token",data.CustomerID);
                history.push('/cars')
               
            }else{
                setError(true)
                document.getElementById('un').value = '';
                document.getElementById('ps').value = '';
            }
            
        })

       
           
        
    }

    const nameChange = (e) => {
        setUsername(e.target.value)
        if (username === ''){
            setError(false)
        }
    }

    const passwordChange = (e) =>{
        setPassword(e.target.value)
        if (password === ''){
            setError(false)
        }
    }
    
    return (
        <Body>
            <Container>
           <Header>
                
           </Header>
           <Main>
                <Form onSubmit={submitHandler}>
                    <Name>
                        <FaUser/>
                        {error ? <p>incorrect password or username</p>:''}
                        <input type="text" placeholder="Username" id='un' name="" onChange={nameChange}
                            value={username}/>
                        
                    </Name>
                    <br />
                    <Password>
                        <FaLock/>
                        <input type="password" placeholder="password" id= 'ps'name="" onChange={passwordChange}
                            value={password}/>
                    </Password>
                    <br />
                    <button onClick={submitHandler}>Log in</button>
                    <p>don't have an account?<a href="/register">signin</a></p>
                </Form>
           </Main>
        </Container>
        </Body>
       
    )
}

export default Login
