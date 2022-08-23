import { toJS } from "mobx";
import { observer } from "mobx-react";
import React, { useContext } from "react";
import { useEffect } from "react";
import RecipeReviewCard from "../components/cards";
import ProductContext from "../contexts/productContext/productContext";
import Pagination from "../components/pagination";
import { Grid } from "@mui/material";
import CategoryCard from "../components/categoryStrucure";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import CartContext from "../contexts/cartContext/cartContext";
const home = observer((props) => {


  const navigate =useNavigate();
  const productContext = useContext(ProductContext);
  const cartContext =useContext(CartContext)

  // console.log(productContext.ProductStoreContext);
  // console.log(cartContext.CartStoreContext.addCartProducts(),"ppp");
  const { products } = toJS(productContext.ProductStoreContext);
  useEffect(() => {
    async function fetchData() {
      const f = await productContext.ProductStoreContext.productsWithCount(
        perpage
      );
      const getAllGategory =await productContext.ProductStoreContext.allCategoriesStore();
      console.log(getAllGategory)
    }
    fetchData();
  }, []);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [perpage] = React.useState(5);

const getCategoryName=async(cate) =>{
    const getSingleProdct =await productContext.ProductStoreContext.getSingleSpeceficCategoryStore(cate);
    navigate(`/categories/cate=${cate}`)
}

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' +dd;

  const [addNewProductToCart,setNewProductCart] =useState({})
  const [date]= useState({date:today})
  const [ userId] =useState(5)

  const getDetails =async(id)=>{
    setNewProductCart({productId:id,quantity:1})
    const addDetails ={
      userId,
      date:date.date,
      products:[{productId:id,quantity:1}]
  }
    const y= await cartContext.CartStoreContext.addCartProducts(addDetails)
  }
  return (
    <>   
     <Grid container>
        {products.map((product) => {
          return (
            <>
             <Grid item xs={12} sm={4} md={4} lg={4} >
              <RecipeReviewCard key={product.id} product={product} getDetails={getDetails}/>;
              </Grid>
            </>
          );
        })}
      </Grid>
      <Grid >
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Grid>
        <h3>CATEGORIES</h3>
      <Grid container>
        {productContext.ProductStoreContext.categeries.map((item)=>(
          <>
            <Grid item xs={12} sm={6} md={5} lg={3} >
            <CategoryCard name={item} image="https://image.shutterstock.com/image-photo/category-word-scattered-english-alpabets-260nw-1594857565.jpg" 
             passingCardName ={getCategoryName}
            />
            </Grid>
          </>
        ))}
      </Grid>
      
    </>
  );
});
export default home;

