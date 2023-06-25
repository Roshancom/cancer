import React from "react";

const Img = ({ className, src, alt, width, height, setMenuStatus }) => {
  const handleClick = () => {
    setMenuStatus((prev) => !prev);   
  };
  return (
    <img
      className={className ? className : null}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={handleClick}
    />
  );
};

export default Img;
