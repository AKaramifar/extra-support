import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fakeUsers from "../../db/users.json";

let users = [];
users = fakeUsers;

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(process.env.JWT_SECRET)
  try {
    const User = users.filter((user) => user.email === email);
    console.log(User);
    if (User.length > 0) {
      const options = {
        _id: User[0]._id,
        firstName: User[0].firstName,
        lastName: User[0].lastName,
        email: User[0].email,
        city: User[0].city,
        avatar: User[0].avatar,
        classId: User[0].classId,
        className: User[0].className,
      };
      bcrypt.compare(password, User[0].password, (err, response) => {
        if (err) {
          return res.status(400).send({ msg: "Wrong email or password." });
        }
        if (!response) {
          return res.status(400).send({ msg: "Wrong email or password." });
        } else {
          const token = jwt.sign(options, process.env.JWT_SECRET);
          return res.status(200).send({ token });
        }
      });
    } else {
      return res.status(400).send({ msg: "Wrong email or password." });
    }
  } catch (err) {
    console.log(err)
    return res.status(400).send({ msg: "Wrong email or password." });
  }
};

export const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    city,
    tel,
    gender,
    isAsylumSeekerOrRefugee,
    cyfStudent,
    password,
  } = req.body;

  try {
    const User = users.filter((user) => user.email === email);
    if (User.length > 0) {
      return res.status(400).send({ msg: "Email already in use." });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(400).send({ msg: "something went wrong." });
        } else {
          const options = {
            firstName,
            lastName,
            email,
            city,
            tel,
            gender,
            isAsylumSeekerOrRefugee,
            cyfStudent,
          };
          users.push({ ...options, password: hash });
          const token = jwt.sign(options, process.env.JWT_SECRET);
          return res.status(200).send({ token });
        }
      });
    }
  } catch (err) {
    return res.status(400).send({ msg: "Could not register you." });
  }
};
