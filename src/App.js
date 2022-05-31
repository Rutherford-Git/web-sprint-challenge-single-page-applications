import React, {useState, useEffect} from "react";
import Home from './home'
import Form from "./pizza";
import Conformation from "./conformation";
import { Link } from "react-router-dom";

import { Route } from "react-router-dom";

import * as yup from "yup";

const schema =yup.object().shape({
  name: yup.string().required('name is required').min(2, 'name must be at least 2 characters'),
  sizeDropdown: yup.string().oneOf(['1','2','3'], 'size is required')
})

const initialFormValues = {
  name: '',
  sizeDropdown: '',
  sauceChoice: '',
  toppingChoice: '',
  substitute: '',
  specialText: '',
}
const initialFormErrors = {
  name: '',
  sizeDropdown: '',
  sauceChoice: '',
  toppingChoice: '',
  substitute: '',
  specialText: '',
}
const initialDisabled = true

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  const setErrors = (name , value)=>{
    yup.reach(schema, name).validate(value)
    .then(()=> setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }


  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
    setErrors(name, value)
  }

  const formSubmit = () => {
   console.log('red')
  }



  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
 
 

  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to='/'>
      <button> Home</button>
      </Link>
      <button> Help</button>

      <Route exact path='/'>
      <Home />
      </Route>

      <Route path='/pizza/'>
      <Form 
         values={formValues}
         change={inputChange}
         submit={formSubmit}
         disabled={disabled}
         errors={formErrors}
      />
      </Route>

      <Route exact path='/conformation/'>
      <Conformation />
      </Route>      
      
    </>
  );
};
export default App;
