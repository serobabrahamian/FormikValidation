import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      age: '',
      city: ''
    },
    onSubmit: values =>{
      console.log('form:', values)
    },
    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'Required';
      if(!values.email) errors.email = 'Required';
      if(!values.password) errors.password = 'Required';
      if(!values.age) errors.age = 'Required';
      if(!values.city) errors.city = 'Required';
      
      return errors; 
    }

  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name='name' type='text' onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input name='email' type='text' onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name='password' type='text' onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        <div>Age</div>
        <input name='age' type='text' onChange={formik.handleChange} value={formik.values.age}/>
        {formik.errors.age ? <div style={{color:'red'}}>{formik.errors.age}</div>: null}
        <div>City</div>
        <input name='city' type='text' onChange={formik.handleChange} value={formik.values.city}/>
        {formik.errors.city ? <div style={{color:'red'}}>{formik.errors.city}</div>: null}

    
     

          <div>
            <button type='submit'>Submit</button>
          </div>
      </form>
    </div>
  );
}

export default App;
