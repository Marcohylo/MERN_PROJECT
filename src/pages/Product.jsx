import React, { Component } from "react";
import axios from 'axios';
import AddToCart from "../Components/AddToCart";
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Components/style.css";

class Product extends Component {

    state = {
        product: null
    }

    componentDidMount = async () => {
        const response = await axios.get(`http://localhost:5000/listings/${this.props.match.params.id}`)
        console.log(response.data)
        this.setState({product: response.data})
    }

render() {
  const { product } = this.state;
  return (
    product && 
      <div className="Content">       
                
                  
                <p className="ProductTitle">{product.title}</p> <p className="ProductImage">{product.image}</p>
                
                <p className="ProductPrice">Price: ${product.price}</p>
                
                <div className="hi"><AddToCart product={product}/>
                <Button>Buy now</Button></div>
 
                
                
                
                <h2 className="DescriptionTitle">Description</h2>  
                  <p className="ProductDescription">{product.description}</p>
                <div>
                 <Link to={`/all_products`}><Button style={{backgroundColor: '#000000'}}>Back to Product page</Button></Link>     

    </div>
</div>
  )
  }
}


export default Product;
