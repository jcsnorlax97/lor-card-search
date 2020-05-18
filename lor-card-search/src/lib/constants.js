// The information is extracted from `lor-card-search/lib/scanner.js`

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
  { value: "Demacia", displayValue: "Demacia" },
  { value: "Freljord", displayValue: "Freljord" },
  { value: "Ionia", displayValue: "Ionia" },
  { value: "Noxus", displayValue: "Noxus" },
  { value: "PiltoverZaun", displayValue: "Piltover & Zaun" },
  { value: "ShadowIsles", displayValue: "Shadow Isles" },
];

const formRarityOptions = [
  { value: "None", displayValue: "None" },
  { value: "Champion", displayValue: "Champion" },
  { value: "Epic", displayValue: "Epic" },
  { value: "Rare", displayValue: "Rare" },
  { value: "Common", displayValue: "Common" },
];

// Future can use 'key:', 'valueEN', 'valueFR', ... in the future
const formKeywordOptions = [
  { value: "Burst", displayValue: "Burst" },
  { value: "QuickStrike", displayValue: "Quick Attack" },
  { value: "Overwhelm", displayValue: "Overwhelm" },
  { value: "Fast", displayValue: "Fast" },
  { value: "Skill", displayValue: "Skill" },
  { value: "Elusive", displayValue: "Elusive" },
  { value: "Imbue", displayValue: "Imbue" },
  { value: "Slow", displayValue: "Slow" },
  { value: "Challenger", displayValue: "Challenger" },
  { value: "Regeneration", displayValue: "Regeneration" },
  { value: "LastBreath", displayValue: "Last Breath" },
  { value: "Lifesteal", displayValue: "Lifesteal" },
  { value: "Tough", displayValue: "Tough" },
  { value: "Fleeting", displayValue: "Fleeting" },
  { value: "Fearsome", displayValue: "Fearsome" },
  { value: "CantBlock", displayValue: "Can't Block" },
  { value: "DoubleStrike", displayValue: "Double Attack" },
  { value: "Ephemeral", displayValue: "Ephemeral" },
  { value: "Barrier", displayValue: "Barrier" },
  { value: "SpellOverwhelm", displayValue: "Overwhelm (Spell)" },
  { value: "Autoplay", displayValue: "Trap" },
];

module.exports = Object.freeze({
  formCostOptions: formCostOptions,
  formPowerOptions: formPowerOptions,
  formHealthOptions: formHealthOptions,
  formRegionOptions: formRegionOptions,
  formRarityOptions: formRarityOptions,
  formKeywordOptions: formKeywordOptions,
});
