import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import BlogPostsHeaderGreen8 from "components/Headers/BlogPostsHeaderGreen8.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial.js";
import { translate } from "components/Languages/translate";



function KinnikComplement() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-posts");
      document.body.classList.remove("sidebar-collapse");
    }
  });
  return (
    <>

      <div className="wrapper">

        <div className="about-office"
          style={{
            backgroundColor: "#FFF",
            color: "#0E273DE5"
          }}>
          <Container >
            <Row className="text-center"
            >
              <Col className="ml-auto mr-auto" md="8">


              </Col>
            </Row>

            <Row>
              <Col md="6">

                <br /><br /><br />
                <h2
                  style={{
                    fontFamily: "Domaine Display Condensed Medium",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "51.5px", /* 107.292% */
                    textTransform: "uppercase",
                    
                    flexShrink: "0"
                  }}>{translate("presentation_header_text58")}</h2>

                <h4
                  style={{
                    fontFamily: "Elza Light2",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    textAlign:"justify",
                    lineHeight: "34px" /* 141.667% */
                  }}>{translate("presentation_header_text59")}<br/>{translate("presentation_header_text60")} </h4>

              
              </Col>

              <Col md="6">
                <br />
                <img
                  alt="..."
                  className="rounded img-raised"
                  
                  src={require("assets/img/Rector.jpg")}
                ></img>
              </Col>


              <Col md="2">


              </Col>
              <Col md="2">


              </Col>

              

              <Col md="2">

              </Col>

            </Row>
          </Container>

        </div >
        
        <div className="about-office"
          style={{
            backgroundColor: "#fff",
            color: "#0E273DE5",

          }}>

          <Row className="text-center"
          >
            <Col className="ml-auto mr-auto" md="8">


            </Col>
          </Row>
          
<Container>
  <img src={require("assets/img/Line 4.png")}></img>
          <Row>
            <Col>
             <h2
                  style={{
                    fontFamily: "Domaine Display Condensed Medium",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "51.5px", /* 107.292% */
                    textTransform: "uppercase",
                    
                    flexShrink: "0"
                  }}>{translate("presentation_header_text61")}</h2>
            </Col>
          
              <img
                src={require("assets/img/hoy1.jpg")}></img>

            <Col>
              
             <h4
                  style={{
                    fontFamily: "Elza Light2",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    textAlign:"justify",
                    lineHeight: "34px" /* 141.667% */
                  }}>{translate("presentation_header_text62")}<br/>{translate("presentation_header_text63")} </h4>

            </Col>

          </Row>
          </Container>
          <Container>
            <Col>
              <img
              style={{
                height:"800px"
              }}
                src={require("assets/img/hoy2.jpg")}></img>
                </Col>
            
            <Col>
              <h4
                style={{
                  fontFamily: "Elza Light2",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "18.5px", /* 141.667% */
                  textAlign:"justify"
                }}>
                {translate("presentation_header_text64")}
              </h4>
          
              
              <br /><br /><br />
            </Col>
            </Container>
          <Row>
          </Row>


        </div>
      </div >
      <div className="main"
      >
      </div>

    </>
  );
}

export default KinnikComplement;
