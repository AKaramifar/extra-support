import { filters } from "../../utils/filters";
import AvailabilityContext from "../../routes/availabilities/contexts";
import UsersContext from "../../routes/users/contexts";
import SessionContext from "./contexts";

export const getSessions = async (req, res) => {
  try {
    let query = {};
    const { volunteerId } = req.params;
    if (volunteerId) {
      query.volunteerId = volunteerId;
    }
    const sessions = await SessionContext.findAll(query);
    return res.status(200).send(sessions);
  } catch (err) {
    return res.status(400).send("Could not get session");
  }
};

export const getSession = async (req, res) => {
  try {
    let queryForAvailability = {};
    let queryForSession = {};
    const { sessionId } = req.params;
    if (sessionId) {
      queryForSession._id = sessionId;
      queryForAvailability.sessionId = sessionId;
      const session = await SessionContext.findAll(queryForSession);
      const availabilities = await AvailabilityContext.findAll(
        queryForAvailability
      );
      if (session && availabilities) {
        session[0].availabilities = availabilities;
        let volunteer = await UsersContext.findOneBy({ _id: session[0].volunteerId });
        session[0].volunteer = volunteer;
      }
      return res.status(200).send(session);
    }
  } catch (err) {
    console.log("Error", err);
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
