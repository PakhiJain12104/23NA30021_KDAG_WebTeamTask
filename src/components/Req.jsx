import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Req = () => {
  return (
    <div>
      {" "}
      <Card
        style={{
          marginLeft: "13rem",
          width: "50rem",
          align: "centre",
          fontSize: "20px",
        }}
      >
        <ListGroup variant="flush">
          <ListGroup.Item
            style={{ backgroundColor: "#CCE5FF", textAlign: "left" }}
          >
            Basic background in biology
          </ListGroup.Item>
          <ListGroup.Item style={{ textAlign: "left" }}>
            Access to a computer with reliable internet for course materials
          </ListGroup.Item>
          <ListGroup.Item
            style={{ backgroundColor: "#CCE5FF", textAlign: "left" }}
          >
            Flexibility to attend lectures and complete assignments on schedule
          </ListGroup.Item>
          <ListGroup.Item style={{ textAlign: "left" }}>
            Language proficiency in the course's instructional language
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Req;
