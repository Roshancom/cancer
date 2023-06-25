import Paragraph from "../../Paragraph";

const titles = [
  { title: "Features", class: "ph-title", id: 1 },
  { title: "The only card you'll ever need.Simple.", class: "h2", id: 2 },
  {
    title:
      "Spend smarter,lower your bills, get cash bank on every thing you buy, and unlock credit to grow your business.",
    class: "ph-sm",
    id: 3,
  },
];

const Message = () => {
  return (
    <>
      {titles.map((name) => {
        return (
          <Paragraph
            key={name.id}
            className={name.class}
            paragraph={name.title}
            test
          />
        );
      })}
    </>
  );
};

export default Message;
