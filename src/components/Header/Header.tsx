import React,{Component} from 'react';
import { HeaderProps } from './HeaderState';
import './Header.css'

class Header extends Component<object,HeaderProps> {

  constructor(props: object) {
    super(props);
    this.state = {
      navbarItems: [
        {label: "ลงทะเบียนเข้าร่วมมาตรการ",
        href: "https://regist.ชิมช้อปใช้.com/Register/"},
        {label: "ขั้นตอนการเข้าร่วม",
        href: "https://regist.ชิมช้อปใช้.com/Register/"},
        {label: "ร้านค้าที่เข้าร่วม",
        href: "https://regist.ชิมช้อปใช้.com/Register/"},
      ]
    }
    this.renderNav = this.renderNav.bind(this);
  }
  render() {
    return(
      <div className="container-fluid">
          <ul className="box">
            {this.renderNav(this.state.navbarItems)}
          </ul>
      </div>
    )
  }

  renderNav  ( navbarItems : {
    label: string,
    href: string
  }[])  {
    return (
      navbarItems.map( (navbarItem,index) => {
        return (
          <li
            key = {index}
            className="l"
          >
            {navbarItem.label}
          </li>
        );
      })
    );
  }
}

export default Header ;