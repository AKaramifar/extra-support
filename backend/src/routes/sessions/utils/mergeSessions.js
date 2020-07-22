import AvailabilityContext from "../../availabilities/contexts";
import CategoryContext from "../../categories/contexts";
export const mergeSessionsWithAvailabilities = async (sessions) => {
 const mergedSessions = await Promise.all(
    sessions.map(async (session) => {
      let category = {};
      const availabilities = await AvailabilityContext.findAll({
        sessionId: session._id,
      });
      if (session.categoryId) {
        category = await CategoryContext.findOneBy({
          _id: session.categoryId,
        });
      }
      return { ...session, availabilities, category };
    })
  );
  return mergedSessions;
};
