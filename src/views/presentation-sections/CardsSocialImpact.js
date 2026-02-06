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
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial.js";
import { translate } from "components/Languages/translate";



function Cards() {
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
      <div className="about-office"
        style={{
          backgroundColor: "#CECECE",
          color: "#0E273DE5"
        }}>
        <Container >
          <Row className="text-center">
            <Col className="ml-auto mr-auto" md="8">
            </Col>
          </Row>
          <Col className="ml-auto mr-auto text-center mt-2" md="7">
            <h1 className="title"
              style={{
                color: "#10324D",
                textAlign: "center",
                fontFamily: "Domaine Display Condensed Medium",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "51.5px", /* 107.292% */
                textTransform: "uppercase"
              }}
            >
              {translate("presentation_header_text107")}
            </h1>
            <br/>
          </Col>
          <Row>
            <Col md="2">
              <h6
                style={{
                  color: "#10324D",
                  fontFamily: "Domaine Display Condensed Medium",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  
                  textTransform: "uppercase"
                }}
              >
                {translate("presentation_header_text105")}
              </h6>
             
              <h6
                href="/"
                style={{
                  color: "#0074FF"
                }}
              >
                <a href="/Regenera"
                  style={{
                    overflow: "hidden",
                    color: "#0074FF",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    letterSpacing: "3px",
                    textDecorationLine: "underline",
                    textTransform: "uppercase"
                  }}
                >
                  {translate("presentation_header_text10")}
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                  <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </h6>
             
            </Col>
            <Col md="2"
              style={{
                borderRight: "1px solid black",
                    margin: "1rem 0 1rem",
                
              }}
            >
              <img
                height={150}
                alt="..."
                className="rounded img-raised"
                src={require("assets/img/Captura de pantalla 2023-10-12 a la(s) 17.42.51.png")}
              ></img>
            </Col>

            <Col md="2">
              <h6
                style={{
                  color: "#10324D",
                  fontFamily: "Domaine Display Condensed Medium",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  
                  textTransform: "uppercase"
                }}
              >
                {translate("presentation_header_text108")}
              </h6>
             
        
              <h6
                href="/"
                style={{
                  color: "#0074FF"
                }}
              >
                <a href="/PintandoElCambio"
                  style={{
                    overflow: "hidden",
                    color: "#0074FF",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    letterSpacing: "3px",
                    textDecorationLine: "underline",
                    textTransform: "uppercase"
                  }}
                >
                  {translate("presentation_header_text10")}
                </a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                    <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </h6>
               
            </Col>
            <Col md="2"
              style={{
                borderRight: "1px solid black",
                    margin: "1rem 0 1rem",
               
              }}
            >
              <img
                height={150}
                alt="..."
                className="rounded img-raised"
                src={require("assets/img/PINTANDO PALOPO.png")}
              ></img>
            </Col>
            
            <Col md="2">
              <h6
                style={{
                  color: "#10324D",
                  fontFamily: "Domaine Display Condensed Medium",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                 
                  textTransform: "uppercase"
                }}
              >
                {translate("presentation_header_text109")}
               
              </h6>

              <h6
                  href="/"
                  style={{
                    color: "#0074FF"
                  }}
              >
                <a href="/SocialImpact"
                  style={{
                    overflow: "hidden",
                    color: "#0074FF",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    letterSpacing: "3px",
                    textDecorationLine: "underline",
                    textTransform: "uppercase"
                  }}
                >
                  {translate("presentation_header_text10")}
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                  <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round"/>
                </svg>
                </h6>
            </Col>
            <Col md="2"
            style={{
              
                  margin: "1rem 0 1rem",
             
            }}>
              <img
                height={150}
                alt="..."
                className="rounded img-raised"
                src={require("assets/img/Captura de pantalla 2023-10-10 a la(s) 10.35.40.png")}
              ></img>
             
              <br/><br/>
            </Col>
          </Row>
        </Container>
      </div >
    {/*}  <div className="subscribe-line subscribe-line-white">
            <Container>
              <Row>
                <Col md="6">
                  <h4 className="title">Get Tips &amp; Tricks every Week!</h4>
                  <p className="description">
                    Join our newsletter and get news in your inbox every week!
                    We hate spam too, so no worries about this.
                  </p>
                </Col>
                <Col md="6">
                  <Card className="card-plain card-form-horizontal">
                    <div className="card-content">
                      <Form action="" method="">
                        <Row>
                          <Col sm="8">
                            <InputGroup
                              className={emailFocus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email Name..."
                                type="text"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                              ></Input>
                            </InputGroup>
                          </Col>
                          <Col sm="4">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Subscribe
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>*/}
       
    </>
  );
}

export default Cards;
