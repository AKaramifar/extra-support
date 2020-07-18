import jwt from "jsonwebtoken";

export default async function JwtTokenCreator(data, expiresIn = "1d") {
  const { _id, firstName, lastName, email, admin, roles } = data;
  try {
    const tokenData = {
      _id,
      fullName: `${firstName} ${lastName}`,
      email,
      admin,
      roles,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn });
    return token;
  } catch (err) {
    return err;
  }
}
