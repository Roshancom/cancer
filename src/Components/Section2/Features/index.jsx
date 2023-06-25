import Paragraph from "../../Paragraph";

const featuresText = [
  { title: "Features", class: "h4" },
  { title: "All-in-one finance for any business", class: "h2" },
  {
    title:
      "Get a deposit account,credit card,and spend management software--in one refreshingly easy solution.No fees or Minimums.",
    class: "ph-sm",
  },
];

const Features = () => {
  return (
    <div className="features-wrapper">
      {featuresText.map((text, i) => {
        return (
          <div key={i}>
            <Paragraph className={text.class} paragraph={text.title} />
          </div>
        );
      })}
    </div>
  );
};
export default Features;
