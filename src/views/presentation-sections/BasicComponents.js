import React from "react";
import { Container, Row, Col } from "reactstrap";
import { translate } from "components/Languages/translate";

function BasicComponents() {
  const [toggle1, setToggle1] = React.useState(false);
  const [toggle2, setToggle2] = React.useState(false);
  const [toggle3, setToggle3] = React.useState(false);
  const [toggle4, setToggle4] = React.useState(false);
  const [toggle5, setToggle5] = React.useState(false);

  const handleChangeToggle1 = () => {
    setToggle1(!toggle1);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
  };

  const handleChangeToggle2 = () => {
    setToggle1(false);
    setToggle2(!toggle2);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
  };

  const handleChangeToggle3 = () => {
    setToggle1(false);
    setToggle2(false);
    setToggle3(!toggle3);
    setToggle4(false);
    setToggle5(false);
  };

  const handleChangeToggle4 = () => {
    setToggle1(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(!toggle4);
    setToggle5(false);
  };

  const handleChangeToggle5 = () => {
    setToggle1(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(!toggle5);
  };

  const [hover1, setHover1] = React.useState(false);
  const [hover2, setHover2] = React.useState(false);
  const [hover3, setHover3] = React.useState(false);
  const [hover4, setHover4] = React.useState(false);
  const [hover5, setHover5] = React.useState(false);

  // ✅ Tamaño EXACTO estilo original
const imgStyle = {
  width: "clamp(180px, 22vw, 100px)",
  height: "300px",
  objectFit: "cover",
  borderRadius: "18px",
};


  // ✅ CONTENEDOR CENTRADO REAL
  const galleryOuter = {
    width: "100%",
  };

  // ✅ FILA ÚNICA CENTRADA COMO BLOQUE
  const galleryRow = {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    flexWrap: "nowrap",

    width: "fit-content", // 🔥 el ancho es solo el contenido
    margin: "0 auto",     // 🔥 centra TODO el grupo completo
  };

  // ✅ Cada card no se estira
  const cardFixed = (z) => ({
    zIndex: z,
    flex: "0 0 auto",
  });

  return (
    <>
      <div
        className="section section-components"
        data-background-color="dark-blue-ga"
      >
        {/* ===================== */}
        {/*       TÍTULO          */}
        {/* ===================== */}
        <Row className="justify-content-center">
          <Col md="10">
            <Container>
              <h2 className="title title-ga">
                {translate("presentation_header_text4")}
              </h2>
            </Container>
          </Col>
        </Row>

        {/* ===================== */}
        {/*     GALERÍA CENTRADA  */}
        {/* ===================== */}
        <Row className="justify-content-center">
          <Col md="12">
            <Container fluid>
              <div style={galleryOuter}>
                <div style={galleryRow}>

                  {/* 1 Guatemala */}
              
                  <div
                    className="card-container"
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}
                    style={cardFixed(hover1 ? 10 : 1)}
                  >
                        <p>Guatemala</p>
                    <a href="#pablo" onClick={handleChangeToggle1}>
                      <img
                        alt="Guatemala"
                        src={require("assets/img/guate1.png")}
                        style={imgStyle}
                      />
                    </a>
                  </div>

                  {/* 2 El Salvador */}
                  <div
                    className="card-container"
                    onMouseEnter={() => setHover2(true)}
                    onMouseLeave={() => setHover2(false)}
                    style={cardFixed(hover2 ? 10 : 1)}
                  >
                    <p>El Salvador</p>
                    <a href="#pablo" onClick={handleChangeToggle2}>
                      <img
                        alt="El Salvador"
                        src={require("assets/img/esa2.png")}
                        style={imgStyle}
                      />
                    </a>
                  </div>

                  {/* 3 Honduras */}
                  <div
                    className="card-container"
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}
                    style={cardFixed(hover3 ? 10 : 1)}
                  >
                    <p>Honduras</p>
                    <a href="#pablo" onClick={handleChangeToggle3}>
                      <img
                        alt="Honduras"
                        src={require("assets/img/hon3.png")}
                        style={imgStyle}
                      />
                    </a>
                  </div>

                  {/* 4 Nicaragua */}
                  <div
                    className="card-container"
                    onMouseEnter={() => setHover4(true)}
                    onMouseLeave={() => setHover4(false)}
                    style={cardFixed(hover4 ? 10 : 1)}
                  >
                    <p>Nicaragua</p>
                    <a href="#pablo" onClick={handleChangeToggle4}>
                      <img
                        alt="Nicaragua"
                        src={require("assets/img/nic4.png")}
                        style={imgStyle}
                      />
                    </a>
                  </div>

                  {/* 5 Costa Rica */}
                  <div
                    className="card-container"
                    onMouseEnter={() => setHover5(true)}
                    onMouseLeave={() => setHover5(false)}
                    style={cardFixed(hover5 ? 10 : 1)}
                  >
                    <p>Costa Rica</p>
                    <a href="#pablo" onClick={handleChangeToggle5}>
                      <img
                        alt="Costa Rica"
                        src={require("assets/img/cri5.png")}
                        style={imgStyle}
                      />
                    </a>
                  </div>

                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default BasicComponents;
