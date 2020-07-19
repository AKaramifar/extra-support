import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserContext from "../users/contexts";
import config from "../../config";
import JwtTokenCreator from "../../utils/JWTCreator";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserContext.findOneBy({ email });
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
        roles: user.roles,
        tel: user.tel
      };
      bcrypt.compare(password, user.password, async (err, response) => {
        if (err) {
          return res.status(400).send("Wrong email or password.");
        }
        if (!response) {
          return res.status(400).send("Wrong email or password.");
        } else {
          const token = await JwtTokenCreator(options);
          return res.status(200).send({ token, user: options });
        }
      });
    } else {
      return res.status(400).send("Wrong email or password.");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send("Wrong email or password.");
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
      return res.status(400).send("Email already in use.");
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          return res.status(400).send("something went wrong.");
        } else {
          let newUser = {
            firstName,
            lastName,
            email,
            city,
            tel,
            gender,
            isAsylumSeekerOrRefugee,
            cyfStudent,
            roles: ["STUDENT"],
          };
          const createdUser = await UserContext.create({
            ...newUser,
            password: hash,
          });
          newUser._id = createdUser._id;
          const token = await JwtTokenCreator(newUser);
          return res.status(200).send({ token, user: createdUser });
        }
      });
    }
  } catch (err) {
    return res.status(400).send("Could not register you.");
  }
};

export const volunteerLogin = async (req, res) => {
  try {
    const { roles, _id } = req.user;
    if (roles && roles.includes("VOLUNTEER")) {
      const token = await JwtTokenCreator(req.user);
      return res.redirect(`${config.extraSupportClientUrl}/volunteer/login/${token}`);
    }
    return res.redirect(
      `${config.extraSupportClientUrl}/volunteer/register/${_id}`
    );
  } catch (err) {
    console.log(err);
    return res.status(400).send("Wrong email or password.");
  }
};

export const volunteerRegister = async (req, res) => {
  try {
    const { volunteerId } = req.params;
    const user = await UserContext.findOneAndUpdate(
      { _id: volunteerId },
      { ...req.body, roles: ["VOLUNTEER"] }
    );
    const token = await JwtTokenCreator(user);
    return res.status(200).send({ token, user });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not register you.");
  }
};
