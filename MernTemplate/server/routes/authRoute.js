const router = require("express").Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");
const auth = require("../middleware/auth");

router.route("/register").post(
  check("email", "Please enter a valid email").isEmail(),
  check("name", "name is required").notEmpty(),
  check("password", "password must be at least 6 characters").isLength({
    min: 6,
  }),
  authController.REGISTER
);
router.route("/login").post(
  check("email", "Please enter a valid email").isEmail(),
  check("password", "password must be at least 6 characters").isLength({
    min: 6,
  }),
  authController.LOGIN
);
router.route("/").get(auth, authController.AUTHENTICATE);

module.exports = router;
