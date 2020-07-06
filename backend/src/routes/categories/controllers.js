import categories from "../../db/categories.json";

export const getCategories = async (req, res) => {
  try {
    console.log("Hello from tutorials");
    return res.status(200).send(categories);
  } catch (error) {
    return res.status(400).send("Could not get categories");
  }
};

// export const createCategory = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const getCategory = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const updateCategory = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const deleteCategory = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
