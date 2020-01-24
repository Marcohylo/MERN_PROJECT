import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ListingShow from './ListingShow';

const ListingsAll = props => {
    const { listings } = props;

    
  
    return (
      <div className='product-list'>
        <Row>
          {listings.map((listing, index) => (
            <Col xs='6' md='4' lg='3' key={index} className='mb-3'>
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"5px solid tomato",width:400,margin:10}} className='product-container'>
                 <h1>Title: {listing.title}</h1>
                 <h1>Price: {listing.price}</h1>
                 <button>Show</button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  
// class ListingsAll extends Component {
//     state = {
//       listing: {}
//     }
//     async componentDidMount() {
//       console.log("working");
//       try {
//         const response = await axios.get(`http://localhost:5000/listings/5e28de70cd0dbe3421cfb912`);
//         console.log('response.data', response.data)
//         const { data } =  response;
//         console.log(data);
//         this.setState({ listing: data });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     render()
//     {
//       return(
//         <div>
//           <h1>{this.state.listing.title}</h1>
//           <h1>{this.state.listing.price}</h1>
//           <h1>{this.state.listing.test}</h1>
//         </div>
//       )
//     }
//   };
    

export default ListingsAll;
