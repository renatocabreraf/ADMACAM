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
        }}
      >
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
                fontWeight: 500,
                lineHeight: "51.5px",/* 107.292% */
                textTransform: "uppercase"
              }}
            >
              {translate("presentation_header_text125")}
            </h1>
        
        </Col>
        <Row>
          <Col md="2">
            <br/>
            <br/>
            <h6
              style={{

                fontFamily: "Domaine Display Condensed Medium",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
             
                textTransform: "uppercase",
               
              }}
            ><br />{translate("presentation_header_text101")}
             
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
               
              }}
            >
              <a href="/C3NTRONews"
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
              height={166}
              width={160}
              alt="..."
              className="rounded img-raised"
              src={require("assets/img/CENTROCHICAS.png")}
            ></img>
          </Col>

          <Col md="2">
            <br/>
            <br/>
            <h6
              style={{
                fontFamily: "Domaine Display Condensed Medium",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
              
                textTransform: "uppercase",
               
              }}
            >
              <br/>
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
               
              }}
            >
              <a href="/AdelaNews"
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
              height={166}
              width={160}
              alt="..."
              className="rounded img-raised"
              src={require("assets/img/ADELA NEWS.png")}
            ></img>
          </Col>
            
          <Col md="2">
            <br/>
            <br/>
            <h6
              style={{
                fontFamily: "Domaine Display Condensed Medium",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
            
                textTransform: "uppercase",
               
              }}
            >
              <br/>
              {translate("presentation_header_text15")}
              
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
               
              }}
            >
              <a href="/Kinnik"
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
              height={166}
              width={160}
              alt="..."
              className="rounded img-raised"
              src={require("assets/img/FOOTERKINNIK.png")}
            ></img>
          </Col>
        </Row>
      </Container>
    </div >
   
       
    </>
  );
}

export default Cards;
