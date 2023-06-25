import Img from "../Image";
import SubTitle from "../SubTitle";

const Logo = () => {
  return (
    <>
      <div className="logo-wrapper">
        <Img
          className="half-round"
          src="./Assets/Image/logo.webp"
          width="50"
          height="50"
        />
        <SubTitle className="h2" subHeading="Untitled UI" />
      </div>
    </>
  );
};

export default Logo;
