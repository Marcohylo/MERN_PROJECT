import React, { Component } from "react";
import PaymentForm from "../Components/PaymentForm";

class Payment extends Component {

  submit = (values) => {
    console.log(values)
  }
  
  render() {
    return (
      <div>
        <h1>Delivery Details</h1>
        <PaymentForm onSubmit={this.submit}/>
      </div>
    );
  }
}
export default Payment;