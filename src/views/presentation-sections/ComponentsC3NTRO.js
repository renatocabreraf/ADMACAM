import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { translate } from "components/Languages/translate";

// core components

function ComponentsPalopo() {
  return (
    <>
      <div
        className="section section-components"
        style={{
          backgroundColor: "#D9D9D9"
        }}
      >
        <Container>
          <Row>
            
            <Col className="" md="6">
       
            <h4
            style={{
              color: "#011C33",
              fontFamily: "Elza",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18.5px", /* 154.167% */
            textAlign: "justify",
  flexShrink: "0"
  
            }}>
            {translate("presentation_header_text51")}


            </h4>

            </Col>
            <Col md="6">
            <h4
            style={{
              color: "#011C33",
              fontFamily: "Elza",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18.5px", /* 154.167% */
            textAlign: "justify",
  flexShrink: "0"
  
            }}>
            
            {translate("presentation_header_text52")}


            </h4>

              
              
              <div className="space-35"
              ></div>
            </Col>
           
          </Row>
          </Container>
      </div>
    </>
  );
}

export default ComponentsPalopo;
