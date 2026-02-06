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



function News() {
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
        <div 
          style={{
            backgroundColor: "#FFF",
            color: "#0E273DE5"
          }}>
          <Container 
            style={{
            }}
          >
            <Row>
              <Col md="6">
                
               
                <br />
                <h2
                  style={{
                    fontFamily: "Domaine Display Condensed Medium",
                    fontSize: "48px",
                    fontStyle: "normal",
                  
                 
                    textTransform: "uppercase",
                   
            
                  }}
                >
                  {translate("presentation_header_text6")}
                </h2>

                <h6
                  style={{
                    fontFamily: "Elza Regular",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                  
                    
                    flexShrink: "0",
                    textTransform: "initial",
                    textAlign: "justify",
                  }}
                >
                  {translate("presentation_header_text65")}
                </h6>
                
             
              </Col>

              <Col md="6">
            
                <img
                  alt="..."
                  className="rounded img-raised"
               
                  src={require("assets/img/vision1.jpg")}
                ></img>
              </Col>

              <img src={require("assets/img/Line 4.png")}></img>
            </Row>
            
              </Container>
            </div>
          </div>
          
    </>
  );
}

export default News;
