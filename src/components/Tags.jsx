import Badge from "react-bootstrap/Badge";

const Tags = ({ bgcolor, texto }) => {
  return (
    <>
      <Badge bg={bgcolor}>{texto}</Badge>
    </>
  );
};

export default Tags;
