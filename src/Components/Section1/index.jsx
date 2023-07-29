// import Form from "../Form";
import Form from "../ReuseForm";
import Img from "../Image";
import Paragraph from "../Paragraph";

const inputs = [
  {
    class: "",
    id: "1",
    type: "text",
    name: "email",
    placeholder: "Enter email",
  },
];

const Section1 = () => {
  return (
    <section className="sec-1">
      <div className="container">
        <div className="row">
          <div className="col-12 col-fx">
            <div className="content-wrapper">
              <h1>
                You can be a victim of cancer, or a survivor of cancer. It's a
                mindset
              </h1>
              <Paragraph
                className="ph-sm"
                paragraph="One day at a time, one step at a time. Do what you can, do your best. Let God handle the rest."
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="credit-card-wrapper">
              <Img
                src="./Assets/Image/banner.png"
                alt="Credit Card Picture"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
