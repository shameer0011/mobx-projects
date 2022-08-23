//all products
export class ProductStoreWithLimit {
    AllProductsApi=async(count)=> {
        // console.log(email, password);
        const response = await fetch(`https://fakestoreapi.com/products?limit=${count}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          
        //   body: JSON.stringify(count),
        });
    
        const parsedResponse = await response.json();
        // console.log(parsedResponse, "22");
        if (!response.ok) {
          throw new Error(parsedResponse);
        }
    
        return parsedResponse;
      }
}

