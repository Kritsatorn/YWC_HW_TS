import { API } from './API';

export class Datasource {
  static getData() {
    return API.get(
      "https://panjs.com/ywc.json",
      ''
    );
  }
}