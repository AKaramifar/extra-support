import Dao from "../../../libraries/dao";
import SessionModel from "./schema";

export default class SessionDao extends Dao {
  constructor() {
    super(SessionModel);
  }

  async create(set) {
    const session = new SessionModel(set);
    return session.save();
  }
}
