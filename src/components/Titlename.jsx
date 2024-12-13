import { useState } from "react";
import Titleenter from "./Titleenter";

const Titlename = () => {
  const [isPop, setIsPop] = useState(false);

  const handleOpenPop = () => {
    setIsPop(true);
  };
  const handleClose = () => {
    setIsPop(false);
  };
  return (
    <div className="boxtwo">
      <div className="logo">
        <p className="logo_word">Pocket Notes</p>
      </div>
      <button className="circle" onClick={handleOpenPop}>
        <p>+</p>
      </button>
      {isPop && <Titleenter handleClose={handleClose} />}
    </div>
  );
};

export default Titlename;
