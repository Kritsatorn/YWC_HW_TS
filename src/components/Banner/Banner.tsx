import React,{Component} from 'react';
import { BannerState } from './BannerType';
import './Banner.css'
class Banner extends Component<BannerState> {

 render() {
    return(
        <div className="row">
          <div className="col-4 img-1"></div>
          <div className="col-4 img-2">
            <div className="img-4"></div>
          </div>
          <div className="col-4 img-3"></div>
        </div>
    );
  }
}

export default Banner;