import CategoryDao from "./dao";

export default class CategoryService {
  constructor() {
    this.categoryDao = new CategoryDao();
  }

  async findOneBy(query) {
    const category = await this.categoryDao.findOneBy(query);
    return category;
  }

  async hardDelete(query) {
    const res = await this.categoryDao.hardDelete(query);
    return res;
  }

  async findAll() {
    const categories = await this.categoryDao.findAll();
    return categories;
  }

  async findOneAndUpdate(query, set) {
    return this.categoryDao.findOneAndUpdate(query, set);
  }

  async create(set) {
    return this.categoryDao.create(set);
  }
}
