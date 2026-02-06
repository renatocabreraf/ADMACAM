import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { translate } from "components/Languages/translate";

// core components

function Components() {
  return (
    <>
      <div
        className="section section-components"
        
        style={{
          backgroundColor:"#ffff",
          //height: "100px",
        }}
      >
    
          <Row>
            <Col className="" md="5"></Col>
            <Col md="6">
              <Container>
                <h5 
                  style={{
                    color:"#000",
                    fontSize:"12px",
                    fontWeight:"400",
                    fontStyle:"normal",
                    fontFamily:"Elza",
                    textAlign:"left",
                    lineHeight:"18.5px"
                  }}
                >
                  {translate("presentation_header_text8")}
                </h5>
              </Container>
            </Col>
          </Row>
      </div>
    </>
  );
}

export default Components;
