import React from 'react'
import {d} from './data'
import './reg.css'

const SuccessReservation = () => {
  const id = sessionStorage.getItem('token')
    return (
        <div>
            <div className="animated fadeIn card1">
  <div className='upper-side'>
    
      <svg version="1.1" className="checkmark" x="0px" y="0px" >
        <path d={d} />
        <circle fill="none" stroke="#ffffff" stroke-width="5" stroke-miterlimit="10" cx="109.486" cy="104.353" r="32.53" />
      </svg>
      <h3 className='status'>
      Success
    </h3>
  </div>
  <div className='lower-side'>
    <p className='message'>
      Congratulations, your successfully Reserve A Car. 
    </p>
    <a href="/profile" className="contBtn">See Reservation</a>
    <a href={`/update?id=${id}`} className="contBtn">Update Account </a>
  </div>
</div>
            
        </div>
    )
}

export default SuccessReservation
