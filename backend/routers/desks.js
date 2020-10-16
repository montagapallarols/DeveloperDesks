const { Router } = require("express");
const { desk: Desk, developer: Developer } = require("../models");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const desks = await Desk.findAndCountAll({
      include: [{ model: Developer, attributes: ["id", "name", "email"] }],
    });
    console.log(desks.rows);
    res.json({ total: desks.count, results: desks.rows });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const desk = await Desk.findByPk(id, {
      include: [{ model: Developer, attributes: ["id", "name", "email"] }],
    });
    if (!desk) {
      return res.status(404).send("Desk not found");
    }
    console.log(desk);
    res.json(desk);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

// router.get("/", (req, res, next) => {});

// router.get("/", (req, res, next) => {});
