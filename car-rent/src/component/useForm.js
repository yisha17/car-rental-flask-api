import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    console.log(errors)

    setIsSubmitting(true);

    if (errors.email || errors.password || errors.password2 || errors.username){
      console.log(errors.email);
      
    }else{
     
       const opts = {
          method:'POST',
          headers:{
              'Access-Control-Allow-Origin': '*',
              'Content-Type':'application/json', 
          },
          body:JSON.stringify({
              CustomerName:values.username,
              CustomerEmail:values.email,
              CustomerPassword:values.password 
          })
      };
     try{
        fetch('/api/register/customer',opts)
        .then(resp => {
          if (resp.status === 200) return resp.json()
        })
        .then(data => {
          console.log(data);
        })
     }catch(error){
        
     }    

    }
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [callback, errors, isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;