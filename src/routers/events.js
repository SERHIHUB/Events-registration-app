import { Router } from 'express';
import {
  editEventController,
  getEventByIdController,
  getEventsController,
} from '../controllers/events/eventsControllers.js';

const eventsRouters = Router();

eventsRouters.get('/', getEventsController);

eventsRouters.get('/:eventId', getEventByIdController);

eventsRouters.patch('/:eventId', editEventController);

export default eventsRouters;
