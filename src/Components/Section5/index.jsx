import BasicPlan from "./BasicPlan";
import FeatureTab from "./FeatureTap";
import Message from "./Message";

const Section5 = () => {
  return (
    <section className="sec-5 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-12 bg-gray">
            <Message />
          </div>
        </div>
        <div className="row ">
          <div className="col-6">
            <FeatureTab />
          </div>
          <BasicPlan />
        </div>
      </div>
    </section>
  );
};

export default Section5;
