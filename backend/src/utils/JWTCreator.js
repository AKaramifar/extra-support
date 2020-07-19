import jwt from "jsonwebtoken";

export default async function JwtTokenCreator(data, expiresIn = "1d") {
  const { _id, firstName, lastName, email, admin, roles, tel } = data;
  try {
    const tokenData = {
      _id,
      firstName,
      lastName,
      email,
      admin,
      roles,
      tel,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn });
    return token;
  } catch (err) {
    return err;
  }
}
