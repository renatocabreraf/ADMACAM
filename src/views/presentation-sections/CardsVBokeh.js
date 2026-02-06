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
  Col } from "reactstrap";
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
                backgroundColor:"#0E273D"
              }}
             
              
            >
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center mt-2" md="8"
                   >
                    <h1 className="title"
                    style={{
                      color: "#FFFFFF",
                      textAlign: "center",
                        fontFamily: "Elza Regular",
                        fontSize: "40px",
                        fontStyle: "normal",
                        fontWeight: "500",

                    }}
                    >{translate("presentation_header_text39")}  </h1>
                    <h3 className="title"
                    style={{
                      color: "#FFFFFF",
                      textAlign: "center",
                        fontFamily: "Elza Light",
                        fontSize: "40px",
                        fontStyle: "normal",
                        fontWeight: "275",
                    }}
                    >
                    {translate("presentation_header_text40")}
                    </h3>
                    <h5 
                    style={{
                      color: "#0074FF",
                      fontSize: "10pt",
                      margin: "50px",
                      fontWeight: "bold"

                    }}><a href="https://www.villabokeh.com/" style={{
                      color: "#0074FF",
                      textOverflow: "ellipsis",
                      fontFamily: "Elza",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "normal",
                      letterSpacing: "3px",
                      textDecorationLine: "underline",
                      textTransform: "uppercase"}
                      }>{translate("presentation_header_text33")}</a>
                    
                    </h5>
                  </Col>
                  
                  
                </Row>
                
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
           <br/> <br/> <br/> 
           
                  
           <Row
                style={{
                  paddingLeft:"85px"
                }}>
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
                    <a href="/CasaPalopo">
                  <img
                    href="/"
                    height={223}
                        width={226}
                    src={require("assets/img/Palopo Other Brands.png")}
                  ></img></a>
      
                  </Col>
                  
                  <Col md="4">
                    <a href="/">
                      <img
                        href="/C3NTRO"
                        height={223}
                        width={226}
                        src={require("assets/img/CENTROCHICAS.png")}
                      ></img></a>
<br/> <br/> <br/>  <br/> <br/> <br/>  <br/> <br/> <br/>  
                  </Col>
                  </Row>
          
          
            
         
              </Container>
            </div>
          </div>
        
        </div>
       
      </div>
    </>
  );
}

export default Cards;
