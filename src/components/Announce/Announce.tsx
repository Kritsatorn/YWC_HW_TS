import React,{Component} from 'react';
import { AnnounceState } from './AnnounceType'
import './Announce.css'
import 'bootstrap/dist/css/bootstrap.css'
class Announce extends Component <object,AnnounceState> {
  constructor(props:object) {
    super(props)
  }

  render(){
    return(
      <div className="container-fluid box-register">
          <div className="col-12">
            <div className="">ตั้งแต่วันที่</div>
          </div>
          <div className="col-12">
            <div className="time">27 ก.ย. - 31 ธ.ค. 62</div>
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