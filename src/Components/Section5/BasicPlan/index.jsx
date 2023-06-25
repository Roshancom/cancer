import Button from "../../Button";
import Img from "../../Image";
import Paragraph from "../../Paragraph";
import SubTitle from "../../SubTitle";

const items = [
  { name: "$", class: "h1" },
  { name: "10", class: "h1" },
  { name: "per month", class: "pad-top" },
];

const texts = [
  {
    paragraph: {
      title: "FEATURES",
      class: "h4",
    },
  },
  {
    paragraph: {
      title: "Everything in our free plan plus....",
      class: "ph-sm",
    },
  },
];

const features1 = [
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Access to basic features",
      class: "ph-sm check-ph",
    },
  },
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Basic reporting + analytics",
      class: "ph-sm check-ph",
    },
  },
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Up to 10 individual users",
      class: "ph-sm check-ph",
    },
  },
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "20GB individual data",
      class: "ph-sm check-ph",
    },
  },
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Basic chat support",
      class: "ph-sm check-ph",
    },
  },
];

const features2 = [
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Attend events",
      class: "ph-sm check-ph",
    },
  },
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Automatic updates",
      class: "ph-sm check-ph",
    },
  },
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Backup your account",
      class: "ph-sm check-ph",
    },
  },
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Audit log and notes",
      class: "ph-sm check-ph",
    },
  },
  {
    img: {
      class: "half-round",
      src: "./Assets/Image/check.jpg",
      alt: "check picture",
      height: "40",
      width: "40",
    },
    paragraph: {
      title: "Feature requests",
      class: "ph-sm check-ph",
    },
  },
];

const BasicPlan = () => {
  return (
    <div className="col-6 ">
      <div className="basic-plan-wrapper col-shadow">
        <div className=" col-ord">
          <div className="basic-plan">
            <SubTitle subHeading="Basic plan" className="h1" />
            <Button title="Popular" type="button" id="1" />
            <Paragraph
              className="ph-sm"
              paragraph="Our most popular plan for small teams."
            />
          </div>
        </div>
        <div className=" col-fx">
          {items.map((value, i) => {
            return (
              <Paragraph
                className={value.class}
                paragraph={value.name}
                key={i}
              />
            );
          })}
        </div>

        <hr />

        <div className="mx-wh-full">
          {texts.map((text, i) => (
            <Paragraph
              className={text.paragraph.class}
              paragraph={text.paragraph.title}
              key={i}
            />
          ))}
        </div>

        <div className="features-wrapper">
          <div className="col-6 dir-col mx-wh-full">
            {features1.map((item, i) => (
              <div className="features" key={i}>
                <div className="check">
                  <Img
                    className="check-img"
                    src={item.img.src}
                    alt={item.img.alt}
                    width={item.img.width}
                    height={item.img.height}
                  />
                </div>
                <Paragraph
                  className={item.paragraph.class}
                  paragraph={item.paragraph.title}
                />
              </div>
            ))}
          </div>
          <div className="col-6 dir-col mx-wh-full">
            {features2.map((item, i) => (
              <div className="features" key={i}>
                <div className="check">
                  <Img
                    className="check-img"
                    src={item.img.src}
                    alt={item.img.alt}
                    width={item.img.width}
                    height={item.img.height}
                  />
                </div>
                <Paragraph
                  className={item.paragraph.class}
                  paragraph={item.paragraph.title}
                />
              </div>
            ))}
          </div>

          <hr />

          <div className="mx-wh-full">
            <Button skin="btn-full" id={1} title="Get Started " type="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicPlan;
