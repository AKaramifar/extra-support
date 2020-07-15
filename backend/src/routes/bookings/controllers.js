
export const getBookings = async (req, res) => {
  try {
    console.log("Hello from Bookings");
    return res.status(200).send("");
  } catch (error) {
    return res.status(400).send("Could not get Bookings");
  }
};

// export const createBooking = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const getBooking = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const updateBooking = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const deleteBooking = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
