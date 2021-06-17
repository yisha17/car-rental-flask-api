import React,{useState,useEffect} from 'react'

const Account = () => {
    const [name,setName] = useState("")
    const [car_name,setCar_name] = useState("")
    const [pickup , setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")
    const [image, setImage] = useState("")
    const [price,setPrice] = useState(0)


    const fetchAccount = async() => {
        const id = sessionStorage.getItem('rid')
        const response = await fetch(`/api/reservation/${id}`)
        if(response.status === 200){
        const user = await response.json()
        console.log(user);
        setName(user.username)
        setCar_name(user.car_name)
        setImage(user.car_img)
        setPrice(user.total)
        setPickup(user.pick)
        setDropoff(user.drop )

      }
    }
     useEffect(()=>{
        fetchAccount()
    },[])

    return (
        <>
        <div>
           <h1>Name:{name}</h1> 
        </div>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h2>Car:{car_name}</h2>
            <h4>Pickup Date:{pickup}</h4>
            <h4>Dropoff Date:{dropoff}</h4>
            <h4>Total Price:{price}</h4>
        </div>
             
            
        </>
    )
}

export default Account
