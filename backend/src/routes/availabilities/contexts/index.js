import AvailabilityService from "./service";

const availabilityService = new AvailabilityService();

export default {
  findOneBy: (query) => availabilityService.findOneBy(query),
  hardDelete: (query) => availabilityService.hardDelete(query),
  findAll: (query) => availabilityService.findAll(query),
  create: (set) => availabilityService.create(set),
  findOneAndUpdate: (query, set) => availabilityService.findOneAndUpdate(query, set),
};
