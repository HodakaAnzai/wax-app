import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Explanationdatas } from "../explanationdata";

interface SelectShineProps {
  setSelectShineLevel: (level: number) => void;
}

export const ChooseShineLevelArea: React.FC<SelectShineProps> = ({
  setSelectShineLevel,
}) => {
  const shilelevel: string[] = ["マット", "ナチュラル", "ツヤツヤ"];
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const pushShineLevel = (level: string) => {
    let levelnumber: number;
    if (level.includes("マット")) {
      levelnumber = 1;
    } else if (level.includes("ナチュラル")) {
      levelnumber = 2;
    } else {
      levelnumber = 3;
    }
    setSelectShineLevel(levelnumber);
    setActiveButton(level);
  };

  return (
    <div className="shinelevel-choose-area">
      <h2>ワックスのツヤ感を選択してみましょう！</h2>
      <div className="shinelevel-explanation-area">
        <Row className="g-3">
          {Explanationdatas.map((explanationdata, index) => {
            return (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                className="d-flex justify-content-center"
              >
                <Card style={{ width: "30rem" }}>
                  <Card.Img variant="top" src={explanationdata.img} />
                  <Card.Body>
                    <Card.Title>{explanationdata.name}</Card.Title>
                    <Card.Text>{explanationdata.state}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="button-list">
        {shilelevel.map((shilelevelprpps) => {
          return (
            <button
              key={shilelevelprpps}
              className={`choose-button ${
                activeButton == shilelevelprpps ? "active" : ""
              }`}
              onClick={() => pushShineLevel(shilelevelprpps)}
            >
              {shilelevelprpps}
            </button>
          );
        })}
      </div>
    </div>
  );
};
