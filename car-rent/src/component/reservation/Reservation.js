import React, {useState} from 'react'
import {FaCalendar} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import styled from 'styled-components'
import image1 from '../../images/car4.jpg'
import { useHistory } from 'react-router'
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
    span{
        position:relative;
        bottom:5px;
        color: white;
        font-weight: 700;
    }
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
    span{
        position:relative;
        bottom:5px;
        color: white;
        font-weight: 700;
    }
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

const Location = styled.select`
    height: 40px;
    position: relative;
    margin-bottom: 40px;
    option{
        width: 270px;
	    height: 40px;
	    border:none;
	    outline: none;
	    padding-left: 40px;
	    box-sizing: border-box;
	    font-size: 15px;
	    color: #333;
	    margin-bottom: 40px;
        }
;`

const Reservation = ({Login}) => {
    const [pickupDate ,setPickupDate] = useState("");
    const [dropoffDate ,setDropoffDate] = useState("");
    const [location,setLocation] = useState("")
    const [error,setError] = useState(false)

    const history = useHistory();
    const submitHandler = e => {
        e.preventDefault();
        setPickupDate(e.target.value)
        setDropoffDate(e.target.value)
        setLocation(e.target.value)
        console.log(location)
        const customer_id = sessionStorage.getItem('token')
        const car_id = sessionStorage.getItem('carid') 
        
        const opts = {

            method:'POST',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type':'application/json', 
            },
            body:JSON.stringify({
                CustomerID:customer_id,
                CarID:car_id,
                pickup_date:pickupDate,
                dropup_date:dropoffDate,
                Location:location
            })
        };

        fetch('/api/reservation',opts)
        .then(resp => {
            if (resp.status === 500){
              history.push('/error')
            }
           
            else{
              return resp.json()
            }
        })
        .then(data => {
            // console.log(data);
            sessionStorage.setItem('carid',null)
            // sessionStorage.setItem('rid',data.ReservationID)
            history.push('/success_reserve')
            console.log('successfull');
        })
    }
    return (
        <Body>
            <Container>
           <Header>
                
           </Header>
           <Main>
                <Form onSubmit={submitHandler}>
                    <Name>
                        <FaCalendar/><span>Pickup-Date</span>
                        {error ? <p>incorrect date</p>:''}               
                        <input type="date" placeholder="Pickup-Date" name="" onChange={e => setPickupDate(e.target.value)}
                            value={pickupDate}/>
                        
                    </Name>
                    <br />
                    <Password>
                        <FaCalendar/><span>Dropup-date</span>
                        {error ? <p>incorrect date</p>:''}
                        <input type="date" placeholder="Dropoff-date" name="" onChange={e => setDropoffDate(e.target.value)}
                            value={dropoffDate}/>
                    </Password>
                    <br />
                    <Location onChange={e => setLocation(e.target.value)}>
                        <MdLocationOn/>
                        <option value='Addis Ababa'>Addis Ababa</option>
                        <option value='Hawassa'>Hawaassa</option>
                    </Location>
                    <button>Book</button>
                    
                </Form>
           </Main>
        </Container>
        </Body>
       
    )
}

export default Reservation
