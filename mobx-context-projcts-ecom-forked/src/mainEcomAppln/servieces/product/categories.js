//all category products
export class AllCategoryProducts {
  Allcategories = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        //   body: JSON.stringify(count),
      }
    );

    const parsedResponse = await response.json();
    // console.log(parsedResponse, "22");
    if (!response.ok) {
      throw new Error(parsedResponse);
    }
    return parsedResponse;
  };
  //Single Categories
  GetSinglecategory = async (Categories) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${Categories}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        //   body: JSON.stringify(count),
      }
    );

    const parsedResponse = await response.json();
    // console.log(parsedResponse, "22");
    if (!response.ok) {
      throw new Error(parsedResponse);
    }
    return parsedResponse;
  };
}
