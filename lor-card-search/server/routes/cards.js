const cardRoutes = (app, fs) => {
  // variables (`test-data.json` for using sample dataset)
  const dataPath = "./server/data/set1-en_us.json";

  // refactor fs.readFile into one location
  const read = (callback) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) throw callback(err, null);
      callback(null, data);
    });
  };

  // GET endpoint (READ)
  app.get("/api/cards", (req, res) => {
    read((err, data) => {
      if (err) throw err;
      const jsonObj = JSON.parse(data);
      res.send(jsonObj);
    });
  });

  // POST endpoint (READ)
  app.post("/api/cards", (req, res) => {
    // extract variables from body in the POST request
    const {
      formCost, // array: int (cost)
      formPower, // array: int (attack)
      formHealth, // array: int (health)
      formRegion, // array: characters (regionRef)
      formRarity, // array: characters (rarityRef: spell === 'None')
      formKeyword, // array: characters
      formText,
    } = req.body;

    // read card information from the json file
    read((err, data) => {
      if (err) throw err;
      const cards = JSON.parse(data);

      // filter specific cards based on the body data
      const matchingCards = cards.filter(
        (card) =>
          formCost.includes(card.cost.toString()) &&
          formPower.includes(card.attack.toString()) &&
          formHealth.includes(card.health.toString()) &&
          formRegion.includes(card.regionRef) &&
          formRarity.includes(card.rarityRef) &&
          !formKeyword
            .map((keyword) => card.keywordRefs.includes(keyword))
            .includes(false) &&
          (card.name.includes(formText) ||
            card.description.includes(formText) ||
            card.levelupDescription.includes(formText))
      );

      // send response back to the front-end client side
      res.send(matchingCards);
    });
  });
};

module.exports = cardRoutes;
