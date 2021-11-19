import React from "react";

export const ContactInfo = ({icon, text}) => {
  console.log(text);
  return (
    <>
      {icon}
      <span style={{ paddingLeft: 10, color: "white" }}>
        {text}
      </span>
    </>
  );
};
