import React from "react";
import Panel from "../Panel";

const LastProducts = ({products}) => {
  return (
    <Panel
      title="Ostatnie produkty"
      theme="is-danger"
      path="products"
      iconName="pizza-slice"
      listElements={products} />
  );
};

export default LastProducts;