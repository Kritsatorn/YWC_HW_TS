import React,{Component} from 'react';
import { FooterLogoState } from './FooterLogoType';
import './FooterLogo.css'
import 'bootstrap/dist/css/bootstrap.css'
import image from '../../assets/image.json';
class FooterLogo extends Component<object, FooterLogoState> {
  constructor(props: object){
    super(props)
  }

  render() {
    return(
      <div >
      <div className="row my-5 mx-auto">
        <div className="col-lg-4 col-12 text-center">
          <img src={image.ktbCall} alt="ktbCall"/>
        </div>

        <div className="col-lg-4 col-12 text-center">
          <img src={image.cgdCall} alt="cgdCall"/>
        </div>

        <div className="col-lg-4 col-12 text-center">
          <img src={image.tatCall} alt="tatCall"/>
        </div>
      </div>

      <div className="row my-5 mx-auto">
        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image"src={image.mof} alt="mof"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.fpo} alt="fpo"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.cgd} alt="cgd"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.krungthai} alt="krungthai"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.mots} alt="mots"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.ttt} alt="ttt"/>
        </div>

      </div>
    </div>
    );
  }
}

export default FooterLogo ;