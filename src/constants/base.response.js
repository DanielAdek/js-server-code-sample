import { HttpStatusCode } from "./http.status.code";

const BaseResponse = {
  /**
   * @author DanielAdek
   * @param {*} data element
   * @param {*} statusCode http code
   * @param {*} message 
   * @returns {JSON} response json
   */
  success: (data, message = 'Success!', statusCode = HttpStatusCode.OK) => {
    return { status: true, statusCode, message, data };
  },

  /**
   * @author DanielAdek
   * @param {*} data element
   * @param {*} statusCode http code
   * @param {*} message 
   * @returns {JSON} response json
   */
  failure: (message = 'Failed!', data = null, statusCode = HttpStatusCode.BAD_REQUEST) => {
    return { status: false, statusCode, message, data };
  },

  /**
   * @author DanielAdek
   * @param {*} data element
   * @param {*} statusCode http code
   * @param {*} message 
   * @returns {JSON} response json
   */
  error: (error, message = 'Internal Server Error', statusCode = HttpStatusCode.INTERNAL_ERROR) => {
    console.log(error)
    return { status: false, statusCode, message };
  }
};

export default BaseResponse;