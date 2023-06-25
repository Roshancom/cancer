import Button from "../../Button";
import Paragraph from "../../Paragraph";
import SubTitle from "../../SubTitle";
import Img from "../../Image";

const items = [
  {
    subHead: {
      class: "h4",
      title: "Share team inboxes",
    },
    paragraph: {
      class: "ph-sm",
      title:
        "Wheather you have a team of 2 or 200, our share team inboxes keep everyone on the same page and in the loop.",
    },
    btn: {
      skin: "secondary",
      title: "Learn More",
      type: "button",
      id: "1",
    },
    img: {
      src: "./Assets/Image/readMore.webp",
      alt: "learn more picture",
      width: "50",
      height: "10",
    },
  },
  {
    subHead: {
      class: "h4",
      title: "Deliver instant answer",
    },
    paragraph: {
      class: "ph-sm",
      title:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    btn: {
      skin: "secondary",
      title: "Learn More",
      type: "button",
      id: "2",
    },
    img: {
      src: "./Assets/Image/readMore.webp",
      alt: "learn more picture",
      width: "50",
      height: "10",
    },
  },
  {
    subHead: {
      class: "h4",
      title: "Manage your team with reports",
    },
    paragraph: {
      class: "ph-sm",
      title:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    btn: {
      skin: "secondary",
      title: "Learn More",
      type: "button",
      id: "3",
    },
    img: {
      src: "./Assets/Image/readMore.webp",
      alt: "learn more picture",
      width: "50",
      height: "10",
    },
  },
];

const FeatureTab = () => {
  return (
    <div className="col-6">
      {items.map((item) => {
        return (
          <div className="list" key={item.btn.id}>
            <SubTitle
              className={item.subHead.class}
              subHeading={item.subHead.title}
            />
            <Paragraph
              className={item.paragraph.class}
              paragraph={item.paragraph.title}
            />
            <Button
              skin={item.btn.skin}
              title={item.btn.title}
              type={item.btn.type}
              id={item.btn.id}
            />
            <Img
              src={item.img.src}
              alt={item.img.alt}
              width={item.img.width}
              height={item.img.height}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeatureTab;
