import React from 'react';
import { useHistory } from 'react-router';

const Menu = ({cars}) => {
  const history = useHistory(); 
  const reserveCar = (e) => {
    if (sessionStorage.getItem('token') === '' || sessionStorage.getItem('token') === null){
        history.push('/login')
    }
    else{
      console.log(e.target.value)
      sessionStorage.setItem('carid',e.target.value)
      history.push('/reservation')
    }
    
  }
  return (
    <div className="section-center">
      {cars.map((menuItem)=>{
        const {CarID,CarType,CarName,CarImage,price,isAvailable} = menuItem;
        if(isAvailable){
          return (
          <article key={CarID} className='menu-item'>
            
            <div className='card'>
              <img src={CarImage} alt={CarName} className='photo' />
              <header>
                <h4>{CarName}</h4>
                <h4 className="price">{price}</h4>
              </header>
              
              <button value={CarID}  onClick ={reserveCar}>Book</button>
              
              
            </div>
          </article>
        )
        }
        return null;
        
      })}
    </div>
  )
};

export default Menu;
