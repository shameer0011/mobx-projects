import React from 'react';
import {ProductStore} from  '../../stores/productStore'
import {ProductStoreWithLimit} from '../../servieces/product/allProductswithLimit'
import {SingleProductApi} from '../../servieces/product/singleProduct'
import {AllCategoryProducts} from '../../servieces/product/categories';

const authService = new ProductStoreWithLimit(); //API
const singleProductService = new SingleProductApi();//API
const allGategories =new AllCategoryProducts();//API

const  ProductStoreContext= new ProductStore(authService,singleProductService,allGategories);


const ProductContext = React.createContext({
    // ProductStoreContext,
    ProductStoreContext,
    // product
});

export default ProductContext;




