import React,{Component} from 'react';
// import {data} from '../../mocks/YWCData';
import  Header  from '../../components/Header/Header';
import { Datasource } from '../../Datasource';
import { HomePageState } from './HomePageTypes'

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

  componentDidMount() {
    const fuck = Datasource.getData();
    fuck.then(res => {
      this.setState({
        pageInfo:res
      })
    })
  }
  render() {
    console.log(this.state.pageInfo);
    return (
      <div>
        <Header />
        <hr />
      </div>
    );
  }
}

export default Home;