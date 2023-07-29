import FreeTrial from "./FreeTrial";
import Message from "./Message";
import React from "react";
import Module from "../Module";

const Section3 = () => {
  const [isModule, setIsModule] = React.useState(false);
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
              <FreeTrial setIsModule={setIsModule}/>
            </div>
            {
        isModule ? <Module /> : null
      }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
