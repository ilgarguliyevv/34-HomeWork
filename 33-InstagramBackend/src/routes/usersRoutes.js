const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/usersController");

router.get("/users", UserController.getUserAll);
router.post("/users", UserController.postUser);
router.get("/users/:id", UserController.getUserById);
router.delete("/users/:id", UserController.deleteUserById);
router.patch("/users/:id", UserController.patchUserById);
router.put("/users/:id", UserController.putUserById);

const postUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Kullanıcıyı veritabanından kullanıcı adına göre bul
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: "Kullanıcı adı veya şifre hatalı" });
//     }

//     // Kullanıcının şifresini kontrol et
//     const isPasswordCorrect = user.password === password;

//     if (!isPasswordCorrect) {
//       return res
//         .status(401)
//         .json({ message: "Kullanıcı adı veya şifre hatalı" });
//     }

//     // Giriş başarılı, kullanıcıyı döndür
//     res.status(200).json(user);
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ error: "Bir hata oluştu" });
//   }
// });

module.exports = router;
