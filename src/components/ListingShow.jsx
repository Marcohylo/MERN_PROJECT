import React, { Component } from 'react';
import axios from 'axios';

class ListingShow extends Component {
  state = {
    listing: {}
  }
  async componentDidMount() {
    console.log("working");
    try {
      const response = await axios.get(`http://localhost:5000/listings/5e28de70cd0dbe3421cfb912`);
      console.log('response.data', response.data)
      const { data } =  response;
      console.log(data);
      this.setState({ listing: data });
    } catch (err) {
      console.log(err);
    }
  }
  render()
  {
    return(
      <div>
        <h1>{this.state.listing.title}</h1>
        <h1>{this.state.listing.price}</h1>
        <h1>{this.state.listing.test}</h1>
      </div>
    )
  }
};
  
export default ListingShow;
