import Dao from '../../../libraries/dao'
import UserModel from './schema'

export default class UserDao extends Dao {
  constructor() {
    super(UserModel)
  }

  async create(set) {
    const user = new UserModel(set)
    return user.save()
  }
}
