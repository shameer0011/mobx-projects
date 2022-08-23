//all carts
export class CardsStoreWithLimit {
    AllCartsApi=async(count)=> {
        // console.log(email, password);
        const response = await fetch(`https://fakestoreapi.com/carts?limit=${count}`, {
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