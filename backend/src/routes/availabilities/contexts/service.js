import AvailabilityDao from "./dao";

export default class AvailabilityService {
  constructor() {
    this.availabilityDao = new AvailabilityDao();
  }

  async findOneBy(query) {
    const availability = await this.availabilityDao.findOneBy(query);
    return availability;
  }

  async hardDelete(query) {
    const res = await this.availabilityDao.hardDelete(query);
    return res;
  }

  async findAll() {
    const availabilities = await this.availabilityDao.findAll();
    return availabilities;
  }

  async findOneAndUpdate(query, set) {
    return this.availabilityDao.findOneAndUpdate(query, set);
  }

  async create(set) {
    return this.availabilityDao.create(set);
  }
}
