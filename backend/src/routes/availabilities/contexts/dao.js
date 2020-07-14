import Dao from "../../../libraries/dao";
import AvailabilityModel from "./schema";

export default class AvailabilityDao extends Dao {
  constructor() {
    super(AvailabilityModel);
  }

  async create(set) {
    const availability = new AvailabilityModel(set);
    return availability.save();
  }
}
