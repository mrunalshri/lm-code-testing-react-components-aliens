import { useState } from "react";
import Button from "./Button";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";
import W12MHeader from "./W12MHeader";

const W12MForm = () => {
  const [formData, setFormData] = useState({
    species: "",
    planet: "",
    numberOfBeings: "",
    question: "Not 4",
    reasonText: "",
  });
  const handleFormData = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  console.log("formData====>", formData);
  return (
    <section className="w12MForm">
      <W12MHeader />
      <TextInput
        onChangeHandler={handleFormData}
        value={formData.species}
        name="species"
        labelText="Species Name:"
      />
      <TextInput
        onChangeHandler={handleFormData}
        value={formData.planet}
        name="planet"
        labelText="Planet Name:"
      />
      <TextInput
        onChangeHandler={handleFormData}
        value={formData.numberOfBeings}
        name="numberOfBeings"
        labelText="Number Of Beings"
      />
      <SelectInput
        name="question"
        onChangeHandler={handleFormData}
        value={formData.question}
        labelText="What is 2+2?"
      />
      <TextAreaInput
        onChangeHandler={handleFormData}
        value={formData.reasonText}
        name="reasonText"
        labelText="Reason for sparing:"
      />
      <Button type="button" labelText="Submit form" />
    </section>
  );
};

export default W12MForm;
