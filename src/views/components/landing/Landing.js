import React from "react";
import Hero from "../../../assets/images/hero.jpg";
import { Button } from "react-bootstrap";
import Cards from "./Cards";
import technical from "../../../assets/images/technical.png";
import fundamental from '../../../assets/images/fundamental.png'
import Bg1 from "../../../assets/images/bg1.jpg";
import Bg2 from "../../../assets/images/bg2.jpg";
import InvestmentTrad from "../investment trad/InvestmentTrad";
import Savetime from '../save time/Savetime'
import "./landing.css";
function Landing() {
  const data = [
    {
      SvgImg: technical,
      title: "Know how experts do it",
      description:
        "Fundamental analysts spend from weeks to a month researching a single stock, and use 3-4 different tools while preparing four types of documents. They should also know the company, industry and macroeconomic environment.",
      backgroundImg: Bg1,
    },
    {
      SvgImg: fundamental,
      title: "Technical trading is more than you think",
      description:
        "Technical analysts watches 5 different patterns, uses 10indicators and 9different tools, and masters stock market psychology on a repetitive basis for years.",
      backgroundImg: Bg2,
    },
  ];

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <img
          style={{
            maxWidth: "100vw",
            maxHeight: "90%",
            height: "90%",
            width: "100vw",
            position: "relative",
          }}
          src={Hero}
        />
        <div
          style={{
            color: "black",
            position: "absolute",
            top: "50%",
            height: "50%",
            left: "40%",
            boxSizing: "border-box",
            transform: "translate(-50%,-50%)",
          }}
        >
          <h3
            style={{
              textAlign: "justify",
              textJustify: "inter-word",
              width: "60%",
              fontSize: "2.3rem",
              fontWeight: "normal",
              color: "white",
            }}
          >
            Stocks & Cryptos, get the quickest advice from the experts
          </h3>
          <p
            style={{
              fontSize: "1.175rem",
              color: "white",
              textAlign: "justify",
              textJustify: "inter-word",
              width: "60%",
            }}
          >
            To invest and to trade. Get the on-demand recommendations. Save your
            time for research while saving your money for investing.
          </p>
          <Button
            style={{
              display: "block",
              float: "left",
              marginTop:'20px',
              width: "120px",
              padding: "10px 30px",
              borderRadius: "5px",
            }}
            variant="danger"
          >
            Sign Up
          </Button>
        </div>
        <div className="">
          <svg
            style={{
              position: "absolute",
              boxSizing: "border-box",
              top: "87%",
              left: 0,
              right: 0,
              margin: "0 auto",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 130"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <InvestmentTrad />
      {data.map((item, index) => {
        return (
          <Cards
            SvgImg={item.SvgImg}
            title={item.title}
            description={item.description}
            backgroundImg={item.backgroundImg}
          />
        );
      })}
     <Savetime />
    </div>
  );
}

export default Landing;
