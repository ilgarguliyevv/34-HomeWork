const User = require("./../models/usersModel");
const getUserAll = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const postUser = async (req, res) => {
  try {
    const obj = req.body;
    const newUser = new User(obj);
    await newUser.save();
    res.status(200).send("Uğurlu");
  } catch (error) {
    res.status(400).send("Xəta baş verdi: " + error.message);
  }
};

exports.createUsers = async (req, res) => {
  try {
    const users = req.body.users;
    const result = await User.insertMany(users);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const getElement = await User.findById(req.params.id);
    if (!getElement) {
      return res.status(404).send("Element tapılmadı");
    }
    res.status(200).send(getElement);
  } catch (err) {
    res.status(404).send("Element tapılmadı");
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ id: req.params.id });
    if (!user) {
      return res.status(404).send("Element tapılmadı");
    }
    res.status(200).send("Silindi");
  } catch (err) {
    res.status(400).send("Xəta baş verdi: " + err.message);
  }
};

const patchUserById = async (req, res) => {
  try {
    const newUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!newUser) {
      return res.status(404).send("Element tapılmadı");
    }
    res.status(200).send(newUser);
  } catch (err) {
    res.status(400).send("Xəta baş verdi: " + err.message);
  }
};

const putUserById = async (req, res) => {
  try {
    const newUser = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!newUser) {
      return res.status(404).send("Element tapılmadı");
    }
    res.status(200).send(newUser);
  } catch (err) {
    res.status(400).send("Xəta baş verdi: " + err.message);
  }
};

module.exports = {
  getUserAll,
  postUser,
  getUserById,
  deleteUserById,
  patchUserById,
  putUserById,
};
