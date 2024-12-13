import { useState } from "react";

const Titleenter = ({ handleClose }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const colours = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const handleOutOfBox = (e) => {
    if (e.target.classList.contains("modalbox")) {
      handleClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingGroups = JSON.parse(localStorage.getItem("groups")) || [];

    const isDuplicate = existingGroups.some(
      (group) => group.groupName.toLowerCase() === groupName.toLowerCase()
    );

    if (isDuplicate) {
      alert("Group name must be unique. Please choose a different name.");
      return;
    }

    if (groupName && selectedColor) {
      const newGroup = { groupName, selectedColor };
      const updatedGroups = [...existingGroups, newGroup];

      localStorage.setItem("groups", JSON.stringify(updatedGroups));
      handleClose();
    } else {
      alert("Please enter a group name and select a color.");
    }
  };

  return (
    <div className="modalbox" onClick={handleOutOfBox}>
      <div className="modalcon">
        <p className="textcreategroup">Create New Group</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="groupName" className="textgroup">
            Group Name
          </label>
          <input
            className="group_name_input"
            type="text"
            value={groupName}
            id="groupName"
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
          />
          <div className="color-options">
            <div>
              <p className="text_choose_colour">Choose Colour</p>
            </div>
            {colours.map((color, index) => (
              <li
                className="listyle"
                key={index}
                style={{
                  backgroundColor: color,
                  width: "1.8rem",
                  height: "1.8rem",
                  display: "inline-block",
                  margin: "0.3rem",
                  border: selectedColor === color ? "1px solid black" : "none",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
          <button type="submit" className="create-btn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Titleenter;
