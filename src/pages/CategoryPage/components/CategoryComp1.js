import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getAllProducts from "../../../redux/actions/category/getAllProducts";

const CategoryComp1 = () => {

  const dispatch = useDispatch();

  const fetchResources = () => {
      dispatch(getAllProducts());
  };

  useEffect(() => {
    fetchResources();
  }, []);

  // Getting from redux state from state.category
  const { loading, isError, products } = useSelector((state) => state.category);


  // when loading is true....
  if (loading) {
    return <div>Loading..................</div>;
  }

  // When error to fetch data from server
  if (!loading && isError) {

    return <div style={{border:'1px solid '}} ><p> Network Error  </p>
        <button onClick={fetchResources} > try again </button>
     </div>;
  }

  // If everything is ok then we render a list of products.....
  if (products && !isError && !loading) {
      const productList = products.map((value,index) => {
        return (
            <div key={index} style={{border:'1px solid '}} >
              <p>Title: {value.title}</p>
              <img src={value.image} width="100px" height="100px" />
              <p>Price:{value.price}</p>
            </div>
        );
      });

      return (
        <>
          <div>CategoryComp1 Showing productList </div>
          {productList}
        </>
      );
  }
};

export default CategoryComp1;
