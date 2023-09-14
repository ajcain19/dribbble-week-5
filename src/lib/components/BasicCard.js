import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BasicCard = (props) => {
  return (
    <Card className="mt-3">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant={props.buttonVariant}>{props.buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default BasicCard;
