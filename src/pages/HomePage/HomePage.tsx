import React,{Component} from 'react';
import { HomePageState } from './HomePageTypes'
class Home extends Component<object, HomePageState> {

  constructor(props: object) {
    super(props);

    this.state = {
      num : 1
    };
  }

  render() {
    return (
      <div>
        FUCK
      </div>
    );
  }
}

export default Home;