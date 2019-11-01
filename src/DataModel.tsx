
import {pageInfoAPI} from './DataType';

export class NavbarModel {
  navbarItems : {
    label: string ;
    href : string ;
  }[];

  static apply(datalist:pageInfoAPI) {
    return new NavbarModel(datalist);
  }

  static format(datalist:pageInfoAPI){
    if(datalist){
      if(datalist.navbarItems){
        return datalist.navbarItems.map( data => {
          return {
            label : data.label,
            href : data.href
          };
        });
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  constructor(datalist:pageInfoAPI) {
    this.navbarItems = NavbarModel.format(datalist);
  }
}