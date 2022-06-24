import CategoryActionType from "../../actiontype/category/CategoryActionType";
import axios from "axios";

// Action - Getting All Products from API or server 
// Using redux-thunk middleware
const getAllProducts = () => {
  return async (dispatch) => {
    // Making loading true...
    dispatch({ type: CategoryActionType.SET_LOADING_TRUE });

    try {
      // Getting All Product List in one go...
      const response = await axios.get("https://fakestoreapi.com/products");
    // storing proper data into redux state of products
    // sending plain object to the reducer function
      dispatch({
        type: CategoryActionType.GET_ALL_PRODUCT_LIST,
        payload: response.data,
      });
    } catch (error) {
      // If any error in the case of fetching data from server
      dispatch({ type: CategoryActionType.SET_ERROR_TRUE });
    }
  };
};

export default getAllProducts;
