import React from "react";
import Image from "../../img/challenger.png";
import Banner from "../../img/banner-image.jpg";
import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  min-height: 50vh;
  color: #000;
  h2 {
    color: #b60000;
    text-transform: uppercase;
    font-weight: bold;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  hr {
    border: 1px solid #d1e0db;
  }
`;

const Container = styled.div`
  max-width: 1320px;
  margin: auto;
  padding: 0 12px;
`;

var bannerStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${Banner})`,
  color: "#fff",
  fontSize: "5rem",
  fontFamily: "Oswald",
  lineHeight: "1",
  fontWeight: "800",
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
};

var dsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const TextStyle = styled.div`
  color: #fff;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const Feature = styled.div`
  margin: auto;
  padding: 0 12px;
  width: 100%;

  .ds-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 991px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Secondary = styled.div`
  background-color: #212121;
  color: #fff;
  width: 100%;
  margin: auto;
  padding: 12px;

  h3 {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
  .ds-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  @media (max-width: 991px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Copyright = styled.div`
  background-color: #000;
  color: #fff;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Section = styled.div``;

const App = (props) => {
  return (
    <>
      <Footer>
        <Feature>
          <Container>
            <div className="ds-container">
              <div>
                <h2 style={bannerStyle}>
                  2023 Dodge Challenger SRT Hellcat Redeye
                </h2>
                <p>
                  Visit Dodge Muscle for the latest news on power and
                  performance. Check out everything from action-packed videos to
                  downloadable wallpapers.
                </p>
              </div>
              <div>
                <img src={Image} alt="" srcset="" />
              </div>
            </div>
          </Container>
        </Feature>

        <Secondary>
          <Container>
            <div className="ds-container">
              <div>
                <h3 className="header">General Information</h3>
                <hr />
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="header">Resources</h3>
                <hr />
                <ul>
                  <li>
                    <a href="#">Active</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="header">Social Media</h3>
                <hr />
                <ul>
                  <li>Active</li>
                  <li>Link</li>
                  <li>Link</li>
                </ul>
              </div>
              <div>
                <h3 className="header">Contact Us</h3>
                <hr />
                <p>
                  New South Block , Phase 8B , 160055
                  <br />
                  909090XXXX
                  <br />
                  xyzdemomail@gmail.com
                  <br />
                  xyzdemomail
                </p>
              </div>
            </div>
          </Container>
        </Secondary>
        <Copyright>
          <div>
            <small>&copy; Copyright 2023, Example Corporation</small>
          </div>
        </Copyright>
      </Footer>
    </>
  );
};

export default App;
