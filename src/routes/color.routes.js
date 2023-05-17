import { Router } from 'express';

import { ColorController } from '../controllers';


/**
 * @class ProductRoutes
 */
class ColorRoutes extends ColorController {
  /**
   * @constructor userRoutes
   */
  constructor() {
    super();
    this.router = Router();

    this.useRoutes();
  }

  /**
   * @returns {*} void
   */
  useRoutes() {
    this.router.post('/', this.addToColorAsync);
    this.router.get('/', this.retrieveColorsAsync);
  }
};

export const ColorRouter = new ColorRoutes().router;
