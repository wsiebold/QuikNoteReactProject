import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

return (
    <h1 className="heading">
      Quik Note (Keeper) App
    </h1>
  );
}

export default Heading;