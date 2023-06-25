import FreeTrial from "./FreeTrial";
import Message from "./Message";

const Section3 = () => {
  return (
    <section className="sec-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-fx">
            <Message />
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="trial-wrapper bg-gray mg">
              <FreeTrial />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
