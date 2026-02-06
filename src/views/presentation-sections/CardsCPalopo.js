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

      <div className="wrapper"
      >

        <div className="about-office"
          style={{
            backgroundColor: "#0E273D",
            color: "#0E273DE5"
          }}>
          <Container

          >

          </Container>
        </div>
        <div className="main">
         
          <div className="section pt-0 pb-0"

          >
            <div
              style={{
                backgroundColor: "#0E273D"
              }}


            >
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center mt-2" md="8"
                  >
                    <Col md="12">
                    <h1 className="title"
                      style={{
                        color: "#FFFFFF",
                        textAlign: "center",
                        fontFamily: "Elza Regular",
                        fontSize: "40px",
                        fontStyle: "normal",
                        fontWeight: "500",
                      }}
                    >{translate("presentation_header_text31")}</h1>
                    </Col>
                    <Col md="12">
                    <h2 
                      style={{
                        color: "#FFFFFF",
                        textAlign: "center",
                        fontFamily: "Elza Light",
                        fontSize: "40px",
                        fontStyle: "normal",
                        fontWeight: "275",
                      }}
                    >
                      {translate("presentation_header_text32")}
                    </h2>
                    </Col>
                    <h5
                      style={{
                        color: "#0074FF",
                        fontSize: "10pt",
                        margin: "50px",
                        fontWeight: "bold"

                      }}><a href="https://www.casapalopo.com/" style={{
                        color: "#0074FF",
                        textOverflow: "ellipsis",
                        fontFamily: "Elza",
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        letterSpacing: "3px",
                        textDecorationLine: "underline",
                        textTransform: "uppercase",

                        width: "153px"
                      }}>{translate("presentation_header_text33")}</a>

                    </h5>
                  </Col>

                  {
                    /**
                     * 
                    <Col className="ml-auto mr-auto" lg="7" xl="6">
                      <Card className="card-profile">
                        <Row>
                          <Col md="5">
                            <div className="card-image">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                
                              </a>
                            </div>
                          </Col>
                          
                          
                        </Row>
                      </Card>
                    </Col>
                     */
                  }

                </Row>
                <br /> <br /> <br />
                <h1 style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontFamily: "Domaine Display Condensed Medium",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "51.5px", /* 143.056% */
                  textTransform: "uppercase",

                }}>{translate("presentation_header_text128")}</h1>
                <br /> <br /> <br />


                <Row
                style={{
                  paddingLeft:"85px"
                }}>

                  <Col md="4">
                    <a href="/C3NTRO">
                      <img
                        href="/C3NTRO"
                        height={223}
                        width={226}
                        src={require("assets/img/CENTROCHICAS.png")}
                      ></img></a>

                  </Col>

                  <Col md="4">
                    <a href="/Adela">
                      <img
                        href="/"
                        height={223}
                        width={226}
                        src={require("assets/img/367438112_680212554153407_4691698036586670340_n.jpg")}
                      ></img></a>

                  </Col>

                  <Col md="4">
                    <a href="/VBokeh">
                      <img
                        href="/"
                        height={223}
                        width={226}
                        src={require("assets/img/BOKEH NEWS.png")}
                        style={{}}
                      ></img></a>
                    <br /> <br /> <br />  <br /> <br /> <br />
                  </Col>
                </Row>



              </Container>

            </div>
          </div>
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
        </div>

      </div>
    </>
  );
}

export default Cards;
