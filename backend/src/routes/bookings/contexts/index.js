import BookingService from "./service";

const bookingService = new BookingService();

export default {
  findOneBy: (query) => bookingService.findOneBy(query),
  hardDelete: (query) => bookingService.hardDelete(query),
  findAll: (query) => bookingService.findAll(query),
  create: (set) => bookingService.create(set),
  findOneAndUpdate: (query, set) => bookingService.findOneAndUpdate(query, set),
};
