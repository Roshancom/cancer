import Button from "../../Button";
import Paragraph from "../../Paragraph";

const buttons = [
  { name: "Ask question", class: "primary", id: 1, type: "button" },
];
const titles = [
  {
    class: "h3",
    Paragraph: "Check your health condition",
    id: 1,
  },
];
const FreeTrial = ({setIsModule}) => {

  const handleClick = (e)=>{
    console.log(e,"click")
    setIsModule(true)
  }
  return (
    <>
      <div className="trial">
        {titles.map((title) => {
          return (
            <Paragraph
              key={title.id}
              className={title.class}
              paragraph={title.Paragraph}
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
              onClick={handleClick}
            />
          );
        })}
      </div>
    
    </>
  );
};

export default FreeTrial;
