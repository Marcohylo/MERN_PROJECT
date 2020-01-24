import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';



const ListingsAll = props => {
    const { listings } = props;

    return (
      <div className='product-list'>
        <Row>
          {listings.map((listing, index) => (
            <Col xs='6' md='4' lg='3' key={index} className='mb-3'>
              <div style={{display:"flex",flexDirection:"column",justifycontent: "space-around",border:"5px solid tomato",width:400,margin:10}} className='product-container'>
                 <h1>Title: {listing.title}</h1>
                 <h1>Price: {listing.price}</h1>
                 <div><button>DETAILS</button><button>ADD TO CART</button></div> 
                 
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
 
export default ListingsAll;
