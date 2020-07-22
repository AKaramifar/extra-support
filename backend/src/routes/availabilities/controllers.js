import AvailabilityContext from "./contexts";
import SessionsContext from "../sessions/contexts";
import dayjs from "dayjs";

export const getAvailabilities = async (req, res) => {
  try {
    let availabilities;
    const { volunteerId } = req.params;
    if (volunteerId) {
      availabilities = await AvailabilityContext.findAll({ volunteerId });
      availabilities = await Promise.all(
        availabilities.map(async (availability) => {
          console.log(availability);
          if (availability.sessionId === "GENERAL_SESSION") {
            return availability;
          } else {
            const session = await SessionsContext.findOneBy({
              _id: availability.sessionId,
            });
            return { ...availability, session };
          }
        })
      );
    } else {
      availabilities = await AvailabilityContext.findAll();
    }
    return res.status(200).send(availabilities);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not get Availabilities");
  }
};

export const createAvailability = async (req, res) => {
  try {
    const date = dayjs(req.body.date);
    const availability = await AvailabilityContext.create({
      ...req.body,
      date,
    });
    return res.status(200).send(availability);
  } catch (err) {
    return res.status(400).send("Could not create your availability");
  }
};

export const updateAvailability = async (req, res) => {
  try {
    const availabilityData = req.body;
    const { availabilityId } = req.params;
    const availability = await AvailabilityContext.findOneAndUpdate(
      { _id: availabilityId },
      availabilityData
    );
    return res.status(200).send(availability);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Could not update your availability");
  }
};

export const deleteAvailability = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = AvailabilityContext.hardDelete({ _id });
    return res.status(200).send(response);
  } catch (err) {
    return res.status(400).send("Could not delete the availability");
  }
};
