import UserService from "./service";

const userService = new UserService();

export default {
  findOneBy: (query) => userService.findOneBy(query),
  hardDelete: (query) => userService.hardDelete(query),
  findAll: (query) => userService.findAll(query),
  create: (set) => userService.create(set),
  findOneAndUpdate: (query, set) => userService.findOneAndUpdate(query, set),
  findOrCreateVolunteerUser: (set) =>
    userService.findOrCreateVolunteerUser(set),
};
