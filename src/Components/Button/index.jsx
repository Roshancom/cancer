const Button = ({ title, skin, id, type = "button" }) => {
  return (
    <button className={skin} id={id} type={type}>
      {title}
    </button>
  );
};
export default Button;
