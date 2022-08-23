import React from 'react';

import {CartStore} from  '../../stores/cartStore'
import {CardsStoreWithLimit} from '../../servieces/cart/allCarts'
import {AddCardsStoreApi} from '../../servieces/cart/addCart'

const authService = new CardsStoreWithLimit(); //API
const addCart =new AddCardsStoreApi();//API

const  CartStoreContext= new CartStore(authService,addCart);


const CartContext = React.createContext({
    // ProductStoreContext,
    CartStoreContext,
    // product
});

export default CartContext;




