const router = require("express").Router();

router.get("/restaurants", async (req, res) => {
  try {
    res.status(200).json({
      data: ["test", "data"]
    });
  } catch (err) {
    res.status(400).json({ message: "Error retrieving restaurant data", err });
  }
});

module.exports = router;
