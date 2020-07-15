import SessionService from "./service";

const sessionService = new SessionService();

export default {
  findOneBy: (query) => sessionService.findOneBy(query),
  hardDelete: (query) => sessionService.hardDelete(query),
  findAll: (query) => sessionService.findAll(query),
  create: (set) => sessionService.create(set),
  findOneAndUpdate: (query, set) => sessionService.findOneAndUpdate(query, set),
};
