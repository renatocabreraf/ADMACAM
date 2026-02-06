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
import BlogPostsHeaderGreen5 from "components/Headers/BlogPostsHeaderGreen5.js";
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
                  }}>{translate("presentation_header_text101")}</h2>

                <h4
                  style={{
                    fontFamily: "Elza Light2",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    textAlign:"justify",
                    lineHeight: "34px" /* 141.667% */
                  }}>{translate("presentation_header_text122")}</h4>

                <br /><br /><br />
              </Col>

              <Col md="6">
                <br />
                <img
                  alt="..."
                  className="rounded img-raised"
        
                  src={require("assets/img/HEADERCN.png")}
                ></img>
              </Col>


              <Col md="2">


              </Col>
              <Col md="2">


              </Col>

              <Col md="6">
                <h5
                  style={{
                    fontFamily: "Elza Light2",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    textAlign:"justify",
                    lineHeight: "18.5px" /* 141.667% */
                  }}
                ><br />{translate("presentation_header_text123")}
                  <br />

                </h5>



              </Col>

              <Col md="2">

              </Col>

            </Row>
          </Container>

        </div >
        <BlogPostsHeaderGreen5 />
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
          <Row>
            <Col med="2"></Col>
            <Col md="4">


              <img
                style={{

                }}
              
                src={require("assets/img/C3NTRO2.png")}></img>

              <br /><br /><br />
            </Col>
            <Col md="7">
          
              <img
          
                src={require("assets/img/C3NTRO3.png")}
                style={{
                  zIndex: "1"
                }}
              ></img>

            </Col>

          </Row>
          </Container>
          <Row>
            <Col md="4">

            </Col>
            <Col md="4">
              <h4
                style={{
                  fontFamily: "Elza Light2",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                 
                  textAlign:"justify"
                }}>
               {translate("presentation_header_text124")}
              </h4>
              <br /><br />
              <a href="https://www.c3ntro.fit/" style={{
                color: "#0074FF",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "Elza",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "3px",
                textCorationLine: "underline",
                texttransform: "uppercase"
              }}>{translate("presentation_header_text33")}<svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none"
                style={{
                  strokeWidth: "2px",
                  stroke: "#0074FF"
                }}>
                  <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round" />
                </svg></a>
              <br /><br /><br />
            </Col>
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
