const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  createUser,
  findUserByEmail,
} = require("../models/userModel");

exports.register = (req, res) => {
  const { name, email, password, role } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    createUser(
      name,
      email,
      hashedPassword,
      role,
      function (err) {
        if (err) {
          return res.status(500).json(err.message);
        }

        res.json({
          message: "User Registered Successfully",
        });
      }
    );
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, user) => {
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (!result) {
        return res.status(401).json({
          message: "Invalid Password",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res.json({
        token,
        role: user.role,
      });
    });
  });
};