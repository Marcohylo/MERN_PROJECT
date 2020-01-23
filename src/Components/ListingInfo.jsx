import React, { Component } from 'react';
import EditForm from '../component/EditForm'
import axios from 'axios'
const address = "5e28de70cd0dbe3421cfb912"
class EditListing extends Component {
  state = {
    data: {}
  }
  async componentDidMount() {
    console.log("working");
    try {
      const response = await axios.get(`http://localhost:5000/listings/${this.props.match.params.id}`);
      console.log('response.data', response.data)
      const { data } =  response;
      console.log(data);
      this.setState({ data });
    } catch (err) {
      console.log(err);
    }
  }

  export default ListingInfo;
// import React, { Component } from 'react';
// import Axios from 'axios';

// class ListingInfo extends Component {
//     "http://localhost:5000/listings/5e28de70cd0dbe3421cfb912"

// }




// export default ListingInfo;