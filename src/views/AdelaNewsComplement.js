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
import BlogPostsHeaderGreen10 from "components/Headers/BlogPostsHeaderGreen10.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial.js";
import { translate } from "components/Languages/translate";


function AdelaNewsComplement() {
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
                  }}>{translate("presentation_header_text129")}</h2>

                <h4
                  style={{
                    fontFamily: "Elza Light2",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    textAlign:"justify",
                    lineHeight: "34px" /* 141.667% */
                  }}>{translate("presentation_header_text130")} </h4>

                <br /><br /><br />
              </Col>

              <Col md="6">
                <br />
                <img
                  alt="..."
                  className="rounded img-raised"
            
                  src={require("assets/img/Captura de pantalla 2023-10-23 a la(s) 15.48.54.png")}
                ></img>
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
          <Row>
            <Col med="2"></Col>
            <Col md="4">


              <img
                style={{

                }}
    
                src={require("assets/img/WhatsApp Image 2023-10-23 at 2.54.16 PM.jpeg")}></img>

              <br /><br /><br />
            </Col>
            <Col md="7">
            
              <img
   
                src={require("assets/img/HELADO1.png")}
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
              
              <br /><br />
              
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

export default AdelaNewsComplement;
