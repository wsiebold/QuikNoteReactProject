import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "It is the morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "It is the afternoon";
    customStyle.color = "green";
  } else {
    greeting = "It is the evening";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;