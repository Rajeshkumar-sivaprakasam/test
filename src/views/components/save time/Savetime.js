import "./Savetime.css";

import time from "./save-time.jpg";
const Savetime = () => {
  return (
    <div className="savetime-component">
      <div className="left-side">
        <h2>Ready to Save Time?</h2>
        <p>
          Investing and Trading in digital is the future and, the future is
          here. You are going to invest anyway, why don't you do it with the
          help of experts.
        </p>
        <button className="signup">Sign up</button>
      </div>

      <div className="right-side">
        <img src={time} alt="time" />
      </div>
    </div>
  );
};
export default Savetime;
