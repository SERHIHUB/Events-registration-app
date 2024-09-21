import { Router } from 'express';
import eventsRouters from './events.js';

const routers = Router();

routers.use('/events', eventsRouters);

export default routers;
