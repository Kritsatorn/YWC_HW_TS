import React,{Component} from 'react';
import Banner from '../../components/Banner/Banner';
import Detail from '../../components/Detail/Detail';
import Header  from '../../components/Header/Header';
import Announce from '../../components/Announce/Announce';
import Footer from '../../components/Footer/Footer';
import FooterLogo from '../../components/FooterLogo/FooterLogo';
import { HomePageState } from './HomePageTypes';
import { Datasource } from '../../Datasource';
import {DataFacade} from '../../DataFacade';
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.css'

class Home extends Component<object, HomePageState> {
  constructor(props: object) {
    super(props);

    this.state = {
      num : 1,
      pageInfo : {
        navbarItems: [],
        duration: '',
        detail: '',
        condition: ''
      },
      Navbar: []
    };

    const data = DataFacade.getNavbar();
    if( data !== null){
      data.then(result => {
        this.setState({
          Navbar: result.navbarItems
        })
      })
    }

  }


  render() {
    // console.log(this.state.pageInfo);
    console.log(this.state.Navbar);
    return (
      <div className="font">
          <Header
            // navbarItems = {this.state.Navbar}
          />
          <Banner />
          <Announce
            duration = {this.state.pageInfo.duration}
          />
          <Detail
            detail = {this.state.pageInfo.detail}
            condition = {this.state.pageInfo.condition}
          / >

          <FooterLogo />
          <Footer />
      </div>
    );
  }

  componentDidMount() {
    const fuck = Datasource.getData();
    fuck.then(res => {
      this.setState({
        pageInfo:res
      })
    })
  }

}

export default Home;