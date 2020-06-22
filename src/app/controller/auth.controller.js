const bcrypt = require("bcryptjs");
const uuid = require("uuid");

const db = require("../config/db.config.js");
const Login = db.logins;

exports.login = (req, res) => {
  console.log("Sign-In");

  const vsession = req.session;

  Login.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((result) => {
      if (!result) {
        return res.status(404).send({ message: "User Not Found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        result.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          accessToken: null,
          reason: "Invalid Password!",
        });
      }

      // Generate token and sendo to user
      const token = uuid.v4();
      vsession.token;

      res.status(200).send({ auth: true, accessToken: token });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

exports.logout = (req, res) => {
  console.log("Logout");

  sessionData = req.session;

  console.log(`Session ${sessionData}`);

  sessionData.destroy(function (err) {
    if (err) {
      msg = "Error destroying session";
      res.json(msg);
    } else {
      msg = "Session destroy successfully";
      console.log(msg);
      res.json(msg);
    }
  });
};
