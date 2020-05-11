const cardRoutes = (app, fs) => {
  // variables
  const dataPath = "./server/data/set1-en_us.json";

  // READ
  app.get("/api/cards", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = cardRoutes;
