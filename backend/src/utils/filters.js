function checkAvailabilities(availabilities, filters) {
  return availabilities.map((availability) => {
    return filters.includes(
      availability.date && new Date(availability.date).getDay().toString()
    );
  });
}

function filterByCategory(tutorials, category) {
  return tutorials.filter((tutorial) => tutorial.category === category);
}

export function filters(tutorials, options) {
  const { category, availability } = options;
  tutorials = category ? filterByCategory(tutorials, category) : tutorials;

  tutorials = availability
    ? tutorials.filter((tutorial) => {
        return checkAvailabilities(
          tutorial.availabilities,
          availability
        ).includes(true);
      })
    : tutorials;
  return tutorials;
}
