import React, {Component} from 'react';
import Slider from 'react-slick';
import './Home.css';
import bambooSoup from '../../images/bambooSoup.jpg';
import banhCuon from '../../images/banhCuon.jpg';
import beefJerky from '../../images/beefJerky.jpg';
import beefSalad from '../../images/beefSalad.jpg';
import eggRolls from '../../images/eggRolls.jpg';
import mixSoup from '../../images/mixSoup.jpg';
import padNoodles from '../../images/padNoodles.jpg';
import papayaSalad from '../../images/papayaSalad.jpg';
import porkSalad from '../../images/porkSalad.jpg';
import rice from '../../images/rice.jpg';
import riceSalad from '../../images/riceSalad.jpg';
import shrimpSalad from '../../images/shrimpSalad.jpg';
import wings from '../../images/wings.jpg';
import tray from '../../images/tray.jpg';




class Home extends Component {
      constructor(props) {
        super(props);
      }

    render() {
        var settings = {
            className: "center",
            centerMode: true,
            dots: true,
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            speed: 1000,
            autoPlaySpeed: 1000,
            cssEase: "linear",
            adaptiveHeight: true,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 415,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  centerPadding: '10px'
                }
              }
            ]
        };
        return(
          <div className="slider">
                <Slider ref={slider => (this.slider = slider)}{...settings}>
                  <div>
                    <h3><img className="bambooSoup" src={bambooSoup} alt="pic1" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="banhCuon" src={banhCuon} alt="pic2" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="beefJerky" src={beefJerky} alt="pic3" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="beefSalad" src={beefSalad} alt="pic4" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="eggRolls" src={eggRolls} alt="pic5" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="padNoodles" src={padNoodles} alt="pic6" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="papayaSalad" src={papayaSalad} alt="pic7" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="porkSalad" src={porkSalad} alt="pic8" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="rice" src={rice} alt="pic9" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="riceSalad" src={riceSalad} alt="pic10" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="shrimpSalad" src={shrimpSalad} alt="pic11" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                  <div>
                    <h3><img className="wings" src={wings} alt="pic12" style={{width: 400, height: 400, padding: 5}}/></h3>
                  </div>
                </Slider>

                <div className="home-page">
                <h3>​Welcome to our page!</h3>
                <h5>When you book with Lao Food Catering you’ll enjoy the finest cuisine the most personalized atmosphere, and an easy to work with staff.</h5>
                <h5>Impeccable Quality and an option to choose from our popular menus, When you choose Lao Food Catering you’re choosing a stress-free experience.</h5>
                <h5>Take a breath and relax, we’re here to help you plan out all of the details that will make your event go off without a hitch!​​</h5>
                <img className="tray" src={tray} alt="pic"/>

                </div>

                
                <div className="copyright">
                <p> © 2018 Lao Food Catering.</p>
                </div>

              </div>
        )
    }
}
export default Home;

