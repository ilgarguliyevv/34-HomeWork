const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    surname: String,
    age: Number,
    username: String,
    email: String,
    city: String,
    contact: String,
    imageUrl: String,
    friends: Array,
    messages: Array,
  },
  { versionKey: false }
);
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});

userSchema.set("toObject", {
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  },
});
module.exports = mongoose.model("User", userSchema);
