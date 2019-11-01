import React,{Component} from 'react';
import { AnnounceProps } from './AnnounceType'
import './Announce.css'
import 'bootstrap/dist/css/bootstrap.css'
class Announce extends Component <AnnounceProps> {

  render(){
    const { duration } = this.props;
    return(
      <div className="container-fluid box-register">
          <div className="col-12">
            <div className="text">ตั้งแต่วันที่</div>
          </div>
          <div className="col-12">
            <div className="time">{duration}</div>
          </div>
          <div className="col-12">
            <div className="card-announce">
                <p className="announce ">
                  ลงทะเบียน เฟส 2<br/>
                  ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br/>
                  (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
                </p>
            </div>
          </div>
      </div>
    );
  }
}

export default Announce ;