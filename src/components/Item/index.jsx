import React from "react";
import moment from "moment";

const Item = ({ fullName, date, title, imageUrl }) => {
  const time = new Date() - new Date(date);
  const durationInHours = moment.duration(time).hours();
  const durationInMin = moment.duration(time).minutes();
  return (
    <div style={{ borderBottom: "1px solid #ccc", margin: "50px 0" }}>
      <span style={{ color: "gray" }}>🐵{fullName} -</span>
      <span style={{ color: "gray", marginLeft: "4px" }}>
        {durationInHours ? durationInHours + "h" : durationInMin + "m"}
      </span>
      <h1>{title} </h1>
      <img alt="item-img" src={imageUrl} />
    </div>
  );
};

export default Item;
