// how to run the script?
// `cd ./lor-card-search/lor-card-search/`
// `node ./utils/scanner.js`

// use fs to read the json files.
const fs = require("fs");

class Scanner {
  constructor(dataPath, fs) {
    this.dataPath = dataPath;
    this.fs = fs; // using fs, you're not storing the information you have read into as a private variables.
  }

  run() {
    this.read((err, content) => {
      if (err) throw err;
      const jsonStr = content;
      const jsonObj = this.parse(jsonStr);
      this.display(jsonObj);
    });
  }

  // to read the file in json format, convert it into json object, and update state.
  // Get data from fs.readFile: https://stackoverflow.com/a/10058879
  read(callback) {
    this.fs.readFile(this.dataPath, "utf8", (err, content) => {
      if (err) throw callback(err, null);
      callback(null, content);
    });
  }

  parse(jsonStr) {
    return JSON.parse(jsonStr);
  }

  display(jsonObj) {
    const uniqueRegionRef = [...new Set(jsonObj.map((card) => card.regionRef))];
    const uniquePower = [...new Set(jsonObj.map((card) => card.attack))];
    const uniqueCost = [...new Set(jsonObj.map((card) => card.cost))];
    const uniqueHealth = [...new Set(jsonObj.map((card) => card.health))];
    const uniqueKeywords = [
      ...new Set([].concat(...jsonObj.map((card) => card.keywords))),
    ];
    const uniqueKeywordRefs = [
      ...new Set([].concat(...jsonObj.map((card) => card.keywordRefs))),
    ];
    const uniqueSpellSpeedRef = [
      ...new Set(jsonObj.map((card) => card.spellSpeedRef)),
    ];
    const uniqueRarityRef = [...new Set(jsonObj.map((card) => card.rarityRef))];
    const uniqueSubtype = [...new Set(jsonObj.map((card) => card.subtype))];
    const uniqueSubtypes = [
      ...new Set([].concat(...jsonObj.map((card) => card.subtypes))),
    ];
    const uniqueSupertype = [...new Set(jsonObj.map((card) => card.supertype))];
    const uniqueType = [...new Set(jsonObj.map((card) => card.type))];
    const uniqueCollectible = [
      ...new Set(jsonObj.map((card) => card.collectible)),
    ];

    console.log("RegionRef: ", uniqueRegionRef);
    console.log("Power: ", uniquePower);
    console.log("Cost: ", uniqueCost);
    console.log("Health: ", uniqueHealth);
    console.log("Keywords: ", uniqueKeywords);
    console.log("KeywordRefs: ", uniqueKeywordRefs);
    console.log("SpellSpeedRef: ", uniqueSpellSpeedRef);
    console.log("RarityRef: ", uniqueRarityRef);
    console.log("Subtype: ", uniqueSubtype);
    console.log("Subtypes: ", uniqueSubtypes);
    console.log("Supertype: ", uniqueSupertype);
    console.log("Type: ", uniqueType);
    console.log("Collectible: ", uniqueCollectible);
  }
}

// cd to /lor-card-search/lor-card-search/ first
const scanner = new Scanner("./server/data/set1-en_us.json", fs);
scanner.run();
