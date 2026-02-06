import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";


import logo from "../../assets/img/LADMA.png"
import logo2 from "../../assets/img/LOGOADMA.png"
import { translate } from "components/Languages/translate";


function FixedTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  const [navbarTextColor, setNavbarTextColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "navbar-text-grupo-alta-scroll"
      : " navbar-text-grupo-alta"
  );
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );

  const handleLanguageChange = (locale) => {
    localStorage.setItem("locale", locale)
    window.location.reload(false)
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
        setNavbarTextColor("navbar-text-grupo-alta-scroll");
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 99 ||
        document.body.scrollTop < 99
      ) {
        setNavbarColor(" navbar-transparent");
        setNavbarTextColor("navbar-text-grupo-alta");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="grupo-alta" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img
                src={logo}
                alt="logo"
                style={{ width: "200px", height: "50PX" }}
              />


            </NavbarBrand>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>


          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "3px",
                    textDecorationLine: "underline",
                    textTransform: "uppercase"
                  }}
                  nav
                  className={navbarTextColor}
                >
                  <i ></i>
                  <p>{translate("presentation_header_text4")}</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem to="/" tag={Link} className={"navbar-text-grupo-alta-scroll"}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "Elza",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      letterSpacing: "3px",

                      textTransform: "uppercase"
                    }}  >
                    <i ></i>
                    GUATEMALA
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link} className={"navbar-text-grupo-alta-scroll"}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "Elza",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      letterSpacing: "3px",

                      textTransform: "uppercase"
                    }}  >
                    <i ></i>
                    EL SALVADOR
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link} className={"navbar-text-grupo-alta-scroll"}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "Elza",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      letterSpacing: "3px",

                      textTransform: "uppercase"
                    }}>
                    <i ></i>
                    HONDURAS
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link} className={"navbar-text-grupo-alta-scroll"}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "Elza",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      letterSpacing: "3px",

                      textTransform: "uppercase"
                    }}>
                    <i ></i>
                    NICARAGUA
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link} className={"navbar-text-grupo-alta-scroll"}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "Elza",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      letterSpacing: "3px",

                      textTransform: "uppercase"
                    }}>
                    <i ></i>
                    COSTA RICA
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link} className={"navbar-text-grupo-alta-scroll"}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "Elza",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      letterSpacing: "3px",

                      textTransform: "uppercase"
                    }}>
                    <i ></i>
                    PANAMÁ
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  to="/Reglamento" tag={Link}
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "3px",

                    textTransform: "uppercase"
                  }}
                  nav

                  className={navbarTextColor}
                >
                  <i
                    aria-hidden={true}

                  ></i>
                  <p>{translate("presentation_header_text157")}</p>
                </DropdownToggle>

              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  to="/Nosotros" tag={Link}
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "3px",

                    textTransform: "uppercase"
                  }}
                  nav

                  className={navbarTextColor}
                >
                  <i
                    aria-hidden={true}

                  ></i>
                  <p>{translate("presentation_header_text5")}</p>
                </DropdownToggle>

              </UncontrolledDropdown>
              <UncontrolledDropdown nav >
                <DropdownToggle
                  to="/Vision" tag={Link}
                  color="default"
                  data-toggle="dropdown"

                  id="navbarDropdownMenuLink"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "3px",

                    textTransform: "uppercase"
                  }}
                  nav

                  className={navbarTextColor}
                >
                  <i
                    aria-hidden={true}

                  ></i>
                  <p >{translate("presentation_header_text6")}</p>
                </DropdownToggle>
              </UncontrolledDropdown>
            
              <UncontrolledDropdown nav>
                <DropdownToggle

                  color="default"
                  data-toggle="dropdown"
                  onClick={() => handleLanguageChange("en-US")}
                  id="navbarDropdownMenuLink"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "3px",

                    textTransform: "uppercase"
                  }}
                  nav

                  className={navbarTextColor}
                >
                  <i
                    aria-hidden={true}

                  ></i>
                  <p><img

                    src={require("assets/img/uk.png")}
                    style={{
                      height: "20px"

                    }}
                  ></img>
                  </p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle

                  color="default"
                  data-toggle="dropdown"
                  onClick={() => handleLanguageChange("en-ES")}
                  id="navbarDropdownMenuLink"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "Elza",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "3px",

                    textTransform: "uppercase"
                  }}
                  nav


                  className={navbarTextColor}
                >
                  <i
                    aria-hidden={true}

                  ></i>
                  <p><img

                    src={require("assets/img/españa.png")}
                    style={{
                      height: "20px"

                    }}
                  ></img></p>
                </DropdownToggle>
              </UncontrolledDropdown>

            </Nav>
          </Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default FixedTransparentNavbar;
