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
          {/*<Container>
            <div className="section">
              <h3 className="title text-center">
                You may also be interested in
              </h3>
              <br></br>
              <Row>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/bg5.jpg")}
                        ></img>
                      </a>
                    </div>
                    
                    <CardBody>
                      <h6 className="category text-info">Enterprise</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Autodesk looks to future of 3D printing with Project
                          Escher
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/olivia.jpg")}
                        ></img>
                        <span>Anna Spark</span>
                      </div>
                </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/bg27.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-success">Startups</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Lyft launching cross-platform service this week
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/michael.jpg")}
                        ></img>
                        <span>John Black</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/bg21.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-danger">
                        <i className="now-ui-icons media-2_sound-wave"></i>{" "}
                        Enterprise
                      </h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          6 insights into the French Fashion landscape
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/james.jpg")}
                        ></img>
                        <span>James Newman</span>
                      </div>
                    </CardBody>

                  </Card>
                </Col>
              </Row>
            </div>
          </Container>*/}
          <div className="about-office" 
          
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
                        lineHeight:"0.1"

                    }}
                    > {translate("presentation_header_text53")}</h1>
                    <h3 className="title"
                    style={{
                      color: "#FFFFFF",
                      textAlign: "center",
                      fontFamily: "Elza Light",
                      fontSize: "40px",
                      fontStyle: "normal",
                      fontWeight: "275",
                      
                    }}>
                     {translate("presentation_header_text54")}
                    </h3>
                    <h5 
                    style={{
                      color: "#0074FF",
                        fontSize: "10pt",
                        margin: "50px",
                        fontWeight: "bold"

                    }}><a href="https://www.c3ntro.fit/" style={{
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

                     
                    }}> {translate("presentation_header_text33")}</a>
                    </h5>
                  </Col>
                  
                  {
                  /**
                   * 
                  <Col className="ml-auto mr-auto" lg="7" xl="6">
                    <Card className="card-profile">
                      <Row>
                        <Col md="5">
                          <div className="card-image">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              
                            </a>
                          </div>
                        </Col>
                        
                        
                      </Row>
                    </Card>
                  </Col>
                   */
                  }
                  
                </Row>
                <br /> <br /> <br />
                <h1 style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontFamily: "Domaine Display Condensed Medium",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "51.5px", /* 143.056% */
                  textTransform: "uppercase",

                }}> {translate("presentation_header_text128")}</h1>
                <br /> <br /> <br />
           
                  
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
                    <a href="/VBokeh">
                      <img
                        href="/"
                        height={223}
                        width={226}
                        src={require("assets/img/BOKEH NEWS.png")}
                        style={{}}
                      ></img></a>
                    <br /> <br /> <br />  <br /> <br /> <br />
                  </Col>
                  </Row>
          
          
            
         
              </Container>
            </div>
          </div>
        {/*}  <div className="subscribe-line subscribe-line-white">
            <Container>
              <Row>
                <Col md="6">
                  <h4 className="title">Get Tips &amp; Tricks every Week!</h4>
                  <p className="description">
                    Join our newsletter and get news in your inbox every week!
                    We hate spam too, so no worries about this.
                  </p>
                </Col>
                <Col md="6">
                  <Card className="card-plain card-form-horizontal">
                    <div className="card-content">
                      <Form action="" method="">
                        <Row>
                          <Col sm="8">
                            <InputGroup
                              className={emailFocus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email Name..."
                                type="text"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                              ></Input>
                            </InputGroup>
                          </Col>
                          <Col sm="4">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Subscribe
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>*/}
        </div>
       
      </div>
    </>
  );
}

export default Cards;
