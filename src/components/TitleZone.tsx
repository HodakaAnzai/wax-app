import topimg from "/images/AppTopImage2.jpg";

export const TitleZone = () => {
  return (
    <div className="container-fluid">
      <img src={topimg} className="img-fluid" alt="トップ画像" />
      <h1 className="Top-Title">自分の髪にあったワックスを見つけよう！</h1>
    </div>
  );
};
