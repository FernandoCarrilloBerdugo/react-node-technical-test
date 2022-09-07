const { Router } = require("express");
const comment = require("./comment")

const router = Router();

//Shows a message on "/" to verify that the server is running
router.get('/',(req,res) => {
  res.send('<h1>Server is running</h1>')
})

//Routes
router.use("/comment", comment)

module.exports = router;
