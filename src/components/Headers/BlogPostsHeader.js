import React from "react";

// reactstrap components
import { Button, Row, Col, Container } from "reactstrap";
import { translate } from "components/Languages/translate";


// core components

function BlogPostsHeader() {
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
  return (
    <>
     
        <div
          
          style={{
            backgroundColor: "#a0ddff",
            
          }}
          ref={pageHeader}
        ></div>
       
        <div className="content-center">
          <Row className="bg-news-row-green">
      <Container>
            <Col md="12">
            
            <h2 className="title title-ga" style={{
              color: "white",
       
            }}>
              {translate("presentation_header_text7")}
            </h2>
           
            </Col>
            </Container>
    
          </Row>
          
        </div>
        
    </>
  );
}

export default BlogPostsHeader;
