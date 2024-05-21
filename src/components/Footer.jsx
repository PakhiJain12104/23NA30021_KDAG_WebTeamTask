import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center"
      color="black"
      bgColor="light"
      style={{ padding: "0rem", margin: "0rem", width: "77rem" }}
    >
      <MDBContainer className="p-4">
        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="dark" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
      </MDBContainer>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Mission Statement:
              </h6>
              <p>
                Empowering the next generation of geneticists through
                cutting-edge education and research opportunities.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms of service
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accesibility
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                123 Science Avenue, Research City, State, 12345
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Email: info@geneticscourse.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "#202020", color: "white" }}
      >
        © 2020 Copyright:
        <a className="text-white">Eduarmy.com</a>
      </div>
    </MDBFooter>
  );
}
