
import { makeAutoObservable, toJS } from "mobx";

export class CartStore {
  carts = [];
  cartApi
  addCartProduct
  constructor(cartApi,addCartProduct) {
   console.log(addCartProduct)
   this.cartApi =cartApi
   this.addCartProduct =addCartProduct

    makeAutoObservable(this);
   
  }
  cartsWithCount = async (count) => {
    const carts = await this.cartApi.AllCartsApi(count);
    this.carts=carts
  };
  //adding products to cart
  addCartProducts = async(Productdetails)=>{
    console.log(Productdetails,"8988")
    const settingCartProduct = await this.addCartProduct.AddCartsApi(Productdetails);
    const c =toJS(this.carts)
    this.carts=[...toJS(this.carts),{...settingCartProduct}]
    console.log(toJS(this.carts))
  }
  
  
}

