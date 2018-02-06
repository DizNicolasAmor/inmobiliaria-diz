import React from 'react';
import Product from './Product.js';


const Products = (props) => {  
console.log(props);
// redux
//     {props.products.length && props.products.map( (product, index) => { etc...


    return (
         <div id="products">
         {props.products.map( (product, index) => {
            return <Product 
                     key={product.id} 
                     image={product.thumbnail} 
                     title={product.title} 
                     price={product.price}
                     currency_id={product.currency_id}
                     id={product.id} />
          })}
        </div>
    );
}

export default Products;