//all carts
export class AddCardsStoreApi {
  AddCartsApi = async (productDetails) => {
    // console.log(email, password);
  

    const response = await fetch(
      `https://fakestoreapi.com/carts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // body: JSON.stringify({
        //   userId: 5,
        //   date: "2020 - 02 - 03",
        //   products: [
        //     { productId: 5, quantity: 1 },
        //     { productId: 1, quantity: 5 },
        //   ],
        // }),
        body: JSON.stringify(productDetails)
      }
    );

    const parsedResponse = await response.json();
    console.log(parsedResponse, "22");
    if (!response.ok) {
      throw new Error(parsedResponse);
    }

    return parsedResponse;
  };
}
