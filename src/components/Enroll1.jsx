import Card from "react-bootstrap/Card";
import Enroll from "./Enroll";

const Enroll1 = () => {
  return (
    <div id="enroll">
      {" "}
      <Card
        style={{
          width: "77rem",
          height: "40rem",
          marginLeft: "0rem",
          backgroundColor: "#E0E0E0",
        }}
      >
        <Card.Body>
          <Card.Title>
            {" "}
            <h2 style={{ fontSize: "40px", color: "blue" }}>
              Enroll in Our Comprehensive Genetics Course Today!
            </h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            <p style={{ fontSize: "20px" }}>
              Unlock the mysteries of genetic science with our expertly designed
              course, tailored to provide a deep understanding of genetics from
              foundational concepts to advanced applications. Here’s how you can
              join us:
            </p>
            <p style={{ fontSize: "20px", textAlign: "left" }}>
              <h5 style={{ color: "blue" }}>Why Choose Our Course?</h5>
              <ol style={{ listStyleType: "decimal" }}>
                <li>
                  Expert Instructors: Learn from leading experts in the field of
                  genetics.
                </li>
                <li>
                  Interactive Learning: Engage in hands-on activities, group
                  discussions, and practical exercises.
                </li>
                <li>
                  Comprehensive Content: Cover a wide range of topics from DNA
                  structure to modern genetic techniques.
                </li>
                <li>
                  Flexible Learning: Access course materials online at your
                  convenience.
                </li>
              </ol>
            </p>
            <br />
            <h5 style={{ color: "blue", fontSize: "20px", textAlign: "left" }}>
              Ready to Get Started?
            </h5>
            <p style={{ fontSize: "20px", textAlign: "left" }}>
              Don’t miss this opportunity to advance your knowledge in genetics.
              Apply now and take the first step towards mastering the
              fascinating world of genetic science.
            </p>
          </Card.Text>
          <br />
          <br />
          <Enroll />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Enroll1;
