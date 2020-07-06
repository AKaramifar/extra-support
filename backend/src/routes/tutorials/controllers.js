import { filters } from "../../utils/filters";
import tutorials from "../../db/tutorials.json";

export const getTutorials = async (req, res) => {
  console.log(req.query);
  try {
    console.log("Hello from tutorials");
    const filteredTutorials = filters(tutorials, req.query);
    console.log(filteredTutorials);
    return res.status(200).send({ tutorials: filteredTutorials });
  } catch (error) {
    return res.status(400).send("Could not get tutorials");
  }
};

export const getAvailabilities = async (req, res) => {
  try {
    const { availabilityDate } = req.query;
    if (!availabilityDate) {
      return res.status(404).send("Availabilities date can not be empty");
    }
    const availabilities = tutorials
      .find((tutorial) => tutorial.id === Number(req.query.id))
      .availabilities.find(
        (availability) =>
          new Date(availability.date).toDateString() ===
          new Date(availabilityDate).toDateString()
      );
    // console.log("Hello from tutorials",availabilities);

    console.log("availabilities", availabilities.time);
    return res.status(200).send({ availabilities: availabilities.time });
  } catch (error) {
    return res.status(400).send("Could not get availabilities");
  }
};

// export const createTutorial = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };

// export const getTutorial = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
// export const updateTutorial = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
// export const deleteTutorial = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
