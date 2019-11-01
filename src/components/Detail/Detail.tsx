import React,{Component} from 'react';
import { DetailState } from  './DetailType';
import './Detail.css'
import 'bootstrap/dist/css/bootstrap.css'

class Detail extends Component< DetailState > {

  render() {
    const { detail , condition} = this.props;
    return(
      <div className="container">
        <div>
          <h2 className="text-danger">มาตรการส่งเสริมการบริโภค<br/>ในประเทศ "ชิมช้อปใช้"</h2>
        </div>
      <div>
        <span className="" dangerouslySetInnerHTML={{__html: detail}}></span>
      </div>
      <div>
        <div className="col-12 mt-4 font-weight-bold">เงื่อนไขการเข้าร่วมมาตรการ</div>
        <div className="mt-2">
          <span className="" dangerouslySetInnerHTML={{__html: condition}}></span>
          </div>
      </div>
      </div>
    );
  }
}

export default Detail ;