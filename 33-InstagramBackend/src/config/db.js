const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ilgarguliyev2004:ilqar123@cluster1.6vxdscp.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => {
    console.log("connect db");
  });
