import { Event } from '../../db/models/events.js';

export const fetchEvents = async () => {
  const allEvents = await Event.find();

  return allEvents;
};

export const getOneEvent = async (id) => {
  const event = await Event.findById({ _id: id });

  return event;
};

export const editEvent = async (id, payload) => {
  const newEvent = await Event.updateOne(
    { _id: id },
    {
      $push: {
        participants: {
          name: payload.name,
          email: payload.email,
          birth: payload.birth,
          userFoundOut: payload.userFoundOut,
        },
      },
    },
  );

  return newEvent;
};
