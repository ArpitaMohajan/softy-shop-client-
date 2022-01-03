import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import './Card.css';

const Card = ({product, addToCart, addToWishlist}) => {

  const { id, name, img, category, price, review } = product;

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt={name}/>
            <i className="far fa-heart icon-cart" onClick={() => addToWishlist(product)}></i>

            <div className="add-to-cart-section d-flex flex-column">
            <i className="fal fa-shopping-bag icon-add-to-cart" onClick={() => addToCart(product)}></i>
            <i class="far fa-eye icon-add-to-cart"></i>
            </div>
            <NavLink to={`/products/${category}/${id}`} className="text-decoration-none">
            <div className="card-body d-flex flex-column align-items-start">
                <Rating ratingValue={review * 20} size={18} readonly={true}/>
              <p style={{
                  color: '#818995', 
                  fontSize: '13px',
                  margin: '5px 0'
                  }}>
                      {String(category).toLocaleUpperCase()}
                </p>
              <h5 className="card-title" style={{
                  color: '#3e4a5e',
                  fontSize: '18px',
                  margin: '5px 0', 
                  letterSpacing: '1px'
                }}>
                    {name}
              </h5>
              <p style={{
                  color: '#3a9046',
                  fontSize: '25px',
                  margin: '0'
               }}>
                   ${price}
              </p>
            </div>
          </NavLink>
          </div>
        </div>
    );
};

export default Card;