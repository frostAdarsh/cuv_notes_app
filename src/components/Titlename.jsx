import { useEffect, useState } from "react";
import Titleenter from "./Titleenter";

const Titlename = () => {
  const [isPop, setIsPop] = useState(false);
  const [groups, setGroups] = useState([]);
  const [trueValue, setTrueValue] = useState(() => {
    // Initialize trueValue from localStorage
    const storedValue = localStorage.getItem("trueValue");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const handleOpenPop = () => {
    setIsPop(true);
  };

  const handleClose = () => {
    setIsPop(false);
    refreshGroups();
  };

  const refreshGroups = () => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  };

  useEffect(() => {
    refreshGroups();
  }, []);

  // Save trueValue to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("trueValue", JSON.stringify(trueValue));
  }, [trueValue]);

  const handleNote = (e) => {
    if (
      e.target.classList.contains("nameboxone") ||
      e.target.classList.contains("text_group_name")
    ) {
      setTrueValue((prevValue) => !prevValue); // Toggle the value dynamically
    }
  };

  return (
    <div className="boxtwo">
      <div className="logo">
        <p className="logo_word">Pocket Notes</p>
      </div>
      <div className="namebox" onClick={handleNote}>
        {groups.map((group, index) => (
          <div key={index} className="nameboxone">
            <div
              className="nameboxtwo"
              style={{
                width: "3.5rem",
                height: "3.5rem",
                backgroundColor: group.selectedColor,
              }}
            >
              {group.groupName.slice(0, 2).toUpperCase()}
            </div>
            <span className="text_group_name">{group.groupName}</span>
          </div>
        ))}
      </div>
      <div className="upper">
        <button className="circle" onClick={handleOpenPop} aria-label="Add Group">
          <p>+</p>
        </button>
      </div>
      {isPop && <Titleenter handleClose={handleClose} />}
    </div>
  );
};

export default Titlename;
