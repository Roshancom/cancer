const Button = ({ title, skin, id, type = "button", onClick}) => {
  return (
    <button className={skin} id={id} type={type} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
