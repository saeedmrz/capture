import React from "react";
// Import icons
import clock from "../../../../assets/img/clock.svg";
import diaphragm from "../../../../assets/img/diaphragm.svg";
import money from "../../../../assets/img/money.svg";
import teamwork from "../../../../assets/img/teamwork.svg";
import home2 from "../../../../assets/img/home2.jpg";
// Styles
import { Services, Cards, Card } from "./style";
import { About, Description, Image } from "../../../../styles/styles";
import { fade } from "../../../../styles/animation";
import { useScroll } from "../../../../hooks/useScroll";
import { scrollReveal } from "../../../../styles/animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="card">
              <div className="icon">
                <img src={clock} alt="Icon" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Camera" />
      </Image>
    </Services>
  );
};

export default ServicesSection;
