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
  Col,
  Dropdown,

  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
// core components
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import BlogPostsHeader from "components/Headers/BlogPostsHeader.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial.js";
import { translate } from "components/Languages/translate";




function Staff() {

  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");

    return function cleanup() {
      document.body.classList.remove("presentation-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const [toggle0, setToggle0] = React.useState(false)
  const [toggle1, setToggle1] = React.useState(false)
  const [toggle2, setToggle2] = React.useState(false)
  const [toggle3, setToggle3] = React.useState(false)
  const [toggle4, setToggle4] = React.useState(false)
  const [toggle5, setToggle5] = React.useState(false)
  const [toggle6, setToggle6] = React.useState(false)
  const [toggle7, setToggle7] = React.useState(false)
  const [toggle8, setToggle8] = React.useState(false)
  const [toggle9, setToggle9] = React.useState(false)
  const [toggle10, setToggle10] = React.useState(false)
  const [toggle11, setToggle11] = React.useState(false)

  const handleChangeToggle0 = () => {
    setToggle0(!toggle0)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }
  const handleChangeToggle1 = () => {
    setToggle0(false)
    setToggle1(!toggle1)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle2 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(!toggle2)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle3 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(!toggle3)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle4 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(!toggle4)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle5 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(!toggle5)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle6 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(!toggle6)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle7 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(!toggle7)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle8 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(!toggle8)
    setToggle9(false)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle9 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(!toggle9)
    setToggle10(false)
    setToggle11(false)
  }

  const handleChangeToggle10 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(!toggle10)
    setToggle11(false)
  }

  const handleChangeToggle11 = () => {
    setToggle0(false)
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
    setToggle6(false)
    setToggle7(false)
    setToggle8(false)
    setToggle9(false)
    setToggle10(false)
    setToggle11(!toggle11)
  }

  const [hover0, setHover0] = React.useState(false)
  const [hover1, setHover1] = React.useState(false)
  const [hover2, setHover2] = React.useState(false)
  const [hover3, setHover3] = React.useState(false)
  const [hover4, setHover4] = React.useState(false)
  const [hover5, setHover5] = React.useState(false)
  const [hover6, setHover6] = React.useState(false)
  const [hover7, setHover7] = React.useState(false)
  const [hover8, setHover8] = React.useState(false)
  const [hover9, setHover9] = React.useState(false)
  const [hover10, setHover10] = React.useState(false)
  const [hover11, setHover11] = React.useState(false)

  const handleMouseEnter0 = () => { setHover0(true) }
  const handleMouseEnter1 = () => { setHover1(true) }
  const handleMouseEnter2 = () => { setHover2(true) }
  const handleMouseEnter3 = () => { setHover3(true) }
  const handleMouseEnter4 = () => { setHover4(true) }
  const handleMouseEnter5 = () => { setHover5(true) }
  const handleMouseEnter6 = () => { setHover6(true) }
  const handleMouseEnter7 = () => { setHover7(true) }
  const handleMouseEnter8 = () => { setHover8(true) }
  const handleMouseEnter9 = () => { setHover9(true) }
  const handleMouseEnter10 = () => { setHover10(true) }
  const handleMouseEnter11 = () => { setHover11(true) }
  const handleMouseLeave0 = () => { setHover0(false) }
  const handleMouseLeave1 = () => { setHover1(false) }
  const handleMouseLeave2 = () => { setHover2(false) }
  const handleMouseLeave3 = () => { setHover3(false) }
  const handleMouseLeave4 = () => { setHover4(false) }
  const handleMouseLeave5 = () => { setHover5(false) }
  const handleMouseLeave6 = () => { setHover6(false) }
  const handleMouseLeave7 = () => { setHover7(false) }
  const handleMouseLeave8 = () => { setHover8(false) }
  const handleMouseLeave9 = () => { setHover9(false) }
  const handleMouseLeave10 = () => { setHover10(false) }
  const handleMouseLeave11 = () => { setHover11(false) }


  return (
    <>
      <div className="wrapper">
        <div
          style={{
            backgroundColor: "#a0ddff",
            color: "#0E273DE5"
          }}>

          <Container >
            <br />   <br />
            <h2
              style={{
                color: "#FFF",
                fontFamily: "Domaine Display Condensed Medium",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "51.5px", /* 107.292% */
                textTransform: "uppercase",
              }}
            >
              {translate("presentation_header_text55")}
            </h2>
            <Row>
              <img src={require("assets/img/Line 4.png")}></img>
              <Col md="6">
                <br />
                <h2
                  style={{
                    fontFamily: "Domaine Display Condensed Medium",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "51.5px", /* 107.292% */
                    textTransform: "uppercase",

                    flexShrink: "0"
                  }}
                >
                  {translate("presentation_header_text57")}
                </h2>
                <h6
                  style={{
                    fontFamily: "Elza Regular",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    textAlign: "justify",
                    flexShrink: "0",
                    textTransform: "initial"
                  }}
                >
                  {translate("presentation_header_text56")}
                </h6>
              </Col>
              <Col md="6">
                <img
                  alt="..."
                  className="rounded img-raised"

                  src={require("assets/img/regla.jpg")}
                ></img>
              </Col>

              <img src={require("assets/img/Line 4.png")}></img>
            </Row>
            
            <br /><br /> <br />
          </Container>
        </div>

        

      </div>

      
    </>
  );
}

export default Staff;
