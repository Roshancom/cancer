import Features from "./Features";
import Cards from "./Cards";

const Section2 = () => {
  return (
    <section className="sec-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Features />
          </div>
          <div className="col-12">
            <Cards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
