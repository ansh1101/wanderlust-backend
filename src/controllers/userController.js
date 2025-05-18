const User = require("../models/User");
const Destination = require("../models/Destination");
const userValidationSchema = require("../validators/userValidator");

const createUser = async (req, res) => {
  try {
    const { error, value } = userValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = new User(value);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    clg;
    res.status(500).json({ error: "Server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId)
    if(!user) return res.status(404).json({error: "user not found"})
    return res.status(201).json({message: "User deleted succesfully"})
  } catch (error) {
        res.status(500).json({ error: "User engine failed" });

    
  }
}

const recommendDestinations = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const matches = await Destination.find({
      climate: user.preferredClimate,
      tags: { $in: user.interests },
      averageCost: { $lte: user.budget },
    }).limit(5);

    res.json({ recommendations: matches });
  } catch (err) {
    res.status(500).json({ error: "Recommendation engine failed" });
  }
};

module.exports = { createUser, recommendDestinations, getUser  , deleteUser};
