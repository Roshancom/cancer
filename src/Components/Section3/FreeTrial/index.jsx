import Button from "../../Button";
import Paragraph from "../../Paragraph";

const buttons = [
  { name: "Learn More", class: "primary", id: 1, type: "button" },
  { name: "Get Started", class: "secondary", id: 2, type: "button" },
];
const titles = [
  {
    class: "h3",
    Paragraph: "Start your",
    span: "30-day",
    back: "free trial",
    id: 1,
  },
  {
    class: "ph-sm",
    Paragraph: "Over 4,000+ people already Join with Health care.",
    id: 2,
  },
];
const FreeTrial = () => {
  return (
    <>
      <div className="trial">
        {titles.map((title) => {
          return (
            <Paragraph
              key={title.id}
              className={title.class}
              paragraph={title.Paragraph}
              span={title.span}
              back={title.back}
            />
          );
        })}
      </div>
      <div className="btn-wrapper">
        {buttons.map((button) => {
          return (
            <Button
              key={button.id}
              skin={button.class}
              type={button.type}
              id={button.id}
              title={button.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default FreeTrial;
