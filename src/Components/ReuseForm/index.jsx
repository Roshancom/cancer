import React from "react";

const Form = ({ inputs, skin, id, type, name }) => {
  const [details, setDetails] = React.useState({});
  const [screenSize, setScreenSize] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.stringify(details);
    localStorage.setItem("users", user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  window.onresize = () => {
    setScreenSize(window.innerWidth);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div key={input.id}>
          {input.label ? (
            <label forhtml={input.id}>{input.name} :</label>
          ) : null}

          <input
            className={input.class}
            type={input.type}
            name={input.name}
            id={input.id}
            value={details.name}
            onChange={handleChange}
            placeholder={input.placeholder}
          />
        </div>
      ))}
      {screenSize < 600 ? (
        <p className="text ph-sm">
          <a href="#Privacy policy."></a>
        </p>
      ) : null}

      <button type={type} id={id} className={skin}>
        {name}
      </button>
    </form>
  );
};

export default Form;
