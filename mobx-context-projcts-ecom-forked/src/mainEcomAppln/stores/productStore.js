import { makeAutoObservable, toJS } from "mobx";

export class ProductStore {
  products = [];
  productApiwithLimit;

  singleProductApiStore=[]
  singleProductApis

  categeries=[]
  categery

  singleCategoryStore=[]
  

  
  constructor(productApi,singleProductApi,allCategories) {
    makeAutoObservable(this);
    this.productApiwithLimit = productApi;
    this.singleProductApis = singleProductApi;
    this.categery=allCategories
  }
  productsWithCount = async (count) => {
    const c = await this.productApiwithLimit.AllProductsApi(count);
    this.products=c;
  };
  
  singleProductStore =async(id)=>{
    const r = await  this.singleProductApis.SingleProductApi(id);
    this.singleProductApiStore=r;
  }
 allCategoriesStore=async()=>{
  const categeries = await this.categery.Allcategories()
  this.categeries=categeries
 }
 getSingleSpeceficCategoryStore = async(category)=>{
  console.log(category)
   const singleCategories = await this.categery.GetSinglecategory(category);
   this.singleCategoryStore=singleCategories;
 }
}

