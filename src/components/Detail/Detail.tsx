import React,{Component} from 'react';
import { DetailState } from  './DetailType';
import './Detail.css'
import 'bootstrap/dist/css/bootstrap.css'

class Detail extends Component<object, DetailState > {
  constructor(props:object) {
    super(props)
  }

  render() {
    return(
      <div className="container">
        <div>
          <h2 className="text-highlight detail-title">มาตรการส่งเสริมการบริโภค<br/>ในประเทศ "ชิมช้อปใช้"</h2>
        </div>
      <div>
        <p>
          ผู้สนใจเข้าร่วมมาตรการส่งเสริมการบริโภคในประเทศ
          <span>“ชิมช้อปใช้”</span> รับเงินผ่าน
          <span>“เป๋าตัง”</span>
          <span >(G-Wallet)</span> รวมจำนวน 13 ล้านคน  ลงทะเบียนรับสิทธิ ได้ทางเว็บไซต์
          <span>www.ชิมช้อปใช้.com</span>
          <br /> ตั้งแต่วันที่ 23 กันยายน  - 15 พฤศจิกายน 2562 (รับลงทะเบียน เฟส 2 ตั้งแต่วันที่ 24 ตุลาคม 2562 จำกัดจำนวนผู้ลงทะเบียน 1 ล้านคนต่อวัน จนกว่าจะครบ 3 ล้านคน)
        </p>
      </div>
      <div>
        <div className="col-12 mt-4">เงื่อนไขการเข้าร่วมมาตรการ</div>
        <div className="detail ul mt-2">
                  1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน<br/>
                  2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน<br/>
                  3. มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล
          </div>
      </div>
      </div>
    );
  }
}

export default Detail ;