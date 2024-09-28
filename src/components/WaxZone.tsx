import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { waxlists } from "../data";
import { CardComponent } from "./CardComponent";

interface SelectProps {
  selectHairType: string | null;
  selectHairSetType: number | null;
  selectShineLevel: number | null;
}

export const WaxZone: React.FC<SelectProps> = ({
  selectHairType,
  selectHairSetType,
  selectShineLevel,
}) => {
  // ボタンの表示・非表示を管理するための状態を定義
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [show, setShow] = useState(false);

  // ボタンを押した際にボタンを非表示にする関数
  const showWaxlists = () => {
    if (
      selectHairType == null ||
      selectHairSetType == null ||
      selectShineLevel == null
    ) {
      setShow(true);
    } else {
      setIsButtonVisible(false);
      setShow(false);
    }
  };

  // ワックスをフィルタリングする関数
  const filteredWaxList = waxlists.filter((wax) => {
    return (
      (!selectHairType || wax.hairType.includes(selectHairType)) &&
      (!selectHairSetType || wax.setTypelevel === selectHairSetType) &&
      (!selectShineLevel || wax.shinelevel === selectShineLevel)
    );
  });

  return (
    <>
      {show && (
        <Alert
          variant="danger"
          className="denger"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading className="dengerh1">選択エラー</Alert.Heading>
          <p className="dengerp">選択していない箇所があります</p>
        </Alert>
      )}
      {isButtonVisible && (
        <div className="searchbutton-area">
          <button className="searchbutton" onClick={showWaxlists}>
            検索
          </button>
        </div>
      )}
      {!isButtonVisible && (
        <div className="waxlists-area">
          <h2>あなたにおすすめのワックスはこれです！</h2>
          <Row className="g-3">
            {filteredWaxList.length > 0 ? (
              filteredWaxList.map((wax, index) => (
                <Col key={index} xs={12} sm={6} md={6} lg={4} className="d-flex justify-content-center">
                  <CardComponent
                    name={wax.name}
                    manufacturer={wax.manufacturer}
                    description={wax.description}
                    price={wax.price}
                  />
                  </Col>
              ))
            ) : (
              <p>条件に合うワックスが見つかりませんでした。</p>
            )}
          </Row>
        </div>
      )}
    </>
  );
};
