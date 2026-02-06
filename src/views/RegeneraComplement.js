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
import BlogPostsHeaderGreen6 from "components/Headers/BlogPostsHeaderGreen6.js";
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
                backgroundColor: "#9BC697",
                color: "#0E273DE5"
              }}>
            <Container >
              <Row className="text-center" 
             >
                <Col className="ml-auto mr-auto" md="8">
                  
                 
                </Col>
              </Row>
        <br/> <br/> <br/> <br/> <br/> <br/>
        <Col md="12">
          
        </Col>
        <Col md="12">
        <br/>
        <img src={require("assets/img/dii-160.png")} 
             
             ></img>
       </Col>
              <Row>
              <Col md="6">
                
          <br/>
                  <h2 style={{
                  fontFamily: "Domaine Display Condensed Medium",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "51.5px", /* 107.292% */
                  textTransform: "uppercase",
                   
                  flexShrink: "0"
                }}>{translate("presentation_header_text105")}</h2>

                </Col>
                
                <Col md="6">
                <br/> 
                <h5 
                  style={{
                    color: "#011C33",
                    fontFamily: "Elza Light2",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "300",
                textAlign:"justify",
                }}
                  >{translate("presentation_header_text106")}

         
                
                  </h5>
                <h5
                style={{
                  color: "#011C33",
                  fontFamily: "Elza Light2",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "300",
              textAlign:"justify",
              
              }}>{translate("presentation_header_text104")}</h5>
              
                </Col>
               
                
              
     
              
               
              </Row>
            </Container>
            
          </div>
         
          </div>
        <div className="main" 
        >
     
        </div>
 
    </>
  );
}

export default KinnikComplement;
