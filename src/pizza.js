import React from "react";
import { Link } from "react-router-dom";

export default function Form(props) {


    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
      }

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }


    return(
        <div>
            <div style={{color: 'red'}}>
          <div>{errors.name}</div>
          <div>{errors.sizeDropdown}</div>
          <div>{errors.sauceChoice}</div>
          <div>{errors.toppingChoice}</div>
          <div>{errors.substitute}</div>
          <div>{errors.specialText}</div>
            </div>
            <h2> Build Your Own Pizza </h2>
            <form id="pizza-form" onSubmit={onSubmit}>

            <div>
             <label> Name
                <input
                type='text'
                id="name-input"
                onChange={onChange}
                name='name'
                value={values.name}
                 />
                 </label>
            </div>

            <div>
            <h3> Choice of size </h3>
            <select 
            id="size-dropdown"
            onChange={onChange}
            name='sizeDropdown'
            value={values.sizeDropdown}
            >
            <option value=''>- Select an option -</option>
            <option value={'1'}>Small</option>
            <option value={'2'}>Medium</option>
            <option value={'3'}>Large</option>
          </select>
          </div>
           
         <div>
            <h3> Choice of Sauce </h3>
            <p><em>choose one</em></p>
                <label> Original Red
          <input
            name="red"
            type="radio"
            value={values.sauceChoice}
            onChange={onChange}
          />
                </label>

                <label> Garlic Ranch
          <input
            name="ranch"
            type="radio"
            value={values.sauceChoice}
            onChange={onChange}
          />
                </label>

                <label> BBQ Sauce
          <input
            name="bbq"
            type="radio"
            value={values.sauceChoice}
            onChange={onChange}
          />
                </label>

                <label> Spinach Alfredo
          <input
            name="alf"
            type="radio"
            value={values.sauceChoice}
            onChange={onChange}
          />
                </label>
            </div>

            <div>
            <h3> Add Toppings</h3>
            <p><em>choose up to 10</em></p>
            <label> Perpperoni
                <input
                type='checkbox'
                onChange={onChange}
                name=''
                value={values.toppingChoice}
                 />
            </label>

            <label>Sausage
                <input
                type='checkbox'
                onChange={onChange}
                value={values.toppingChoice}
                name=''
                 />
            </label>

            <label> Canadian Bacon
                <input
                type='checkbox'
                onChange={onChange}
                value={values.toppingChoice}
                name=''
                 />
            </label>

            <label> Spicy Italian Sausage
                <input
                type='checkbox'
                onChange={onChange}
                value={values.toppingChoice}
                name=''
                 />
            </label>

            </div>

            
            <div>
            <h3> Choice of Substitue </h3>
            <p><em>choose up to 1</em></p>
            <label>Gluten Free Crust (+ $1.00)
                <input
                type='checkbox'
                onChange={onChange}
                 />
            </label>
            </div>

             <div>
            <h3> Special Instructions</h3>
                <input
                type='text'
                id="special-text"
                onChange={onChange}
                 />
            </div>

            <div>
             
                <Link to='/conformation/'>
                <button id='order-button' disabled={disabled}> Add to Order </button>
                </Link>
            </div>
        </form>
        </div>
        
    )
}