import { useState } from "react";
interface SelectHairSetTypeProps {
  setSelectHairSetType: (level: number) => void;
}

export const ChooseHairsettypeArea: React.FC<SelectHairSetTypeProps> = ({
  setSelectHairSetType
}) => {
  const HairsetType: string[] = ["弱い", "中", "強い"];
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const pushHairSet = (level: string) => {
    let levelnumber: number;
    if (level.includes("弱い")) {
      levelnumber = 1;
    } else if (level.includes("中")) {
      levelnumber = 2;
    } else {
      levelnumber = 3;
    }
    setSelectHairSetType(levelnumber);
    setActiveButton(level);
  };

  return (
    <div className="hairsettype-choose-area">
      <h2>ワックスのセット力を選択してみましょう！</h2>
      
      <div className="hairset-explanation-area">
      <h3>セット力の種類</h3>
        <ul>
          <li>
            <h3>弱いセット力</h3>
            <p>ナチュラルなスタイルや、軽く整える程度のセットに最適！</p>
          </li>
          <li>
            <h3>中程度のセット力</h3>
            <p>
              髪型をしっかりとキープしますが、硬すぎず自然な仕上がりにしたい人におすすめ！
            </p>
          </li>
          <li>
            <h3>強いセット力</h3>
            <p>
              しっかりとしたスタイルを一日中キープしたいときや、特殊なヘアスタイルにしたい方におすすめ！
            </p>
          </li>
        </ul>
      </div>
      <div className="button-list">
        {HairsetType.map((hairprops) => {
          return (
            <button
              key={hairprops}
              className={`choose-button ${activeButton==hairprops ? "active":""}`}
              onClick={() => pushHairSet(hairprops)}
            >
              {hairprops}
            </button>
          );
        })}
      </div>
    </div>
  );
};
