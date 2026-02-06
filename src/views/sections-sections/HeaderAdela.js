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
import BlogPostsHeaderBlue from "components/Headers/BlogPostsHeaderBlue";
import { translate } from "components/Languages/translate";



function HeaderCPalopo() {
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
        
        <BlogPostsHeaderBlue />
        
        <div className="about-office" 
        style={{
                backgroundColor: "#fff",
                color: "#0E273DE5"
              }}>
            
              <Row className="text-center" 
             >
                <Col className="ml-auto mr-auto" md="8">
                  
                 
                </Col>
              </Row>
         
              <Row>
                <Col med="2"></Col>
              <Col md="4">
              <br/><br/>
                  <img 
                  height={194.523}
                  width={257.69}
                    src={require("assets/img/Editable_Logo Adela _Mesa de trabajo 1 copia 2.png")}></img>
                    
            
                  
                  <h2
                  style={{
                    fontFamily: "Domaine Display Condensed Medium",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "0.7", /* 125% */
                    textTransform: "uppercase",
                    }}>{translate("presentation_header_text41")}</h2>
                  <h2
                  style={{
                    fontFamily: "Domaine Display Condensed Medium",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "0.3", /* 125% */
                    textTransform: "uppercase",
                        }}>{translate("presentation_header_text42")}</h2>
                  <h2
                  style={{
                    fontFamily: "Domaine Display Condensed Medium",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "0.5", /* 125% */
                    textTransform: "uppercase",
                         
                        }}>{translate("presentation_header_text43")}</h2>
                       
                </Col>
            
                <img
                    
                    src={require("assets/img/HELADOHEADER.png")}
                  ></img>
                               
                
                </Row>
               
            
            </div>
          </div>
        
    
    </>
  );
}

export default HeaderCPalopo;

                