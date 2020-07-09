import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserContext from "../users/contexts";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserContext.findOneBy({ email });
    console.log(user);
    if (user) {
      const options = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        city: user.city,
        avatar: user.avatar,
        classId: user.classId,
        className: user.className,
      };
      bcrypt.compare(password, user.password, (err, response) => {
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
    console.log(err);
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
    const user = await UserContext.findOneBy({ email });
    if (user) {
      return res.status(400).send({ msg: "Email already in use." });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          return res.status(400).send({ msg: "something went wrong." });
        } else {
          const newUser = {
            firstName,
            lastName,
            email,
            city,
            tel,
            gender,
            isAsylumSeekerOrRefugee,
            cyfStudent,
          };
           await UserContext.create({ ...newUser, password: hash });
          const token = jwt.sign(newUser, process.env.JWT_SECRET);
          return res.status(200).send({ token });
        }
      });
    }
  } catch (err) {
    return res.status(400).send({ msg: "Could not register you." });
  }
};
