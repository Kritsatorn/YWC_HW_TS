import React,{Component} from 'react';
import { FooterLogoState } from './FooterLogoType';
import './FooterLogo.css'
import 'bootstrap/dist/css/bootstrap.css'
import image from '../../assets/image.json';
class FooterLogo extends Component<object, FooterLogoState> {

 render() {
    return(
      <div >
      <div className="row mt-5">
        <div className="col-lg-4 col-12 text-center ig">
          <img src={image.Call3} alt="Call3"/>
        </div>

        <div className="col-lg-4 col-12 text-center ig">
          <img src={image.Call2} alt="Call2"/>
        </div>

        <div className="col-lg-4 col-12 text-center ig">
          <img src={image.Call1} alt="Call1"/>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image"src={image.logo1} alt="mof"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.logo2} alt="fpo"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.logo3} alt="cgd"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.logo4} alt="krungthai"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.logo5} alt="mots"/>
        </div>

        <div className="col-lg-2 col-sm-4 col-4 text-center">
          <img className="logo-image" src={image.logo6} alt="ttt"/>
        </div>

      </div>
    </div>
    );
  }
}

export default FooterLogo ;