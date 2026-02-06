/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Container,
} from "reactstrap";

// core components
import { translate } from "../Languages/translate";

const items = [
  
  {
    src: require("assets/img/ADMA1.png"),
    altText: "",
    caption: "",
  },
  {
    src: require("assets/img/ADMA2.png"),
    altText: "",
    caption: "",
  },
  {
    src: require("assets/img/ADMA3.png"),
    altText: "",
    caption: "",
  },
  {
    src: require("assets/img/ADMA4.png"),
    altText: "",
    caption: "",
  },
  {
    src: require("assets/img/ADMA5.png"),
    altText: "",
    caption: "",
  },
];

function PresentationHeader() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="clear-filter" style={{position: "relative"}}>
        
  

        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {items.map((item, key) => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={key}
              >
                <img
                  src={item.src}
                  alt={item.altText}
                  className="d-block"
                  style={{
                    filter: "brightness(0.5)",
               
                  }}
                />
                <div className="carousel-caption d-none d-md-block">
                <h5>{item.caption}</h5>
                  
                </div>
                
              </CarouselItem>
              
              
            );
        
          })}
          
          <a
            className="left carousel-control carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <span className="now-ui-icons arrows-1_minimal-left" />
            <span className="sr-only">Previous</span>
          </a>
          
          <a
            className="right carousel-control carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <span className="now-ui-icons arrows-1_minimal-right" />
            <span className="sr-only">Next</span>
            
          </a>
          
        </Carousel>
        <Container>
        <h3 className="h3-description rellax-text" 
        >
          {translate("presentation_header_text")}
          <br/>
          {translate("presentation_header_text2")}
        </h3>
        </Container>
   
      </div>
    </>
  );
}

export default PresentationHeader;
