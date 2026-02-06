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

<Row>
          <Col md="11">
            <Row>
            <Col md="4">
            <br/><br/>
              <Row>
              <br /><h3
                style={{
                  color: "#0074FF",
                  fontFamily: "Elza",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "700",

                  letterSpacing: "2.4px"
                }}>{translate("presentation_header_text27")} </h3>
              <h3
                style={{
                  color: "#0074FF",
                  fontFamily: "Elza",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16px", /* 154.167% */
                  letterSpacing: "1.56px",
                  textTransform: "capitalize"
                }}>Santa Catarina Palopó </h3>

            </Row>
            <Row>
              <h3
                style={{
                  color: "#0074FF",
                  fontFamily: "Elza",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "700",

                  letterSpacing: "2.4px"
                }}>AREA: </h3>
              <h3
                style={{
                  color: "#0074FF",
                  fontFamily: "Elza",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "18.5px", /* 154.167% */
                  letterSpacing: "1.56px",
                  textTransform: "capitalize"
                }}>76 Mts2</h3>
            </Row>
            <Row>
              <h3
                style={{
                  color: "#0074FF",
                  fontFamily: "Elza",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "700",

                  letterSpacing: "2.4px",
                  textTransform: "uppercase"
                }}>{translate("presentation_header_text28")} </h3>
              <h3
                style={{
                  color: "#0074FF",
                  fontFamily: "Elza",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "18.5px", /* 154.167% */
                  letterSpacing: "1.56px",
                  textTransform: "capitalize"
                }}>1989</h3>
            </Row>

          </Col>

          <Col md="4">

            <h4
              style={{
                color: "#011C33",
                fontFamily: "Elza",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "18.5px", /* 154.167% */

                flexShrink: "0",
                textAlign: "justify",

              }}
            >{translate("presentation_header_text29")} </h4>
          </Col>
          <Col md="4">

            <h4
              style={{
                color: "#011C33",
                fontFamily: "Elza",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "18.5px", /* 154.167% */

                flexShrink: "0",
                textAlign: "justify",

              }}>{translate("presentation_header_text30")}
            </h4>
            </Col>
            </Row>
            </Col>

        </Row>

      </div >
    </>
  );
}

export default ComponentsPalopo;
