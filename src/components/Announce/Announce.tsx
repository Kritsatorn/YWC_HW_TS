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
            <div className="">ตั้งแต่วันที่</div>
          </div>
          <div className="col-12">
            <div className="time">{duration}</div>
          </div>
          <div className="col-12">
            <button className="btn btn-announce">
              ขณะนี้มีผู้ลงทะเบียนสิทธิมาตรการฯ "ชิมช้อปใช้" ครบตามจำนวนที่กำหนดแล้ว <br/>
			        ขอขอบพระคุณอย่างยิ่งที่ท่านสนใจในการเข้าร่วมมาตรการฯ
            </button>
          </div>
      </div>
    );
  }
}

export default Announce ;