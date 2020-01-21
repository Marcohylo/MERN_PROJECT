// Dependencies
import React, { Component } from 'react';

import {Field,reduxForm} from 'redux-form';

import './Payment.css'

const validate = (values) => {
  let errors = [];

  if(!values.Name)
  {
    errors.name="This is a required field"
  }

  if(!values.LastName)
  {
    errors.LastName="This is a required field"
  }

  if(!values.StreetAddress)
  {
    errors.StreetAddress="This is a required field"
  }

  return errors;
  };

class PaymentForm extends Component {

  renderField = ({input,type,label,meta:{touched,error,warning}}) => {
    return(
      <div>
        <label><h2>{label}:</h2></label>
        <input {...input} type={type} className="myInput" />
        {touched && 
        (error && <div style={{color: "red"}}>{error}</div>)}
      </div>
    )
  }

    renderDropdown = () => {
        return(
            <select name="area">
              <option value="Islands">Islands</option>
              <option value="Kwai Tsing">Kwai Tsing</option>
              <option value="North">North</option>
              <option value="Sai Kung">Sai Kung</option>
              <option value="Tai Po">Tai Po</option>
              <option value="Tsuen Wan">Tsuen Wan</option>
              <option value="Tuen Mun">Tuen Mun</option>
              <option value="Kowloon City">Kowloon City</option>
              <option value="Kwai Tsing">Kwai Tsing</option>
              <option value="Sham Shui Po">Sham Shui Po</option>
              <option value="Wong Tai Sin">Wong Tai Sin</option>
              <option value="Yau Tsim Mong">Yau Tsim Mong</option>
              <option value="Central/Western">Central/Western</option>
              <option value="Eastern">Eastern</option>
              <option value="Southern">Southern</option>
              <option value="Wan Chai">Wan Chai</option>
            </select>
        )
    }

  renderMessageField = ({input,type,label,meta:{touched,error,warning}}) => {
    return(
      <div>
        <label><h2>{label}:</h2></label>
        <textarea rows="10" cols="56" {...input} type={type} className="myTextArea" />
        {touched && 
        (error && <div style={{color: "red"}}>{error}</div>)}
      </div>
    )
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="myPaymentForm">
        {/* Name field */}
        <Field
          label="Name" name="name" component={this.renderField} type="text"/>

        <Field
          label="Last Name" name="LastName" component={this.renderField} type="text"/>
        
        <Field
          label="Unit number" name="UnitNumber" component={this.renderField} type="text"/>
        <Field
          label="Street Address" name="StreetAddress" component={this.renderField} type="text"/>

        <Field 
          label="Area" name="Area" component={this.renderDropdown} type="text"/>
        
        

        {/* Submit button */}
        <button style={{width:310,height:30,borderRadius:10,background:"white",fontSize:"20px"}} type="submit">Proceed to payment</button>
      </form>
    );
  }
}

// render () ;{

//     Total Cost: "#{ }items ."

// };
export default reduxForm({form:'payment',validate
})(PaymentForm);