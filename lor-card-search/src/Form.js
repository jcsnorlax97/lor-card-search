import React from "react";
import Select from "./components/Select";
import TextInput from "./components/TextInput";

// TODO: create another file for storing all these options information.
const formCostOptions = [
  { value: "0", displayValue: "0" },
  { value: "1", displayValue: "1" },
  { value: "2", displayValue: "2" },
  { value: "3", displayValue: "3" },
  { value: "4", displayValue: "4" },
  { value: "5", displayValue: "5" },
  { value: "6", displayValue: "6" },
  { value: "7", displayValue: "7" },
  { value: "8", displayValue: "8" },
  { value: "9", displayValue: "9" },
  { value: "10+", displayValue: "10+" },
];
const formPowerOptions = [
  { value: "0", displayValue: "0" },
  { value: "1", displayValue: "1" },
  { value: "2", displayValue: "2" },
  { value: "3", displayValue: "3" },
  { value: "4", displayValue: "4" },
  { value: "5", displayValue: "5" },
  { value: "6", displayValue: "6" },
  { value: "7", displayValue: "7" },
  { value: "8", displayValue: "8" },
  { value: "9", displayValue: "9" },
  { value: "10+", displayValue: "10+" },
];
const formHealthOptions = [
  { value: "0", displayValue: "0" },
  { value: "1", displayValue: "1" },
  { value: "2", displayValue: "2" },
  { value: "3", displayValue: "3" },
  { value: "4", displayValue: "4" },
  { value: "5", displayValue: "5" },
  { value: "6", displayValue: "6" },
  { value: "7", displayValue: "7" },
  { value: "8", displayValue: "8" },
  { value: "9", displayValue: "9" },
  { value: "10+", displayValue: "10+" },
];
const formRegionOptions = [
  { value: "Bilgewater", displayValue: "Bilgewater" },
  { value: "Demacia", displayValue: "Demacia" },
  { value: "Freljord", displayValue: "Freljord" },
  { value: "Ionia", displayValue: "Ionia" },
  { value: "Noxus", displayValue: "Noxus" },
  { value: "PiltoverZaun", displayValue: "Piltover & Zaun" },
  { value: "ShadowIsles", displayValue: "Shadow Isles" },
];
const formRarityOptions = [
  { value: "Champion", displayValue: "Champion" },
  { value: "Epic", displayValue: "Epic" },
  { value: "Rare", displayValue: "Rare" },
  { value: "Common", displayValue: "Common" },
];

// TODO: need a json-file scanner to find all existing keywords, instead of only one keyword option.
const formKeywordOptions = [
  { value: "QuickStrike", displayValue: "Quick Attack" },
];

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
        options={formCostOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formPower"
        description="Power: "
        multiple={true}
        value={formPower}
        options={formPowerOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formHealth"
        description="Health: "
        multiple={true}
        value={formHealth}
        options={formHealthOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formRegion"
        description="Region: "
        multiple={true}
        value={formRegion}
        options={formRegionOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formRarity"
        description="Rarity: "
        multiple={true}
        value={formRarity}
        options={formRarityOptions}
        onSelect={onFormSelect}
      />
      <br />
      <Select
        name="formKeyword"
        description="Keywords: "
        multiple={true}
        value={formKeyword}
        options={formKeywordOptions}
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
