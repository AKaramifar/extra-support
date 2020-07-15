import CategoryService from "./service";

const categoryService = new CategoryService();

export default {
  findOneBy: (query) => categoryService.findOneBy(query),
  hardDelete: (query) => categoryService.hardDelete(query),
  findAll: (query) => categoryService.findAll(query),
  create: (set) => categoryService.create(set),
  findOneAndUpdate: (query, set) => categoryService.findOneAndUpdate(query, set),
};
