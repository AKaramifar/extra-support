import SessionDao from "./dao";

export default class SessionService {
  constructor() {
    this.sessionDao = new SessionDao();
  }

  async findOneBy(query) {
    const session = await this.sessionDao.findOneBy(query);
    return session;
  }

  async hardDelete(query) {
    const res = await this.sessionDao.hardDelete(query);
    return res;
  }

  async findAll(query) {
    const sessions = await this.sessionDao.findAll(query);
    return sessions;
  }

  async findOneAndUpdate(query, set) {
    return this.sessionDao.findOneAndUpdate(query, set);
  }

  async create(set) {
    return this.sessionDao.create(set);
  }
}
