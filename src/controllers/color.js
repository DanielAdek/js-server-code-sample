import { ColorService } from '../services/color.service';

/** 
 * @class ColorController
 */
export class ColorController {
  /**
   * @method create
   * @param {object} req The request object
   * @param {object} res The response object
   * @return {*} json
   */
  async addToColorAsync(req, res) {
    const result = await ColorService.addNewColor(req.body);
    return res.status(result.statusCode).json(result);
  }

  /**
   * @method generateCode
   * @param {object} _ The request object
   * @param {object} res The response object
   * @return {*} json
   */
  async retrieveColorsAsync(req, res) {
    const result = await ColorService.retrieveColors();
    return res.status(result.statusCode).json(result);
  }
}
