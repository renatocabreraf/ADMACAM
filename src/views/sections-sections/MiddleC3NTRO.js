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
import BlogPostsHeaderGreen3 from "components/Headers/BlogPostsHeaderGreen3";



function MiddleCPalopo() {
  const [emailFocus, setEmailFocus] = React.useState(false);

  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

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
            backgroundImage: "url(" + require("assets/img/bg44.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row className="bg-news-row-green">
     
              <Col md="4">
              <Container>
              <img 
                src={require("assets/img/11.png")}
              ></img>
              </Container>
              </Col>
              <Col md="4">
              <Container>
              <img 
                src={require("assets/img/22.png")}
              ></img>
              </Container>
              </Col>
              <Col md="4">
              <Container>
              <img
                    src={require("assets/img/333.png")}
                  ></img>
                  </Container>
                  </Col>
          
          </Row>
        </div>
        
        <div className="content-center" 
          style={{
            backgroundColor: "#fff",
            color: "#0E273DE5",
          }}
        >
         
        </div>
      </div>
    </>
  );
}

export default MiddleCPalopo;

                