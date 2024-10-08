import mattoimg from "/images/matt.png";
import naturalimg from "/images/natural.png";
import tuyatuya from "/images/tuyatuya.png";

export type Explanation={
    name:string;
    state:string;
    img:string;
}

export const Explanationdatas:Explanation[]=[
    {
        name:"マット",
        state:"ナチュラルなスタイルや、軽く整える程度のセットに最適！",
        img:mattoimg
    },
    {
        name:"ナチュラル",
        state:"髪型をしっかりとキープしますが、硬すぎず自然な仕上がりにしたい人におすすめ！",
        img:naturalimg
    },
    {
        name:"ツヤツヤ",
        state:" しっかりとしたスタイルを一日中キープしたいときや、特殊なヘアスタイルにしたい方におすすめ！",
        img:tuyatuya
    }
]