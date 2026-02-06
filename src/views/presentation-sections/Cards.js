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
      <div style={{
        backgroundColor: "#a0ddff",
      }}>
        <Container >
          <div className="wrapper">
            <BlogPostsHeader />
            <div className="about-office"
              style={{
                backgroundColor: "#a0ddff",
                color: "#0E273DE5"
              }}>

              <Row className="text-center">
                <Col className="ml-auto mr-auto">
                </Col>
              </Row>
              <img src={require("assets/img/Line 4.png")}></img>
              <Row>
                <Col md="6">
                  <br />
                  <Col md="12">
                    <h2
                      style={{
                        fontFamily: "Domaine Display Condensed Medium",
                        fontSize: "48px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "51.5px", /* 107.292% */
                        textTransform: "uppercase",

                        flexShrink: "0"
                      }}

                    >{translate("presentation_header_text15")}</h2>
                  </Col>
                  <Col md="12">
                    <h6
                      style={{
                        fontFamily: "Elza Regular",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "18.5px", /* 154.167% */

                        flexShrink: "0",
                        textAlign: "justify",
                        textTransform: "initial"
                      }}

                    >{translate("presentation_header_text138")}<br />{translate("presentation_header_text140")}</h6>
                  </Col>
                  <br />
                  <Col md="6">
                    <h6
                      href="/"
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
                        textTransform: "uppercase",
                        display: "-webkit-box",
                        width: "55px",
                        webkitBoxOrient: "vertical",
                        webkitLineClamp: "1"
                      }}
                    ><a href="/"
                      style={{
                        color: "#0074FF",
                      }}> {translate("presentation_header_text10")} </a> <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none"
                        style={{
                          strokeWidth: "2px",
                          stroke: "#0074FF",
                          width: "3px",
                          height: "7px",
                          flexShrink: "0"
                        }}>
                        <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round" />
                      </svg>

                    </h6>
                  </Col>


                </Col>

                <Col md="6">
                  <br />
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/retiroMana.jpg")}
                  ></img>
                </Col>

                <img src={require("assets/img/Line 4.png")}></img>
              </Row>
              <Container>
              <Row>
          
                <Col md="2">
              
                  <h6
                    style={{

                      fontFamily: "Domaine Display Condensed Medium",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "24x", /* 107.292% */
                      textTransform: "uppercase",
                      lineHeight: "1",
                      flexShrink: "0"
                    }}
                  ><br />{translate("presentation_header_text101")}
                  </h6>
                  <h6
                    href="https://www.boletinsalesiano.info/fotonotas/12563-adma-promueve-solidaridad-con-venta-comunitaria-en-guatemala"
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
                      textTransform: "uppercase",
                      display: "-webkit-box",
                      width: "55px",
                      webkitBoxOrient: "vertical",
                      webkitLineClamp: "1"
                    }}
                  >
                    <a href="/"
                      style={{
                        color: "#0074FF"
                      }}
                    >
                      {translate("presentation_header_text10")}
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none"
                      style={{
                        color: "#0074FF",
                        strokeWidth: "2px",
                        stroke: "#0074FF",
                        width: "3px",
                        height: "7px",
                        flexShrink: "0"
                      }}
                    >
                      <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round" />
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
              
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/noti1.jpg")}
                  ></img>
                </Col>
             
                <Col md="2">
               
                  <h6
                    style={{
                      fontFamily: "Domaine Display Condensed Medium",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "24px", /* 107.292% */
                      textTransform: "uppercase",
                      lineHeight: "1",
                      flexShrink: "0"
                    }}
                  >
                    <br />
                    {translate("presentation_header_text102")}

                  </h6>

                  <h6
                    href="/"
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
                      textTransform: "uppercase",
                      display: "-webkit-box",
                      width: "55px",
                      webkitBoxOrient: "vertical",
                      webkitLineClamp: "1"
                    }}


                  >
                    <a href="/"
                      style={{
                        color: "#0074FF"
                      }}
                    >
                      {translate("presentation_header_text10")}
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none"
                      style={{
                        strokeWidth: "2px",
                        stroke: "#0074FF",
                        width: "3px",
                        height: "7px",
                        flexShrink: "0"
                      }}
                    >
                      <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round" />
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
     
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/noti2.jpg")}
                  ></img>
                </Col>

                <Col md="2">
            
                  <h6
                    style={{
                      fontFamily: "Domaine Display Condensed Medium",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "24px", /* 107.292% */
                      textTransform: "uppercase",
                      lineHeight: "1",
                      flexShrink: "0"
                    }}
                  >
                    <br />
                    {translate("presentation_header_text103")}

                  </h6>

                  <h6
                    href="/"
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
                      textTransform: "uppercase",
                      display: "-webkit-box",
                      width: "55px",
                      webkitBoxOrient: "vertical",
                      webkitLineClamp: "1"
                    }}
                  >
                    <a href="/"
                      style={{
                        color: "#0074FF"
                      }}
                    >
                      {translate("presentation_header_text10")}
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none"
                      style={{
                        strokeWidth: "2px",
                        stroke: "#0074FF",
                        width: "3px",
                        height: "7px",
                        flexShrink: "0"
                      }}
                    >
                      <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  </h6>
                </Col>
                <Col md="2"
                  style={{
                   
                    margin: "1rem 0 1rem",
                  
                  }}
                >
                  <img
      
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/noti3.jpg")}
                  ></img>
                </Col>
              
              </Row>
              </Container>
            </div>
          </div>
          </Container>
            <div className="main">
              <div className="section pt-0 pb-0">
                <div
                  className="team-3 section-image"
                  data-parallax={true}

                >

                  <Container>
                    <Row>
                      <Col  >
<Container>
                        <Col md="12">
                          <h1 className="title"
                            style={{
                              color: "#0E273DE5",
                              textAlign: "center",
                              fontFamily: "Elza Regular",
                              fontSize: "48px",
                              fontStyle: "normal",
                              fontWeight: "500",
                         

                            }}
                          >{translate("presentation_header_text16")}</h1>
                      


                          <h2 className="CardDos"
                            style={{
                              color: "#0E273DE5",
                              textAlign: "center",
                              fontFamily: "Elza Light",
                              fontSize: "48px",
                              fontStyle: "normal",
                              fontWeight: "275",
                             
                            }}
                          >
                            {translate("presentation_header_text17")}
                          </h2>
                        </Col>
                        </Container>
                        <Col md="12">
                          <a href="/Staff" >
                            <h5
                              style={{
                                overflow: "hidden",
                                color: "#0074FF",
                                textOverflow: "ellipsis",
                                fontFamily: "Elza",
                                fontSize: "10px",
                                fontStyle: "normal",
                                fontWeight: "700",

                                
                                textDecorationLine: "underline",
                                textTransform: "uppercase",
                                textAlign: "center",

                                webkitBoxOrient: "vertical",
                                webkitLineClamp: "1",


                              }}>
                              <br />
                              <br />
                              <br />
                              {translate("presentation_header_text18")} <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                style={{


                                  flexShrink: "0",
                                  strokeWidth: "2px",
                                  stroke: "#0074FF"
                                }}>
                                <path d="M1 1L4 4.5L1 8" stroke="#0074FF" stroke-width="2" stroke-linecap="round" />
                              </svg>

                            </h5></a>
                        </Col>
                      </Col>
                    

                    </Row>
                  </Container>
                </div>
              </div>

     
          </div>
      
      </div >

    </>
  );
}

export default Cards;
