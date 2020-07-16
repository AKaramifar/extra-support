import CategoryContext from "./contexts";

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryContext.findAll();
    return res.status(200).send(categories);
  } catch (error) {
    return res.status(400).send("Could not get categories");
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = await CategoryContext.create(req.body);
    return res.status(200).send(category);
  } catch (err) {
    return res.status(400).send("Could not get category");
  }
};

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
