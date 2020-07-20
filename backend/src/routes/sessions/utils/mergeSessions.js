import dayjs from 'dayjs'
export function mergeSessionsWithAvailabilities(sessions, availabilities) {
  return sessions.map((session) => {
    const sessionAvailabilities = availabilities.filter((availability) => {
      if (availability.sessionId === String(session._id)) {
        availability.weekDay = dayjs(availability.date).format('dddd')
        return true;
      } else {
        return false;
      }
    });
    return { ...session, availabilities: sessionAvailabilities };
  });
}
