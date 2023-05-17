import { db } from '../dummydb';

class ColorRepository {

  static insertIntoColor = (payload) => db.colors.push(payload);

  static fetchFromColor = () => db.colors;

  static fetchByDataColor = (field, data) => db.colors.filter(color => color[field] === data);
}

export default ColorRepository;
