import React from "react";
import Items from "./Items";

const Box = (props) => {
  const items = props.data.map((singleData, index) => {
    return (
      <Items
        removeHandler={props.removeHandler}
        key={index}
        id={index}
        item={singleData.item}
        time={singleData.time}
      />
    );
  });
  return <div className="p-3">{items}</div>;
};

export default Box;
