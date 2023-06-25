// import Form from "../Form";
import Form from "../ReuseForm";
import Img from "../Image";
import Paragraph from "../Paragraph";

const checkItems = [
  {
    width: "10",
    height: "10",
    class: "ph-sm check-ph",
    paragraph: "Instantly issue virtual corporate cards",
  },
  {
    width: "10",
    height: "10",
    class: "ph-sm check-ph",
    paragraph: "Control spending before it happens",
  },
  {
    width: "10",
    height: "10",
    class: "ph-sm check-ph",
    paragraph: "Automate your expense Management",
  },
];

const inputs = [
  {
    class: "",
    id: "1",
    type: "text",
    name: "email",
    placeholder: "Enter email",
  },
];

const sponsors = [
  {
    src: "./Assets/Image/boltshift.avif",
    alt: "Picture",
    width: "50",
    height: "50",
    company: "Boltshift",
  },
  {
    src: "./Assets/Image/lightbox.png",
    alt: "Picture",
    width: "50",
    height: "50",
    company: "Lightbox",
  },
  {
    src: "./Assets/Image/featherDev.jpg",
    alt: "Picture",
    width: "50",
    height: "50",
    company: "FeatherDev",
  },
  {
    src: "./Assets/Image/spherule.png",
    alt: "Picture",
    width: "50",
    height: "50",
    company: "Spherule",
  },
  {
    src: "./Assets/Image/globalBank.png",
    alt: "Picture",
    width: "50",
    height: "50",
    company: "GlobalBank",
  },
  {
    src: "./Assets/Image/nietzsche.png",
    alt: "Picture",
    width: "50",
    height: "50",
    company: "Nietzsche",
  },
];
const Section1 = () => {
  return (
    <section className="sec-1">
      <div className="container">
        <div className="row">
          <div className="col-12 col-fx">
            <div className="content-wrapper">
              <h1>Simple, transparent business credit cards</h1>
              <Paragraph
                className="ph-sm"
                paragraph="Mo money, no problems untitled is a next generation financial technology company in the process of reinventing banking. 30-day free trial."
              />
            </div>
            <div className="content">
              <div className="form-wrapper">
                <Form
                  inputs={inputs}
                  type="submit"
                  skin="primary"
                  id={1}
                  name="Get Started"
                />
                <Paragraph
                  className="ph-sm close"
                  paragraph="We care about your data in our"
                  link="Privacy policy"
                  url="#privacy"
                />
              </div>

              <div className="check-item-wrapper">
                {checkItems.map((item, i) => {
                  return (
                    <div className="check-item" key={i}>
                      <div className="check">
                        <Img
                          className="check-img"
                          src="./Assets/Image/check.jpg"
                          width="15"
                          height="15"
                        />
                      </div>
                      <Paragraph
                        className={item.class}
                        paragraph={item.paragraph}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="credit-card-wrapper">
              <Img
                src="./Assets/Image/credit-card.jpg"
                alt="Credit Card Picture"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-wrapper">
              <Paragraph
                className="ph-sm"
                paragraph="Join 4,000+ Companies already growing"
              />
              <div className="sponsor-wrapper">
                {sponsors.map((sponsor, i) => {
                  return (
                    <div className="sponsor" key={i}>
                      <Img
                        src={sponsor.src}
                        alt={sponsor.alt}
                        width={sponsor.width}
                        height={sponsor.height}
                      />
                      <h2>{sponsor.company}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
