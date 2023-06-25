const DropDown = ({ SubMenu }) => {
  return (
    <ul>
      {SubMenu.map((el, i) => {
        <li key={i}>
          <a href={el.url}>{el.title}</a>
        </li>;
      })}
    </ul>
  );
};

export default DropDown;
