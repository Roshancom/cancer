import Paragraph from "../../Paragraph";
import SubTitle from "../../SubTitle";
import Img from "../../Image";

const items = [
  {
    img: {
      src: "./Assets/Image/readMore.webp",
      alt: "learn more picture",
      width: "50",
      height: "40",
    },
    subHead: {
      class: "h4",
      title: "Share team inboxes",
    },
    paragraph: {
      class: "ph-sm",
      title:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
  },
  {
    img: {
      src: "./Assets/Image/boltshift.avif",
      alt: "boltshift picture",
      width: "50",
      height: "40",
    },
    subHead: {
      class: "h4",
      title: "Deliver instant answers",
    },
    paragraph: {
      class: "ph-sm",
      title:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
  },
  {
    img: {
      src: "./Assets/Image/logo.webp",
      alt: "logo picture",
      width: "50",
      height: "40",
    },
    subHead: {
      class: "h4",
      title: "Manage your team with reports",
    },
    paragraph: {
      class: "ph-sm",
      title:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  },
];

const FeatureTab = () => {
  return (
    <div className="col-top">
      {items.map((item, i) => {
        return (
          <div className="features" key={i}>
            <Img
              src={item.img.src}
              alt={item.img.alt}
              width={item.img.width}
              height={item.img.height}
            />
            <div>
              <SubTitle
                className={item.subHead.class}
                subHeading={item.subHead.title}
              />
              <Paragraph
                className={item.paragraph.class}
                paragraph={item.paragraph.title}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureTab;
