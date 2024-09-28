import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChooseButtonArea } from "./components/ChooseButtonArea";
import { ChooseHairsettypeArea } from './components/ChooseHairsettypeArea';
import { ChooseShineLevelArea } from "./components/ChooseShineLevelArea";
import { Favorite } from "./components/Favorite";
import { Navigation } from "./components/Navigation";
import { TitleZone } from "./components/TitleZone";
import { WaxZone } from "./components/WaxZone";

const App: React.FC = () => {
  const [selectHairType, setSelectHairType] = useState<string | null>(null);
  const [selectHairSetType, setSelectHairSetType] = useState<number | null>(null);
  const [selectShineLevel, setSelectShineLevel] = useState<number | null>(null);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TitleZone />
              <ChooseButtonArea  setSelectHairType={setSelectHairType} />
              <ChooseHairsettypeArea  setSelectHairSetType={setSelectHairSetType} />
              <ChooseShineLevelArea  setSelectShineLevel={setSelectShineLevel} />
              <WaxZone selectHairType={selectHairType} selectHairSetType={selectHairSetType} selectShineLevel={selectShineLevel} />
            </>
          }
        />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </Router>
  );
};

export default App;
