import BookingsContext from "./contexts";
import { bookingConfirmationEmail } from "../../utils/notification";
import dayjs from "dayjs";
export const getBookings = async (req, res) => {
  try {
    let bookings;
    const { availabilityId } = req.params;
    if (availabilityId) {
      bookings = await BookingsContext.findAll({ availabilityId });
    } else {
      bookings = await BookingsContext.findAll();
    }
    return res.status(200).send(bookings);
  } catch (err) {
    return res.status(400).send("Could not get bookings");
  }
};

export const createBooking = async (req, res) => {
  try {
    const bookingData = req.body;
    const booking = await BookingsContext.create(bookingData);
    const emailData = {
      volunteerName: bookingData.volunteerName,
      studentName: bookingData.studentName,
      date: `${dayjs(bookingData.date).format("dddd, MMMM D YYYY")} ${
        booking.time
      }`,
      location: bookingData.location,
      studentEmail: bookingData.email,
      studentName: bookingData.studentName,
      volunteerEmail: bookingData.volunteerEmail,
    };
    await bookingConfirmationEmail(emailData);
    return res.status(200).send(booking);
  } catch (err) {
    console.log(err)
    return res.status(400).send("Could not create your booking");
  }
};

export const updateBooking = async (req, res) => {
  try {
    const bookingData = req.body;
    const _id = req.body._id;
    const booking = await BookingsContext.findOneAndUpdate(
      { _id },
      bookingData
    );
    return res.status(200).send(booking);
  } catch (err) {
    return res.status(400).send("Could not update your booking");
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = BookingsContext.hardDelete({ _id });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(400).send("Could not delete the booking");
  }
};
