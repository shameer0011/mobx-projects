import { Grid } from '@mui/material';
import { toJS } from 'mobx';
import React from 'react'
import { useContext } from 'react';
import RecipeReviewCard from '../components/cards';
import ProductContext from '../contexts/productContext/productContext';

const categeries = () => {
  const productContext = useContext(ProductContext);
  console.log(productContext.ProductStoreContext);
  // console.log(toJS(productContext.ProductStoreContext.categeries),"ppp");
  console.log(toJS(productContext.ProductStoreContext.singleCategoryStore),"ppp");
  return (
    <div>
      categeries
      <Grid>
        {toJS(productContext.ProductStoreContext.categeries).map((item,index)=>(
          <>
          <h3>
            {item}
          </h3>
          </>
        ))}
      </Grid>

      <Grid container>
        {productContext.ProductStoreContext.singleCategoryStore.map((item)=>(
          <>
            <Grid item xs={12} sm={6} md={5} lg={3} >
            <RecipeReviewCard key={item.id} {...item} />;
            </Grid>
          </>
        ))}
        </Grid>
      </div>
  )
}

export default categeries