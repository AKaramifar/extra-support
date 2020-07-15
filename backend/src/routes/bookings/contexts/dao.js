import Dao from "../../../libraries/dao";
import BookingModel from "./schema";

export default class BookingDao extends Dao {
  constructor() {
    super(BookingModel);
  }

  async create(set) {
    const booking = new BookingModel(set);
    return booking.save();
  }
}
