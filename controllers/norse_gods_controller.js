const norseGods = require('../models/norse_gods_model');

// Create a norse god
const createGod = async (req, res) => {
  const god = new norseGods({
    name: req.body.name,
    race: req.body.race,
    gender: req.body.gender,
    father: req.body.father,
    mother: req.body.mother,
    offspring: req.body.offspring,
    description: req.body.description,
  });

  try {
    const savedGod = await god.save();
    res.json(savedGod);
  } catch (e) {
    res.json({ message: e });
  }
};

// Get all norse gods
const allGods = async (req, res) => {
  try {
    const gods = await norseGods.find();
    res.json(gods);
  } catch (e) {
    res.json({ message: e });
  }
};

// Get a norse god
const singleGod = async (req, res) => {
  try {
    const god = await norseGods.findById(req.params.id);
    res.json(god);
  } catch (e) {
    res.json({ message: e });
  }
};

// Update a god
const updateGod = async (req, res) => {
  try {
    const god = await norseGods.findById(req.params.id);
    const updatedGod = await norseGods.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name || god.name,
          race: req.body.race || god.race,
          gender: req.body.gender || god.gender,
          father: req.body.father || god.father,
          mother: req.body.mother || god.mother,
          offspring: req.body.offspring || god.offspring,
          description: req.body.description || god.description,
        },
      }
    );
    res.json(updatedGod);
  } catch (e) {
    res.json({ message: e });
  }
};

// Delete a god
const deleteGod = async (req, res) => {
  try {
    const removedGod = await norseGods.deleteOne({ _id: req.params.id });
    res.json(removedGod);
  } catch (e) {
    res.json({ message: e });
  }
};

module.exports = {
  createGod,
  allGods,
  singleGod,
  updateGod,
  deleteGod,
};
