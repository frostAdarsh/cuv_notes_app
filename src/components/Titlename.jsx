import { useEffect, useState } from "react";
import Titleenter from "./Titleenter";

const Titlename = () => {
  const [isPop, setIsPop] = useState(false);
  const [groups, setGroups] = useState([]);
  const [truevalue, setTrueVlaue] = useState(false);

  const handleOpenPop = () => {
    setIsPop(true);
  };

  const handleClose = () => {
    setIsPop(false);
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  };

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);
  const handleNote = (e) => {
    if (e.target.classList.contains("nameboxone") || e.target.classList.contains("text_group_name") ) {
      setTrueVlaue(true);
    }
  };

  return (
    <div className="boxtwo">
      <div className="logo">
        <p className="logo_word">Pocket Notes</p>
      </div>
      <div className="namebox" onClick={handleNote}>
        <div>
          {groups.map((group, index) => (
            <div key={index} className="nameboxone">
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  backgroundColor: group.selectedColor,
                }}
                className="nameboxtwo"
              >
                {group.groupName.slice(0, 2).toUpperCase()}
              </div>
              <span className="text_group_name">{group.groupName}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="upper">
        <button className="circle" onClick={handleOpenPop}>
          <p>+</p>
        </button>
      </div>
      {isPop && <Titleenter handleClose={handleClose} />}
    </div>
  );
};

export default Titlename;
