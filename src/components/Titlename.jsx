import Titleenter from "./Titleenter";

const Titlename = () => {
  return (
    <div className="boxtwo">
      <div className="logo">
        <p className="logo_word">Pocket Notes</p>
      </div>
      <button className="circle">
        <p>+</p>
      </button>
      <Titleenter/>
    </div>
  );
};

export default Titlename;
