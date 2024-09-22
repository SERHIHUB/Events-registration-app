import { Event } from '../../db/models/events.js';

const createPaginationInformation = (page, perPage, count) => {
  const totalPages = Math.ceil(count / perPage);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};

export const fetchEvents = async ({ page = 1, perPage = 12 }) => {
  const skip = perPage * (page - 1);

  const [eventsCount, allEvents] = await Promise.all([
    Event.find().countDocuments(),
    Event.find().skip(skip).limit(perPage),
  ]);

  const paginationInformation = createPaginationInformation(
    page,
    perPage,
    eventsCount,
  );

  return {
    allEvents,
    ...paginationInformation,
  };
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
