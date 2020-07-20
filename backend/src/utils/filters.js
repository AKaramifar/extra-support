function checkAvailabilities(availabilities, filters) {
  return availabilities.map((availability) => {
    return filters.includes(
      availability.date && new Date(availability.date).getDay().toString()
    );
  });
}

function filterByCategories(sessions, categoryIds) {
  return sessions.filter((session) => {
    return categoryIds.find((categoryId) => session.categoryId === categoryId);
  });
}

function filterByTimes(sessions, times) {
  return sessions.filter((session) => {
    return times.find((time) => {
      const [startTime, endTime] = time.split("-");

      const availableTimes = session.availabilities.filter((availability) => {
        return (
          Date.parse(`01/01/2020 ${startTime}:00`) >=
            Date.parse(`01/01/2020 ${availability.startTime}`) &&
          Date.parse(`01/01/2020 ${endTime}:00`) <=
            Date.parse(`01/01/2020 ${availability.endTime}`)
        );
      });
      return availableTimes.length > 0;
    });
  });
}

function filterByDate(sessions, Dates) {
  return sessions.filter((session) => {
    return Dates.find((date) => {
      const availableDates = session.availabilities.filter((availability) => {
        return availability.startDate.toDateString() === new Date(date).toDateString();
      });
      return availableDates.length > 0;
    });
  });
}
function filterByWeekdays(sessions, weekdays) {
  return sessions.filter((session) => {
    return weekdays.find((weekday) => {
      console.log("sfdsfsdfsdfsdf", session.availabilities);
      const availableWeekDays = session.availabilities.filter(
        (availability) => {
          return availability.weekDay === weekday;
        }
      );
      return availableWeekDays.length > 0;
    });
  });
}
export function filtersSessionsByQuery(sessions, options) {
  const { categoryId, time, weekdays, date } = options;

  let filteredSessions =
    categoryId && categoryId.length
      ? filterByCategories(sessions, categoryId)
      : sessions;

  filteredSessions =
    time && time.length ? filterByTimes(sessions, time) : filteredSessions;

  filteredSessions =
    weekdays && weekdays.length
      ? filterByWeekdays(sessions, weekdays)
      : filteredSessions;

  filteredSessions =
    date && date.length ? filterByDate(sessions, date) : filteredSessions;
    
  return filteredSessions;
}
