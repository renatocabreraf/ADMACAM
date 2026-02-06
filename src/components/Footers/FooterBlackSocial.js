/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import logo from "../../assets/img/LOGOADMA.png"
import { translate } from "../Languages/translate";


// core components

function FooterBlackSocial() {
  return (
    <>
      <footer className="footer" data-background-color="blue"
        style={{
          backgroundImage: "url(" + require("assets/img/FooterImage.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPositionX: "right"
        }}
      >
        
        <Container>
          <div className="content">
          <Container>
            <Row>
       
              <Col md="2"
                style={{
                  borderRight: "1px solid black",
                  height: "250px",
        
                }}
                >


                <h4
                  style={{
                    color: "#FFF",
                    fontFamily: "Elza",
                    fontSize: "8px",
                    fontStyle: "normal",
                    fontWeight: "700",
              
                    letterSpacing: "1.55px",
                    textTransform: "uppercase"
                  }}
                >
                  <p>{translate("presentation_header_text158")}</p>
                </h4>
                <ul className="links-vertical">
                  
                  <li>
                    <a
                      href="/Nosotros"
                      style={{
                        color: "#FFF",
                        fontFamily: "Elza",
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: "400",
                       
                        letterSpacing: "1.55px",
                        textTransform: "uppercase"
                      }}
                    >
                      {translate("presentation_header_text5")}
                    </a>
                    <br />
                  </li>
                  <li>
                    <a
                      href="/Vision"
                      style={{
                        color: "#FFF",
                        fontFamily: "Elza",
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: "400",
                
                        letterSpacing: "1.55px",
                        textTransform: "uppercase"
                      }}
                    >
                      {translate("presentation_header_text6")}
                    </a>
                    <br />
                  </li>
                  <li>
                    <a
                      href="/Reglamento"
                      style={{
                        color: "#FFF",
                        fontFamily: "Elza",
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: "400",
                  
                        letterSpacing: "1.55px",
                        textTransform: "uppercase"
                      }}
                    >
                      {translate("presentation_header_text157")}
                    </a>
                    <br />
                  </li>

                </ul>
              </Col>
          
              <Col md="1"></Col>

              <Col md="2">
                <ul className="links-vertical">
                  <li>
                    <a>
                      <br />
                      <h6
                        style={{
                          color: "#FFF",
                          fontFamily: "Elza",
                          fontSize: "10px",
                          fontStyle: "normal",
                          fontWeight: "700",
                
                          textTransform: "capitalize",
                          paddingTop: "15px",
                          lineHeight: "0",


                        }}>

                        {translate("presentation_header_text21")}</h6>
                      <h6
                        style={{
                          fontFamily: "Elza",
                          fontSize: "10px",
                          fontStyle: "normal",
                          fontWeight: "400",
                 
                          textTransform: "initial",

                        }}
                      >Direccion<br />
                        Direccion</h6>

                    </a>
                  </li>
                  <li>
                    <a

                    >
                      <h6
                        style={{
                          color: "#FFF",
                          fontFamily: "Elza",
                          fontSize: "10px",
                          fontStyle: "normal",
                          fontWeight: "700",
                    
                          textTransform: "capitalize",




                        }}
                      >Tel.</h6>
                      <h6
                        style={{
                          color: "#FFF",
                          fontFamily: "Elza",
                          fontSize: "10px",
                          fontStyle: "normal",
                          fontWeight: "700",
                    
                          textTransform: "capitalize",
                          lineHeight: "0",
                        }}
                      >Colocar Numero</h6>
                    </a>
                  </li>
                  <li>
                    <a

                    >
                      <h6
                        style={{
                          color: "#FFF",
                          fontFamily: "Elza",
                          fontSize: "10px",
                          fontStyle: "normal",
                          fontWeight: "700",
                 
                          textTransform: "initial",
                          paddingTop: "15px",
                          lineHeight: "0",


                        }}
                      >E-Mail</h6>
                      <h6
                        style={{
                          fontFamily: "Elza",
                          fontSize: "10px",
                          fontStyle: "normal",
                          fontWeight: "400",
            
                          textTransform: "initial",

                        }}
                      >Colocar Email</h6>
                    </a>
                  </li>
                  <li>
                    <a>
                      <h6
                        style={{
                          color: "#FFF",
                          fontFamily: "Elza",
                          fontSize: "10px",
                          fontStyle: "normal",
                          fontWeight: "700",
                         
                          textTransform: "initial",
                          paddingTop: "15px",
                          lineHeight: "0",
                        }}>
                        Social Media
                      </h6>
                      <div
                        style={{
                          display: "flex"
                        }}>


                        <Button

                          className="btn-icon btn-neutral btn-round "
                          style={{
                            backgroundColor:"#a0ddff"
                          }}
                          href="/"
                        >
                          <i className="fab fa-facebook-square"></i>
                        </Button>



                        <Button
                          className="btn-icon btn-neutral btn-round"
                          style={{
                            backgroundColor:"#a0ddff"
                          }}
                          href="/"
                        >
                          <i className="fab fa-instagram"></i>
                        </Button>

                      </div>
                    </a>
                  </li>

                </ul>
              </Col>
        
            </Row>
            </Container>
            <br/>
            <Row>
              <Col md="6">
                <div
                  style={{
                    color: "#ffff",
                    fontFamily: "Elza",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "16px", /* 133.333% */
                    textTransform: "uppercase"
                  }}
                >
                  <img src={logo} width={50}></img>
                  Agrupación de María Auxiliadora (ADMA) (C) {translate("presentation_header_text22")} {new Date().getFullYear()}.
                </div>
              </Col>
            </Row>
          </div>

        </Container>
      </footer >
    </>
  );
}

export default FooterBlackSocial;
