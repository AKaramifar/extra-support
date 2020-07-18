import UserDao from "./dao";

export default class UserService {
  constructor() {
    this.userDao = new UserDao();
  }

  async findOneBy(query) {
    const user = await this.userDao.findOneBy(query);
    return user;
  }

  async hardDelete(query) {
    const res = await this.userDao.hardDelete(query);
    return res;
  }

  async findAll() {
    const users = await this.userDao.findAll();
    return users;
  }

  async findOneAndUpdate(query, set) {
    return this.userDao.findOneAndUpdate(query, set);
  }

  async create(set) {
    return this.userDao.create(set);
  }

  async findOrCreateVolunteerUser(userDetails) {
    const { email = "", githubId = "" } = userDetails;
    let user;
    if (githubId) {
      user = await this.userDao.findOneBy({ githubId });
    } else {
      user = await this.userDao.findOneBy({ email });
    }
    if (!user) {
      user = await this.userDao.create({
        ...userDetails,
      });
    } else {
      user = await this.userDao.findOneAndUpdate(
        { _id: user._id },
        {
          ...userDetails,
        }
      );
    }
    return user;
  }
}
