import React, { Component } from "react";
import styled from "styled-components";
class Card extends Component {
  state = {};
  render() {
    return (
      <Container>
        <CardContainer>
          <CardBody>
            <Photo>
              <img src="https://image.slidesharecdn.com/rgvs-naaistam-part1-110111041238-phpapp01/95/rgv-naa-istam-part1-1-728.jpg?cb=1294719312" />
            </Photo>
            <CardInfo>
              <SchoolName>
                sri vijnana vihara English medium high school
              </SchoolName>
              <Location>
                <img src="images/pin.png" />
                <span>Enikepadu</span>
              </Location>
              <Button>Visit School</Button>
            </CardInfo>
          </CardBody>
        </CardContainer>
      </Container>
    );
  }
}

export default Card;

const CardContainer = styled.div`
  height: 72vh;
`;

const CardBody = styled.div`
  background-color: white;
  height: 400px;
  width: 280px;
  position: absolute;
  margin: auto;
  top: 150px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 8px;

  /* box-shadow: 0 0 20px 10px rgba(233, 144, 7, 0.7); */
`;

const CardInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SchoolName = styled.div`
  font-size: 35px;
  font-family: "Roboto", sans-serif;
  position: absolute;
  font-size: 32;
  top: 70px;
  left: 25px;
  right: 40px;
`;

const Location = styled.div`
  > img {
    position: absolute;
    height: 25px;
    top: 290px;
    left: 25px;
  }
  > span {
    position: absolute;
    top: 298px;
    left: 50px;
  }
`;

const Button = styled.div`
  position: absolute;
  bottom: 25px;
  background-color: #f79f08;
  font-size: 20px;
  border-radius: 15px 15px 15px 15px;
  padding: 10px 20px;
  color: white;
  font-family: "Work Sans", sans-serif;
`;

const Photo = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 100px;
  margin: -60px auto 0;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  display: flex;
`;
