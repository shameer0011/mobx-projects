import React, { useContext } from "react";
import CartContext from "../contexts/cartContext/cartContext";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const cart = observer(() => {
  const cart = useContext(CartContext);
  console.log(toJS(cart.CartStoreContext.carts));
  // useEffect(() => {
  //   async function fetchCart() {
  //     await cart.CartStoreContext.cartsWithCount(5);
  //   }
  //   fetchCart();
  // }, []);
  return (
    <div>
      cart {toJS(cart.CartStoreContext.carts.length)}
      <Grid container>
        {toJS(cart.CartStoreContext.carts)?.map((product) => {
          return (
            <>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box
                  sx={{
                    width: 300,
                    
                    backgroundColor: "primary",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
              >
               <h3> id:{product.id}</h3>
                <h3>date:{product.date}</h3>
                <h3>userId:{product.userId}</h3>
                <h4>Products</h4>
                ................
                {product.products?.map((item)=>(
                  <>
                  <h4>{`productId:${item.productId}==>quantity:${item.quantity}`}</h4>
                  </>

                ))}
                </Box>
              </Grid>

            </>
          );
        })}
      </Grid>
    </div>
  );
});

export default cart;
