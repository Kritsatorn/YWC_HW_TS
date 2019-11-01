import { Datasource } from './Datasource';
import { NavbarModel } from './DataModel';

export class DataFacade {
  static getNavbar() {
    return Datasource.getData()
    .then(result => {
      return NavbarModel.apply(result.data);
    })
  }
}