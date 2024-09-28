import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { addFavorite } from "../addFavorite";

interface WaxProps {
  name: string;
  manufacturer:string;
  description: string;
  price: string;
}

export const CardComponent: React.FC<WaxProps> = ({
  name,
  manufacturer,
  description,
  price,
}) => {
  return (
    <div className="card-content">
      <Card style={{ width: "100%", minHeight: "150px", margin: "10px 0" }}>
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text>メーカー {manufacturer}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <p>税込 {price}</p>
          <Button
            variant="outline-primary"
            className="addbutton"
            onClick={() => addFavorite(name, manufacturer,description, price)}
          >
            お気に入り
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
