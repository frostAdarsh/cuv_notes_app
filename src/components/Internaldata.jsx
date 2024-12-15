import { useEffect, useState } from "react";
import NoteMakingbox from "./NoteMakingbox";

const Internaldata = () => {
  const [trueValue, setTrueValue] = useState(() => {
    // Initialize trueValue from localStorage or default to false
    try {
      const storedValue = localStorage.getItem("trueValue");
      console.log("Fetched from localStorage on initialization:", storedValue);
      return storedValue ? JSON.parse(storedValue) : false;
    } catch (error) {
      console.error("Error parsing trueValue from localStorage:", error);
      return false;
    }
  });

  // Update localStorage whenever trueValue changes
  useEffect(() => {
    try {
      console.log("Saving to localStorage:", trueValue);
      localStorage.setItem("trueValue", JSON.stringify(trueValue));
    } catch (error) {
      console.error("Error saving trueValue to localStorage:", error);
    }
  }, [trueValue]); // Runs every time trueValue changes

  return (
    <div className="boxthree">
      {trueValue ? (
        <NoteMakingbox />
      ) : (
        <>
          <div className="imageone"></div>
          <div className="usedetails">
            <p className="usedetails_one">Pocket Notes</p>
            <p className="usedetails_two">
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
          <div className="ene">
            <div className="lock"></div>
            <p>end-to-end encrypted</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Internaldata;
