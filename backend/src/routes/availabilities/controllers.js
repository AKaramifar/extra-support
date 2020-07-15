import AvailabilityContext from "./contexts";

export const getAvailabilities = async (req, res) => {
  const availabilities = await AvailabilityContext.findAll();
  try {
        return res.status(200).send(availabilities);
      } catch (error) {
    return res.status(400).send("Could not get Availabilities");
  }
};

export const createAvailability = async (req, res) => {
  const startDate = Date(req.body.startDate);
  const endDate = Date(req.body.endDate);

  console.log(req.body)
  const availabilityData = {...req.body, startDate, endDate};

  try {
    const availability = await AvailabilityContext.create(availabilityData);
    return res.status(200).send(availability);
  } catch (err) {
    console.log(err)
    return res.status(400).send("Could not create your availability");
  }
};

export const updateAvailability = async (req, res) => {
  const availabilityData = req.body;
  const { sessionId } = req.params;
  try {
    const availability = await AvailabilityContext.findOneAndUpdate(sessionId, availabilityData);
    return res.status(200).send(availability);
  } catch (err) {
    return res.status(400).send("Could not update your availability");
  }
};

export const deleteAvailability = async (req, res) => {
  const { sessionId } = req.params;
  try {
    const response = AvailabilityContext.hardDelete({ _id: sessionId });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(400).send("Could not delete the availability");
  }
};
