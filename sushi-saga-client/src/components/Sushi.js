import React, { Fragment } from "react";

const Sushi = props => {
  let { eaten, sushi, eatSushi } = props;
  let { img_url, name, price } = sushi;
  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushi)}>
        {eaten.includes(sushi) ? null : (
          <img src={img_url} width="100%" alt="sushi" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
