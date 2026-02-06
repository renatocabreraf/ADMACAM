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
import BlogPostsHeaderGreen7 from "components/Headers/BlogPostsHeaderGreen7.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial.js";
import { translate } from "components/Languages/translate";



function PintandoElCambioComplement() {
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
             <br/><br/><br/><br/><br/><br/><br/>
       <Col md="12">
        
         <img src={require("assets/img/HEADERPINTANDO.png")}
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
                  width: "453px",
                  height: "153px",
                  flexShrink: "0"
                }}>{translate("presentation_header_text108")}</h2>

                <br/>

<h5 
                 style={{
                  color: "#011C33",
                  fontFamily: "Elza Light2",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "300",
              textAlign:"justify",
              lineHeight: "34px" 
                   
                 }}
                 >
                {translate("presentation_header_text111")}
                 </h5>
                 <img 
       
            
       src={require("assets/img/PINTANDO1.png")}
       style={{
       
         
       }}>
       </img>
               </Col>
               
               <Col md="6">
               <br/>   <br/>   <br/>
               <h4
               style={{
                    color: "#011C33",
                    fontFamily: "Elza Light2",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "300",
                textAlign:"justify",
                lineHeight: "34px" /* 141.667% */
                }}>{translate("presentation_header_text110")}
                </h4>
                <div align="right"><img 
           
                    src={require("assets/img/PINTANDO2.png")}></img></div>
               </Col>
               
       
               <Col md="6">
              
                
               </Col>
               

             
              
             </Row>
           </Container>
           
         </div>
         <BlogPostsHeaderGreen7 />
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
                
                
                 
                    <br/><br/><br/>
                
                  
                       
                </Col>
                <Col md="7" >
               
               <br/>
                <img
                 
                    src={require("assets/img/PINTANDO3.png")}
                  ></img>
                                
                </Col>
               </Row>
               <Row>
                 <Col md="4">
                   
                 </Col>
                 <Col md="6">
                  <br/> <br/><br/><br/><br/><br/><br/><h4 style={{
                      position:"relative",
                      top:"-150px",
                      color: "#011C33",
                    fontFamily: "Elza Light2",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "300",
                textAlign:"justify",
                lineHeight: "34px" 
                      
                    }}>
                   {translate("presentation_header_text112")}
                  </h4>
           
                  {/* <a href="https://www.casapalopo.com/" style={{
                     color:"#0074FF"
                   }}>VISIT THE WEBSITE</a>*/}
      
                 </Col>
               </Row>
              
           
           </div>
         </div>
       <div className="main" 
       >

       </div>
 
    </>
  );
}

export default PintandoElCambioComplement;
