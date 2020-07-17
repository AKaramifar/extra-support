import { filters } from "../../utils/filters";
import SessionContext from "./contexts";

export const getSessions = async (req, res) => {
  try {
    const sessions = await SessionContext.findAll();
    const filteredSessions = filters(sessions, req.query);
    return res.status(200).send(sessions);
  } catch (error) {
    return res.status(400).send("Could not get sessions");
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

export const createSession = async (req, res) => {
  const sessionData = req.body;
  try {
    const session = await SessionContext.create(sessionData);
    return res.status(200).send(session);
  } catch (err) {
    return res.status(400).send("Sorry We could not create your session!");
  }
};

export const getSessionByVolunteerId = async (req, res) => {
  try {
    const { volunteerId } = req.params;
    const sessions = await SessionContext.findAll({ volunteerId: volunteerId });
    return res.status(200).send({ sessions: sessions });
  } catch (err) {
    return res.status(400).send("Could not get sessions");
  }
};

// export const updateSession = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
// export const deleteSession = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
