import fakeUsers from "../../db/users.json";
let users = [];
users = fakeUsers;

export const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = users.filter((user) => user._id === userId);
    return res.status(200).send(user[0]);
  } catch (error) {
    return res.status(400).send("Could not get categories");
  }
};

// export const getUsers = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
// export const updateUser = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
// export const deleteUser = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
