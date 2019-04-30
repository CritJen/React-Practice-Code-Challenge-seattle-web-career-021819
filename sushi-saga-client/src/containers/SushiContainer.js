import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => (
          <Sushi
            sushi={sushi}
            eaten={props.eaten}
            key={sushi.id}
            eatSushi={props.eatSushi}
          />
        ))}
        <MoreButton increaseSushiIndex={props.increaseSushiIndex} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
