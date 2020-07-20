export function mergeSessionsWithAvailabilities(sessions, availabilities) {
  return sessions.map((session) => {
    const sessionAvailabilities = availabilities.filter((availability) => {
      if (availability.sessionId === String(session._id)) {
        availability.weekDay = getWeekDay(availability.startDate.getDay());
        return true;
      } else {
        return false;
      }
    });
    return { ...session, availabilities: sessionAvailabilities };
  });
}

export function getWeekDay(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
     return "Thursday";
    case 5:
     return "Friday";
    case 6:
     return "Saturday";
  }
}
