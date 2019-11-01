import React,{Component} from 'react';
import { HeaderProps } from './HeaderType';
import {DataFacade} from '../../DataFacade';
import './Header.css'

class Header extends Component<object,HeaderProps> {

  constructor(props: object) {
    super(props);
    this.state = {
      navbarItems: []
    }
    const data = DataFacade.getNavbar();
    if( data !== null){
      data.then(result => {
        this.setState({
          navbarItems: result.navbarItems
        })
      })
    }

    this.renderNav = this.renderNav.bind(this);
  }
  render() {
    const navbarItems = this.props;
    // console.log(navbarItems)
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
           <a href={navbarItem.href}  className="l2">{navbarItem.label}</a>
          </li>
        );
      })
    );
  }
}

export default Header ;