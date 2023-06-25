import React from "react";

const menuList = [
  { title: "Home", url: "home", class: "home" },
  {
    title: "Products",
    url: "product",
    class: "product",
    subMenu: [
      { title: "Product1", url: "Product1" },
      { title: "Product2", url: "Product2" },
      { title: "Product3", url: "Product3" },
    ],
  },
  {
    title: "Resources",
    url: "resources",
    class: "resources",
    subMenu: [
      { title: "Resource1", url: "Resource1" },
      { title: "Resource2", url: "Resource2" },
    ],
  },
  { title: "Pricing", url: "prising", class: "Pricing" },
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
