// Seeding utility
const Disc = require("../models/disc");

const seedDisc = discData => {
  const { title, year, season, description, price } = discData;
  Disc.findOne({ title })
    .then(foundDisc => {
      if (!foundDisc) {
        Disc.create({
          title,
          year,
          season,
          description,
          price
        }).catch(err => {
          throw err;
        });
      } else if (foundDisc) {
        Disc.updateOne(
          { title },
          {
            title,
            year,
            season,
            description,
            price
          },
          (err, raw) => {
            if (err) {
              throw err;
            }
          }
        );
      }
    })
    .catch(err => {
      throw err;
    });
};

module.exports = seedDisc;
