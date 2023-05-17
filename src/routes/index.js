import { Router } from 'express';

import { ColorRouter } from './color.routes';

/**
 * @class routes
 */
class Routes {
  /**
   * @constructor routes
   */
  constructor() {
    this.router = Router();
    this.applicationRoutes();
  }

  /**
   * @return {*} void
   */
  applicationRoutes() {
    this.router.use('/color', ColorRouter);
  }
}

export default new Routes();
