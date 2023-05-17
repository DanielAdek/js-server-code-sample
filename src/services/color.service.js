import ColorRepository from '../repository';
import MakeResponse from '../constants/base.response';

/** @class Color */
export class ColorService {
 /**
  * @method addToWishList
  * @param {object} params
  * @return {*} json
  */
  static async addNewColor(params) {
    try {
      const { color_name, color_hex, color_rgb } = params;

      // check user inputs
      if (!color_name.trim() || typeof color_name != 'string') {
        return MakeResponse.failure("Invalid color name")
      }

      if (!color_hex.trim() || typeof color_hex != 'string') {
        return MakeResponse.failure("Invalid color hex")
      }

      if (!color_rgb.trim() || typeof color_rgb != 'string') {
        return MakeResponse.failure("Invalid color rgb")
      }

      const found_color = ColorRepository.fetchByFieldColor("color_name", color_name);

      // check if already exist
      if (found_color.length) return MakeResponse.failure("Color already taken", null, 404);

      const color = { color_name, color_hex, color_rgb };

      ColorRepository.insertIntoColor(color);

      return MakeResponse.success(color);
    } catch (error) {
      return MakeResponse.error(error, error.message);
    }
  }

  /**
   * @method retrieveColors
   * @param {object} params
   * @return {*} json
   */
  static async retrieveColors() {
    try {
      const colors = ColorRepository.fetchFromColor();
      return MakeResponse.success(colors)
    } catch (error) {
      return MakeResponse.error(error, error.message);
    }
  }
}
