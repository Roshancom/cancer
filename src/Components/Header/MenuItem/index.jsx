import React from "react";

const menuList = [
  { title: "Home", url: "home", class: "home" },
  {
    title: "Type of cancers",
    url: "/cancer",
    class: "cancer",
    subMenu: [
      { title: "Cancer1", url: "Cancer1" },
      { title: "Cancer2", url: "Cancer2" },
      { title: "Cancer3", url: "Cancer3" },
    ],
  },
  {
    title: "Other Disease",
    url: "disease",
    class: "disease",
    subMenu: [
      { title: "Disease1", url: "Disease1" },
      { title: "Disease2", url: "Disease2" },
    ],
  },
  { title: "Contact Us", url: "contact", class: "Contact" },
];

const initialState = {
  Products: false,
  Resources: false,
};

const NavList = () => {
  const [clickList, setClickList] = React.useState({
    Products: false,
    Resources: false,
  });

  document.body.onclick = () => {
    setClickList({
      Products: false,
      Resources: false,
    });
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const value = clickList[e.target.innerText];
    const name = e.target.innerText;
    setClickList({ ...initialState, [name]: !value });
  };

  return (
    <nav>
      <ul>
        {menuList.map((el, i) => {
          return (
            <li key={i} className={el.class} onClick={handleClick}>
              <a href={`#${el.url}`}>{el.title}</a>
              {clickList[el.title] ? (
                <ul className={el.subMenu ? "submenu" : null}>
                  {el.subMenu && el.subMenu.length
                    ? el.subMenu.map((menu) => (
                        <li key={menu.url}>{menu.title}</li>
                      ))
                    : null}
                </ul>
              ) : null}
              {el.subMenu ? (
                <img
                  src="./Assets/Image/dropdown.png"
                  alt="DropDown picture"
                  width="10"
                  height="10"
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
