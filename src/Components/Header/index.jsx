import Logo from "../Logo";
import NavList from "./MenuItem";
import Button from "../Button";
import Img from "../Image";
import HamburgerMenu from "../HamburgerMenu";
import React from "react";

const buttons = [
  { name: "Login", id: "1", color: "base-white" },
  { name: "Sign up", id: "2", color: "primary" },
];

const Navigation = () => {
  const [menuStatus, setMenuStatus] = React.useState(false);

  if (menuStatus) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12 header-col">
              <Logo />
              <NavList />
              <div className="btn-wrapper">
                {buttons.map((button) => {
                  return (
                    <Button
                      key={button.id}
                      title={button.name}
                      skin={button.color}
                      id={button.id}
                    />
                  );
                })}
              </div>
              <div className="hamburger-menu">
                <Img
                  src="./Assets/Image/hamburgerMenu.png"
                  width="30"
                  height="30"
                  setMenuStatus={setMenuStatus}
                  status={menuStatus}                  
                />
              </div>
              {menuStatus ? <HamburgerMenu /> : null}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
