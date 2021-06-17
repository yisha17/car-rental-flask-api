import React, { useState, useEffect} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import {useHistory} from 'react-router-dom'








function App() {
  const [menuItems,setMenuItems] = useState([]);
  const [categories,setCategories] = useState([])
  const his = useHistory();
 

  
  const fetchCars = async() => {
    try{
      const response = await fetch('/api/cars')
      if(response.status === 200){
        const cars = await response.json()
        setCategories([...new Set(cars.map((car)=>car.CarType))])
        setMenuItems(cars)
      }
      else{
        
        his.push('/error')
      }
     
    }catch(error){
      window.open('/error')
    }
   
  }


  useEffect(()=>{
    fetchCars()
  },[]) 
  const filterItems = (category) => {
    const newItem = menuItems.filter((item)=> item.CarType === category)
    setMenuItems(newItem)
  }
  return (
    <main>
      <section className='menu section'>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu cars={menuItems}/>
      </section>
    </main>
  )
}

export default App;
