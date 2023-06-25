import Paragraph from "../../Paragraph";

const titles = [
  { title: "Upgrade", class: "ph-title", id: 1 },
  { title: "Pricing as simple as our cards", class: "h2", id: 2 },
  {
    title:
      "Simple, transparent pricing that grows with you. Try any plan free for 30 days.",
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
            className={name.class}
            paragraph={name.title}
            key={name.id}
          />
        );
      })}
    </>
  );
};

export default Message;
