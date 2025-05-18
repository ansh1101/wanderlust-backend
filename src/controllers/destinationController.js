
const Destination = require("../models/Destination");


const getDestination = async (req, res) => {
  try {
    const destination = await Destination.find();
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getDestination };
