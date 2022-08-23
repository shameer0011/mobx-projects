import { Grid } from '@mui/material';
import { toJS } from 'mobx';
import { observer} from 'mobx-react';
import React ,{useContext} from 'react'
import { useEffect } from 'react'
import RecipeReviewCard from '../components/cards';
import ProductContext from "../contexts/productContext/productContext";

const productDetails = observer(() => {

 const singleProductContext = useContext(ProductContext);
 const products  = singleProductContext.ProductStoreContext;
 const product=toJS(products.singleProductApiStore);
 
  useEffect(()=>{
    async function getSingleProduct(){
   const r = await singleProductContext.ProductStoreContext.singleProductStore(1);
    }
    getSingleProduct();
  },[])

  return (
    <>
    <div>
      <RecipeReviewCard {...product} />
    </div>
    <Grid>
        {singleProductContext.ProductStoreContext.categeries.map((item,index)=>(
          <>
          <h3>
            {item}
          </h3>
          </>
        ))}
      </Grid>
    </>

  )
}
)
export default productDetails;
