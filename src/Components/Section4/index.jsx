import Img from "../Image";
import FeatureTab from "./FeatureTab";
import Message from "./Message";

const Section4 = () => {
  return (
    <section className="sec-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Message />
          </div>
        </div>
        <div className="row ">
          <div className="col-wrapper dir-col">
            <FeatureTab />
            <div className="col-6">
              <div className="img">
                <Img
                  src="./Assets/Image/visa-card.webp"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
