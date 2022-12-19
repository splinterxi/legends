import React from "react";
import Card from "./Card";

const CardList = ({ legends }) => {
  if (true) {
    throw new Error("Mess up oo");
  }
  return (
    <div>
      {legends.map((user, i) => {
        return (
          <Card
            key={i}
            id={legends[i].id}
            name={legends[i].name}
            username={legends[i].username}
            imageUrl={legends[i].imageUrl}
          />
        );
      })}
    </div>
  );
};

export default CardList;
