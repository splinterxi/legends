import React from "react";

const Card = ({ name, username, imageUrl }) => {
  return (
    <div className="tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5">
      <img id="bld" alt="legend1" src={`${imageUrl}`} />

      <div>
        <h2>{name}</h2>
        <p>{username}</p>
      </div>
    </div>
  );
};
export default Card;
