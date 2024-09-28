export type Wax = {
  name: string;
  manufacturer:string;
  description: string;
  hairType: string[];
  setTypelevel: number;
  shinelevel: number;
  price: string;
};

export const waxlists: Wax[] = [
  {
    name: "マットハードワックス",
    manufacturer:"LIPPUS",
    description:
      "一番人気！。どんな髪の長さでも、束感を作りやすくキープ力が高いのでお勧めです！",
    hairType: ["軟毛", "直毛", "くせ毛"],
    setTypelevel: 3,
    shinelevel: 1,
    price: "1650円",
  },
  {
    name: "ドライブブラストワックス",
    manufacturer:"LIPPUS",
    description:
      "軟毛で、束感をキープしたい方にお勧めです！",
    hairType: ["軟毛"],
    setTypelevel: 3,
    shinelevel: 1,
    price: "1650円",
  },
  {
    name: "フリースタイターワックス",
    manufacturer:"LIPPUS",
    description:
      "程よいツヤ感とセット力が特徴で、ナチュラルな感じにしたい方にお勧めです！",
    hairType: ["軟毛"],
    setTypelevel: 2,
    shinelevel: 2,
    price: "1650円",
  },
  {
    name: "ハードアクティブワックス",
    manufacturer:"LIPPUS",
    description:
      "セット力が高く、束感も出しやすいのでしっかりとした髪型にセットできます！",
    hairType: ["直毛","くせ毛"],
    setTypelevel: 3,
    shinelevel: 2,
    price: "1650円",
  },
  {
    name: "ハードブラストワックス",
    manufacturer:"LIPPUS",
    description:
      "束感がとても作りやすく、軟毛の方でも束感をキープしたい方にお勧めです！",
    hairType: ["軟毛","直毛","くせ毛"],
    setTypelevel: 3,
    shinelevel: 2,
    price: "1650円",
  },
  {
    name: "ウエットブラストワックス",
    manufacturer:"LIPPUS",
    description:
      "セット力、ツヤ感ともにMAX!。濡れ髪のような束感を出したい方におすすめです！",
    hairType: ["軟毛","直毛","くせ毛"],
    setTypelevel: 3,
    shinelevel: 3,
    price: "1650円",
  },
  {
    name: "ザ・グロスワックス",
    manufacturer:"LIPPUS",
    description:
      "ツヤのある濡れ髪のスタイルにしたい方におすすめ！",
    hairType: ["軟毛","直毛"],
    setTypelevel: 2,
    shinelevel: 3,
    price: "1650円",
  },
  {
    name: "グロスムーブワックス",
    manufacturer:"LIPPUS",
    description:
      "濡れ髪のようなツヤ感で、でパーマの髪型におすすめ！",
    hairType: ["直毛","くせ毛"],
    setTypelevel: 2,
    shinelevel: 3,
    price: "1650円",
  },
  {
    name: "エアーマットハードワックス",
    manufacturer:"LIPPUS",
    description:
      "ツヤ感があまりなく、ほどよいナチュラルな印象にしたい人におすすめ！",
    hairType: ["軟毛","直毛"],
    setTypelevel: 1,
    shinelevel: 1,
    price: "1650円",
  },
  {
    name: "プレイウェーブワックス",
    manufacturer:"LIPPUS",
    description:
      "ツヤ感があまりなく、ほどよいナチュラルな印象にしたい人におすすめ！",
    hairType: ["軟毛"],
    setTypelevel: 1,
    shinelevel: 3,
    price: "1650円",
  },
  {
    name: "ナチュラル",
    manufacturer:"OCEAN TRICO",
    description:
      "ワックスの伸びが良いので、自分の髪を自在にアレンジしたい方におすすめ！",
    hairType: ["軟毛"],
    setTypelevel: 1,
    shinelevel: 3,
    price: "1650円",
  },
  {
    name: "ジェット",
    manufacturer:"OCEAN TRICO",
    description:
      "最強のセット力と、ツヤ感や立体感を出したい方におすすめ！",
    hairType: ["直毛","くせ毛"],
    setTypelevel: 3,
    shinelevel: 2,
    price: "1650円",
  },
  {
    name: "エアー",
    manufacturer:"OCEAN TRICO",
    description:
      "ふんわりとした束感や柔らかい印象を出したい方におすすめ！",
    hairType: ["軟毛","直毛"],
    setTypelevel: 2,
    shinelevel: 1,
    price: "1650円",
  },
  {
    name: "クレイ",
    manufacturer:"OCEAN TRICO",
    description:
      "動かしやすく一日中髪型をキープしたい方におすすめ！",
    hairType: ["軟毛","直毛","くせ毛"],
    setTypelevel: 3,
    shinelevel: 1,
    price: "1650円",
  },
  {
    name: "オーバードライブ",
    manufacturer:"OCEAN TRICO",
    description:
      "どんな髪型でも、束感と立体感を出したい方におすすめ!",
    hairType: ["直毛","くせ毛"],
    setTypelevel: 3,
    shinelevel: 1,
    price: "1650円",
  },
  {
    name: "エッジ",
    manufacturer:"OCEAN TRICO",
    description:
      "大胆な動きがあるシャープな束感を出したい方におすすめ！",
    hairType: ["直毛","くせ毛"],
    setTypelevel: 3,
    shinelevel: 2,
    price: "1650円",
  },
  {
    name: "シャインオーバー ",
    manufacturer:"OCEAN TRICO",
    description:
      "濡れ髪感と強いツヤ感を出したい方におすすめ！",
    hairType: ["直毛","くせ毛"],
    setTypelevel: 3,
    shinelevel: 3,
    price: "1650円",
  }
];
