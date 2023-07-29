import React from "react";

const Img = ({ className, src, alt, width, height, onClick }) => {
 
  return (
    <img
      className={className ? className : null}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export default Img;
