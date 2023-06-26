import Paragraph from "../../Paragraph";

const featuresText = [
  { title: "CANCER SERVICES", class: "h4" },
  { title: "All-in-one cancer services", class: "h2" },
  {
    title:
      "Health care offers comprehensive care for individuals facing a diagnosis of cancer. Our multidisciplinary team of physicians and clinical professionals is committed to medical excellence, combining stringent clinical standards with educational support resources to meet the physical and emotional needs of patients. This commitment has resulted in the cancer program receiving accreditation from the American College of Radiology and the Commission on Cancer of the American College of Surgeons.",
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
