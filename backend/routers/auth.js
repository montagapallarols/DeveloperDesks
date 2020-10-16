const { Router } = require("express");
const bcrypt = require("bcrypt");
const Developer = require("../models").developer;
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const router = Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Missing parameters");
    }
    const user = await Developer.findOne({ where: { email } });

    if (!user) {
      return res.status(401).send("Invalid Credentials");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send("Invalid Credentials");
    }

    const token = toJWT({ userId: user.id });

    res.send({ token, email: user.email, name: user.name });
  } catch (e) {
    next(e);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).send("Missing parameters");
    }
    const hash = bcrypt.hashSync(password, 10);
    const user = await Developer.create({
      email,
      name,
      password: hash,
    });

    const token = toJWT({ userId: user.id });

    res.send({ token, email: user.email, name: user.name });
  } catch (e) {
    next(e);
  }
});

router.get("/me", authMiddleware, async (req, res, next) => {
  const { name, email } = req.user;
  res.json({ name, email });
});

module.exports = router;
