import {
  editEvent,
  fetchEvents,
  getOneEvent,
} from '../../services/events/events.js';
import { parsePaginationParams } from '../../utils/parsePagination.js';

export const getEventsController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const events = await fetchEvents({ page, perPage });

  res.status(200).json({
    status: 200,
    message: 'Get all events successfully.',
    data: events,
  });
};

export const getEventByIdController = async (req, res, next) => {
  const id = req.params.eventId;

  const event = await getOneEvent(id);

  res.status(200).json({
    status: 200,
    message: 'Get event successfully.',
    data: event,
  });
};

export const editEventController = async (req, res, next) => {
  const id = req.params.eventId;
  const payload = req.body;

  const updateEvent = await editEvent(id, payload);

  res.status(200).json({
    status: 200,
    message: 'Event was update successfully.',
    data: updateEvent,
  });
};
