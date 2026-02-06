import React from "react";

// reactstrap components
import { Button, Row, Col } from "reactstrap";

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
            backgroundImage: "url(" + require("assets/img/bg44.jpg") + ")",
            
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row className="bg-news-row-green"
          style={{
            backgroundColor: "#10324D"
          }}>
<br/><br/><br/><br/><br/><br/><br/>
            <Col className="ml-auto mr-auto text-center" md="8">
            <br/>
          
            </Col>
          </Row>
          
        </div>
      
    </>
  );
}

export default BlogPostsHeader;
