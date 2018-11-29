import React from "react";
import Item from "../Item";
import "./styles.css";

const ItemList = ({ items }) => (
  <div className="item-list">
    {items.map(item => (
      <Item key={item.title} {...item} />
    ))}
  </div>
);

export default ItemList;
