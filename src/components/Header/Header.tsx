import React,{Component} from 'react';
import {HeaderState } from './HeaderState';
import './Header.css'

class Header extends Component<object,HeaderState> {

  render() {
    return(
      <div className="head">
        <div className="box">
          <div className="l">ลงทะเบียนเข้าร่วมมาตรการ</div>
          <div className="l">ขั้นตอนการเข้าร่วม</div>
          <div className="l">ร้านค้าที่เข้าร่วม</div>
          {/* <ul>
            <li>ลงทะเบียนเข้าร่วมมาตรการ</li>
            <li>ขั้นตอนการเข้าร่วม</li>
            <li>ร้านค้าที่เข้าร่วม</li>
          </ul> */}
        </div>
      </div>
    )
  }
}

export default Header ;