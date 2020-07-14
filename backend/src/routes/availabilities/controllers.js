
export const getAvailabilities = async (req, res) => {
  try {
        console.log("Hello from Availabilities");
        return res.status(200).send("");
      } catch (error) {
    return res.status(400).send("Could not get Availabilities");
  }
};

// export const createAvailabilities = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const getAvailabilities = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const updateAvailabilities = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const deleteAvailabilities = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
