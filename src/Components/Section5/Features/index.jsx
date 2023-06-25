import Paragraph from "../../Paragraph";
import SubTitle from "../../SubTitle";

const texts = [
  {
    img: {
      class: "",
      src: "",
      alt: "",
      height: "",
      width: "",
    },
    paragraph: {
      class: "",
      paragraph: "",
    },
  },
];

const Features = () => {
  return (
    <>
      <div>
        <SubTitle className="h4" subHeading="FEATURES" />
        <Paragraph
          className="ph-sm"
          paragraph="Everything in our free plan plus...."
        />
      </div>
      {}
    </>
  );
};

export default Features;
