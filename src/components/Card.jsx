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
            <SchoolName>sri vijnana vihara</SchoolName>
            <Divider />
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
  width: 300px;
  position: absolute;
  margin: auto;
  top: 150px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  box-shadow: 0 0 20px 10px rgba(233, 144, 7, 0.7);
`;

const CardInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SchoolName = styled.div`
  font-size: 35px;
  font-family: "Raleway", sans-serif;
  position: absolute;
  letter-spacing: 1px;
  font-weight: 600;
  top: 100px;
`;
const Divider = styled.div`
  background-color: #949594;
  height: 1.5px;
  width: 50px;
  position: absolute;
  top: 190px;
`;

const Button = styled.div`
  position: absolute;
  bottom: 30px;
  background-color: #f79f08;
  border: none;
  font-size: 20px;
  padding: 13px 25px;
  color: white;
  font-family: "Work Sans", sans-serif;
`;

const Photo = styled.div`
  width: 120px;
  height: 120px;
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
      
      display:flex;
`