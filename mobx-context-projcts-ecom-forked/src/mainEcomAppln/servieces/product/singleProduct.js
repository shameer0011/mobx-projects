
//single product service
export class SingleProductApi {
    SingleProductApi=async(id)=> {
        // console.log(email, password);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
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
