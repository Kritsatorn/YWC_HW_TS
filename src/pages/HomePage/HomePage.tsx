import React,{Component} from 'react';
// import {data} from '../../mocks/YWCData';
import  Header  from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Announce from '../../components/Announce/Announce';
import Detail from '../../components/Detail/Detail';
import FooterLogo from '../../components/FooterLogo/FooterLogo';
import { Datasource } from '../../Datasource';
import { HomePageState } from './HomePageTypes'
import 'bootstrap/dist/css/bootstrap.css'
import './HomePage.css'
import Footer from '../../components/Footer/Footer';
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
      }
    };

  }


  render() {
    console.log(this.state.pageInfo);
    return (
      <div>
          <Header />
          <Banner />
          <Announce />
          <Detail / >
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