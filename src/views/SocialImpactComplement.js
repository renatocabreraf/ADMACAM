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
            <br /><br /><br /><br /><br /><br /><br />
            <Col md="12">
              <img src={require("assets/img/a1edc2ce0c20a838f03224c0f0e19615 1.png")}
              ></img>
            </Col>
            <Row>
              <Col md="6">

                <br /><br /><br />
                <h2 style={{
                  fontFamily: "Domaine Display Condensed Medium",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "51.5px", /* 107.292% */
                  textTransform: "uppercase",
                 
                  flexShrink: "0"
                }}>{translate("presentation_header_text109")}</h2>


            <h5
              style={{
                color: "#011C33",
                fontFamily: "Elza Light2",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            textAlign:"justify",
           
            }}
            >{translate("presentation_header_text114")}
            </h5>

            <img 
            
            
            src={require("assets/img/Captura de Pantalla 2023-09-25 a las 12.10 1.png")}
            style={{
          
              
            }}>
            </img>

               
              </Col>

              <Col md="6">
             
                <h4
                  style={{
                    color: "#011C33",
                fontFamily: "Elza Light2",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            textAlign:"justify",
           
                }}>{translate("presentation_header_text113")}</h4>
               <div align= "right">
               <img 
                 
                 src={require("assets/img/Captura de pantalla 2023-10-10 a la(s) 10.35.40.png")}></img>
  </div> 
          </Col>


        



        </Row>
      </Container>

    </div >
    
          <BlogPostsHeaderGreen6 />
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
         
              <Row>
           
                <Col med="2"></Col>
                
              <Col md="4">
                
                
                 
         
                
                  
                       
                </Col>
                
                <Col md="7" >
        <br/>
                <img
              
                    src={require("assets/img/Copia de Albert_Folch_20 1.png")}
                  ></img>
                                
                </Col>
                </Row>
                <Row>
                  <Col md="4">
                    
                  </Col>
                  <Col md="6">
                    <h4
                    style={{
                      color: "#011C33",
                      fontFamily: "Elza Light2",
                  fontSize: "26px",
                  fontStyle: "normal",
                 
                  textAlign:"justify",
           
                  }}>
                    {translate("presentation_header_text115")}
                    </h4>
                    <br/><br/>
                   {/* <a href="https://www.casapalopo.com/" style={{
                      color:"#0074FF"
                    }}>VISIT THE WEBSITE</a>*/}
                    <br/><br/><br/>
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

export default KinnikComplement;
