import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ image, name, description, bgcolor, texto }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>{description}</p>
          <Tags bgcolor={bgcolor} texto={texto} />
        </Card.Body>
      </Card>
    </>
  );
};
export default MyCard;
