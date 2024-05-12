import React, { ChangeEvent, useState } from "react";
import "./PanCard.css";
import PanCard from "../assets/panCard.png";
import Verification from "../assets/verification.svg";
import Close from "../assets/close.svg";
function Pancard() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.slice(0, 10);
    setInputValue(newValue);
  };

  return (
    <div className="PanCardContainer">
      <div className="panWrapper">
        <div className="HeaderConatiner">
          <img src={Verification} />
          <div className="titleContainer">
            <div className="closeButton">
              <p className="P1-verify">PAN Verification</p>
              <img src={Close} />
            </div>
            <p className="P2-verify">
              As per regulations, it is mandatory to verify your PAN details.
            </p>
          </div>
        </div>
        <div className="inputConatiner">
          <img className="panImage" src={PanCard} />
          <div>
            <div className="inputSubContainer">
              <div className="form-item">
                <input
                  type="text"
                  required
                  value={inputValue}
                  onChange={handleChange}
                  maxLength={10}
                />
                <label htmlFor="username">Enter 10-digit PAN</label>
              </div>
              <div className="inputCount">{inputValue.length}/10</div>
            </div>
            <div>
              <button className="Verify-button">VERIFY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pancard;
