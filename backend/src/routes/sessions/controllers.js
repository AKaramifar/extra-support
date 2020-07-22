import AvailabilityContext from "../availabilities/contexts";
import UsersContext from "../users/contexts";
import { filtersSessionsByQuery } from "../../utils/filters";
import { mergeSessionsWithAvailabilities } from "./utils/mergeSessions";
import SessionContext from "./contexts";

export const getSessions = async (req, res) => {
  try {
    let query = {};
    const { volunteerId } = req.params;
    if (volunteerId) {
      query.volunteerId = volunteerId;
    }
    const sessions = await SessionContext.findAll(query);
    const sessionWithAvailabilities = await mergeSessionsWithAvailabilities(sessions);
    const filteredSessions = filtersSessionsByQuery(
      sessionWithAvailabilities,
      req.query
    );
    return res.status(200).send(filteredSessions);
  } catch (err) {
    console.log("Error", err);
    return res.status(400).send("Could not get session");
  }
};

export const getSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    if (sessionId) {
      const session = await SessionContext.findOneBy({ _id: sessionId });
      const availabilities = await AvailabilityContext.findAll({ sessionId });
      if (session && availabilities) {
        let volunteer = await UsersContext.findOneBy({
          _id: session.volunteerId,
        });
        const newSession = {
          ...session,
          volunteer,
          availabilities,
        };
        return res.status(200).send(newSession);
      }
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(400).send("Could not get session");
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
