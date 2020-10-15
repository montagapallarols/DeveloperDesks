const { Router } = require("express");
const { desk: Desk, developer: Developer } = require("../models");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const desks = await Desk.findAll();
    res.json(desks);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

// router.get("/", (req, res, next) => {});

// router.get("/", (req, res, next) => {});
