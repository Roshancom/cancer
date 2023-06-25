import React from "react";
import Button from "../Button";
import Input from "./Input";
import Paragraph from "../Paragraph";

const Form = () => {
  const form = React.useRef();
  console.log(form);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    localStorage.setItem("user", formData.get("email"));
  };
  return (
    <form ref={form} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter your email"
        id="1"
        inputName="email"
      />

      <Button type="submit" skin="primary" title="Get Started" />
    </form>
  );
};

export default Form;
