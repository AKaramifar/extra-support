import BookingsContext from "./contexts";
import UsersContext from "../users/contexts";
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
    const time = bookingData.time.split("-");
    const startDateTime = `${dayjs(bookingData.date).format(
      "YYYYMMDD"
    )}T${time[0].replace(/:/g, "")}00Z`;
    const endDateTime = `${dayjs(bookingData.date).format(
      "YYYYMMDD"
    )}T${time[1].replace(/:/g, "")}00Z`;
    const calendarDate = `${startDateTime}/${endDateTime}`;

    const emailData = {
      volunteerName: bookingData.volunteerName,
      studentName: bookingData.studentName,
      date: `${dayjs(bookingData.date).format("dddd, MMMM D YYYY")} ${
        booking.time
      }`,
      calendarDate: calendarDate.replace(/ /g, ""),
      location: bookingData.location,
      studentEmail: bookingData.email,
      studentName: bookingData.studentName,
      volunteerEmail: bookingData.volunteerEmail,
      description: bookingData.description,
    };
    await bookingConfirmationEmail(emailData);
    return res.status(200).send(booking);
  } catch (err) {
    console.log(err);
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

export const getBookingsByStudentId = async (req, res) => {
  try {
    let bookings;
    let newBookings = [];
    const { studentId } = req.params;
    if (studentId) {
      
      bookings = await Promise.all( 
        bookings.map(booking =>{
        const student = await UsersContext.findOneBy({ _id: booking.studentId })
        return { ...booking, student }
        }))
      
      if (bookings) {
        const students = await UsersContext.findAll();
        bookings.forEach((booking) => {
          students.forEach((student) => {
            if (booking.studentId === student._id.toString()) {
              newBookings.push({ ...booking, ...student });
            }
          });
        });
      }
    }
    return res.status(200).send(newBookings);
  } catch (err) {
    return res.status(400).send("Could not get bookings");
  }
};
