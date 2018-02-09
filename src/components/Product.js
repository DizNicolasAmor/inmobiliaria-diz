import React from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {
    return (
      <Link   to={`/inmobiliaria-diz/propiedad/${props.id}`}>
        <div className="subcontainer">
          <div className="product-container">
            <h4>
              <img src={props.image} alt={props.id} />
            </h4>
            <hr />
            <h4 className="price cursor-pointer">{props.currency_id} {props.price}</h4>  
            <h5>{props.title}</h5>
          </div>
        </div>
      </Link>
    );
}

export default Product;