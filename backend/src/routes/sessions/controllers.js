import { filters } from "../../utils/filters";
import sessions from "../../db/sessions2020.json";
import SessionContext from "./contexts";

export const getSessions = async (req, res) => {
  try {
    const { volunteerId } = req.params;
    const sessions = await SessionContext.findAll({ volunteerId });
    return res.status(200).send(sessions);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not get session");
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
    return res.status(200).send({ availabilities: availabilities.time });
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not get availabilities");
  }
};

export const createSession = async (req, res) => {
  const sessionData = req.body;
  try {
    const session = await SessionContext.create(sessionData);
    return res.status(200).send(session);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not create session");
  }
};

export const updateSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const sessionData = req.body;
    const query = { _id: sessionId };
    const session = await SessionContext.findOneAndUpdate(query, sessionData);
    if (!session) {
      throw "Session not found!";
    }
    return res.status(200).send(session);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not update session");
  }
};

export const deleteSession = async (req, res) => {
  const { sessionId } = req.params;
  try {
    const response = SessionContext.hardDelete({ _id: sessionId });
    return res.status(200).send(response);
  } catch (err) {
    console.error(err);
    return res.status(400).send("Could not delete session");
  }
};
