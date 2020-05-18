import React from "react";
import Select from "./components/Select";
import TextInput from "./components/TextInput";

const constants = require("./lib/constants");

// cost, ..., keyword => array list (multiple selection)
const Form = ({
  formCost,
  formPower,
  formHealth,
  formRegion,
  formRarity,
  formKeyword,
  formText,
  onFormChange,
  onFormSelect,
  onFormSubmit,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <Select
        name="formCost"
        description="Cost: "
        multiple={true}
        value={formCost}
        options={constants.formCostOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formPower"
        description="Power: "
        multiple={true}
        value={formPower}
        options={constants.formPowerOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formHealth"
        description="Health: "
        multiple={true}
        value={formHealth}
        options={constants.formHealthOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formRegion"
        description="Region: "
        multiple={true}
        value={formRegion}
        options={constants.formRegionOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formRarity"
        description="Rarity: "
        multiple={true}
        value={formRarity}
        options={constants.formRarityOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formKeyword"
        description="Keywords: "
        multiple={true}
        value={formKeyword}
        options={constants.formKeywordOptions}
        onSelect={onFormSelect}
      />
      <br />
      <TextInput
        name="formText"
        description="Search bar: "
        value={formText}
        onChange={onFormChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
