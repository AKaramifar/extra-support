import { filters } from "../../utils/filters";
import sessions from "../../db/sessions.json";
import sessionContext from "./contexts"

export const getSessions = async (req, res) => {
  try {
    console.log("Hello from sessions");
    const filteredSessions = filters(sessions, req.query);
    console.log(filteredSessions);
    return res.status(200).send({ sessions: filteredSessions });
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
    const session = await sessionContext.create(sessionData)
    return res.status(200).send(session);
  } catch (err) {
    return res.status(400).send("Sorry We could not create your session!");
  }
};

// export const getSession = async (req, res) => {
//   try {
//     return res.status(200).send("");
//   } catch (err) {
//     return res.status(400).send("");
//   }
// };
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
