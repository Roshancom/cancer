import Form from "../ReuseForm";
import SubTitle from "../SubTitle";
import { IoSend } from "react-icons/io5";

const input = [
  {
    type: "text",
    id: 1,
    name: "question",
    placeholder: "ask a question?",
    icon: <IoSend />,
  },
];
const Module = () => {
  return (
    <div className="module">
      <div className="background">
        <div className="main-content">
          <div className="header">
            <SubTitle
              className="module-heading"
              subHeading="Check your condtion by asking Quition."
            />
          </div>
          <div className="body"></div>
          <div className="ask-question">
            <Form inputs={input} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Module;
