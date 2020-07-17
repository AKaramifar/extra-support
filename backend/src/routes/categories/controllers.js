import categories from "../../db/categories.json";
import CategoryContext from "./contexts";

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryContext.findAll();
    console.log("categories", categories);
    return res.status(200).send(categories);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not get categories");
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = await CategoryContext.create(req.body);
    return res.status(200).send(category);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not create category");
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await CategoryContext.findOneBy(categoryId);
    return res.status(200).send(category);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not get category");
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const categoryData = req.body;
    const query = { _id: categoryId };
    const category = await CategoryContext.findOneAndUpdate(
      query,
      categoryData
    );
    if (!category) {
      throw "Category not found!";
    }
    return res.status(200).send(category);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not update category");
  }
};

export const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const response = CategoryContext.hardDelete({ _id: categoryId });
    return res.status(200).send(response);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not delete session");
  }
};
