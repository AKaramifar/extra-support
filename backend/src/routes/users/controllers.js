import UserContext from "./contexts";

export const getUser = async (req, res) => {
  const { userId } = req.params;
  console.log(userId)
  try {
    const user = await UserContext.findOneBy({ _id: userId });
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get user");
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await UserContext.findAll();
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get users");
  }
};

export const updateUser = async (req, res) => {
  const userData = req.body;
  const { userId } = req.params;
  try {
    const user = await UserContext.findOneAndUpdate({ _id: userId }, userData);
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not update your profile");
  }
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const response = UserContext.hardDelete({ _id: userId });
    return res.status(200).send(response);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not delete the profile");
  }
};
