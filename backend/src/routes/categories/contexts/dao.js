import Dao from "../../../libraries/dao";
import CategoryModel from "./schema";

export default class CategoryDao extends Dao {
  constructor() {
    super(CategoryModel);
  }

  async create(set) {
    const category = new CategoryModel(set);
    return category.save();
  }
}
