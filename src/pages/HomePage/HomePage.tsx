import React,{Component} from 'react';
import {data} from '../../mocks/YWCData';
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
    this.setState({
      pageInfo: data,
      num : 2
    })
  }
  render() {
    console.log(this.state.pageInfo);
    return (
      <div>
        FUCK
      </div>
    );
  }
}

export default Home;