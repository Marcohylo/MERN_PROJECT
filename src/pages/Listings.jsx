import React, { Component } from "react";
import ListingsAll from '../components/ListingsAll';
import axios from 'axios';

class Listings extends Component {

    state = {
        listings: []
    }

    componentDidMount = async () => {
        const response = await axios.get('http://localhost:5000/listings/all')
        this.setState({listings: response.data})
    }

  render() {
    return (
      <div>
        <h1>All Listings</h1>
        {this.state.listings?<ListingsAll listings={this.state.listings}/>:""}
      </div>
    );
  }
}

export default Listings;
