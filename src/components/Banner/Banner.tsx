import React,{Component} from 'react';
import { BannerState } from './BannerType';
import './Banner.css'
class Banner extends Component<object,BannerState> {
  constructor(props: object) {
    super(props);
  }

  render() {
    return(
      <div className="container box-img">
        <div className="row row-img">
          <div className="col-4 img-1"></div>
          <div className="col-4 img-2">
            <div className="logo img-4"></div>
          </div>
          <div className="col-4 img-3"></div>
        </div>
      </div>
    );
  }
}

export default Banner;