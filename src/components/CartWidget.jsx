import React from 'react';
import cart from '../assets/cart.png';


export const CartWidget = () => {
    return( 
        <React.Fragment>
            <img src={cart} alt="Carrito" width="30" /> 
            <span>1</span>
        </React.Fragment>
    );    
}