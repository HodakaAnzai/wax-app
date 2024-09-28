import { useState } from "react";

interface HairTypeSelectProps {
  setSelectHairType: (hairType: string) => void;
}

export const ChooseButtonArea: React.FC<HairTypeSelectProps> = ({
  setSelectHairType
}) => {
  const hairtype: string[] = ["軟毛", "直毛", "くせ毛"];
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const pushHairType = (type: string) => {
    setSelectHairType(type);
    setActiveButton(type);
  };

  return (
    <div className="choose-botton-area">
      <h2>自分の髪質に近いボタンを選択してみましょう</h2>
      <div className="button-list">
        {hairtype.map((type) => (
          <button
            key={type}
            className={`choose-button ${activeButton === type ? "active" : ""}`}
            onClick={() => pushHairType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};
