import React from 'react';
import './Form.css';
import svgFile from '../images/img-3.svg'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>You successFully Registered.</h1>
      <img className='form-img-2' src={svgFile} alt='success-image'/>
      <button className='redirect' >Login</button>
    </div>
  );
};

export default FormSuccess;