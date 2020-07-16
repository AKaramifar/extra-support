import BookingDao from "./dao";

export default class BookingService {
  constructor() {
    this.bookingDao = new BookingDao();
  }

  async findOneBy(query) {
    const booking = await this.bookingDao.findOneBy(query);
    return booking;
  }

  async hardDelete(query) {
    const res = await this.bookingDao.hardDelete(query);
    return res;
  }

  async findAll(query) {
    const bookings = await this.bookingDao.findAll(query);
    return bookings;
  }

  async findOneAndUpdate(query, set) {
    return this.bookingDao.findOneAndUpdate(query, set);
  }

  async create(set) {
    return this.bookingDao.create(set);
  }
}
