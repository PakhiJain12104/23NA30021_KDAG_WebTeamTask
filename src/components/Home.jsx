import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./intro1.jpg";
import img2 from "./intro2.jpg";
import p1 from "./prof1.jpg";
import p2 from "./prof2.jpg";
import p3 from "./prof3.jpg";

import "./font.css";
import styled from "styled-components";
import ScrollSpy from "react-ui-scrollspy";

const CustomText = styled.p`
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 100px;
`;

const t2 = styled.p`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings: "slnt" 0;
`;

const Home = () => {
  return (
    <section id="home">
      <div>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={img1} alt="Image One" />
            <Carousel.Caption>
              <CustomText>INTRODUCTION TO GENETICS</CustomText>
              <p style={{ fontSize: "23px" }}>
                Genetics unravels the secrets of inheritance, revealing how the
                blueprint of life is encoded in our DNA. It's the science behind
                eye color, inherited diseases, and even the potential for
                futuristic gene editing.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={img2} alt="Image Two" />
            <Carousel.Caption>
              <p style={{ fontSize: "33px" }}>
                We will dive into the mesmerizing world of this fascinating
                molecule, that makes us who we are!
              </p>
              <h1 style={{ fontSize: "43px" }}>
                This is what makes you so uniquely YOU
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />
        <CardGroup className="aye">
          <Card>
            <Card.Img variant="top " src={p1} />
            <Card.Body>
              <Card.Title>
                <b>Dr.Abhijeet Das</b>
              </Card.Title>
              <Card.Text>
                Dr.Abhijeet Das is a renowned geneticist with over 20 years of
                experience in the field of genetics. He earned his PhD in
                Genetics from the University of Cambridge and has since
                dedicated his career to research and education.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Contact:927482832</small>
              <br></br>
              <small className="text-muted">abhijeetdas@gmail.com</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={p2} />
            <Card.Body>
              <Card.Title>
                <b>Amit Ganguly</b>
              </Card.Title>
              <Card.Text>
                Professor Amit Ganguly is a distinguished molecular biologist
                specializing in DNA research. He completed his PhD in Molecular
                Biology at Harvard University and has spent the past 7 years
                exploring the intricacies of DNA replication, repair, and
                expression{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Contact:7293823832</small>
              <br></br>
              <small className="text-muted">amitganguly@gmail.com</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={p3} />
            <Card.Body>
              <Card.Title>
                <b>Dr.Priya Sharma</b>
              </Card.Title>
              <Card.Text>
                Dr.Priya Sharma is an accomplished biotech engineer with a PhD
                from the Indian Institute of Technology (IIT) Kharagpur with
                over 15 years of experience in the biotechnology industry, known
                for her innovative teaching methods and commitment to student
                success.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Contact:9372616183</small>
              <br></br>
              <small className="text-muted">priyasharma@gmail.com</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </section>
  );
};

export default Home;
